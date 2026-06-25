const config = {
  openrouter: {
    apiUrl: "https://openrouter.ai/api/v1/chat/completions",
    model: "gpt-3.5-turbo",
    apiKey: "YOUR_OPENROUTER_API_KEY"
  },
  ui: {
    theme: "light",
    primaryColor: "#3b82f6",
    secondaryColor: "#6366f1",
    font: "Inter"
  },
  conversation: {
    defaultGreeting: "Olá! Eu sou seu assistente de suporte. Como posso ajudar?",
    placeholder: "Digite sua mensagem..."
  }
};

// Initialize widget after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Store config globally for debugging
  window.CHATBOT_CONFIG = config;
  initChatWidget(config);
});

function initChatWidget(cfg) {
  // Floating button
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-deepBlue/80 text-white shadow-lg hover:bg-deepBlue hover:scale-105 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-deepBlue/50';
  btn.setAttribute('aria-label', 'Abrir chat');
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="500"
     height="500"
     fill="#2e7d32">
    <path d="M24,24H12C5.38,24,0,18.62,0,12S5.38,0,12,0s12,5.38,12,12v12Z"/>
</svg>
  `;
  document.body.appendChild(btn);

  // Overlay panel
  const overlay = document.createElement('div');
  overlay.className = 'fixed bottom-20 right-4 z-50 w-96 rounded-xl bg-white shadow-xl border border-gray-200 flex flex-col max-h-[400px] hidden';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Chatbot de suporte');
  overlay.innerHTML = `
    <div class="flex-1 overflow-y-auto p-4 space-y-4" id="chatMessages"></div>
    <form class="p-4 border-t" id="chatForm">
      <div class="flex">
        <input type="text" id="chatInput" class="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-deepBlue/50" placeholder="${cfg.conversation.placeholder}" autocomplete="off" required />
        <button type="submit" class="ml-2 px-4 py-2 rounded-md bg-deepBlue/50 hover:bg-deepBlue/75 transition-colors focus:outline-none focus:ring-2 focus:ring-deepBlue/50">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12h-9M5 12h9M5 18h14a2 2 0 110-4H5a2 2 0 110-4h14a2 2 0 110 4h-9z" />
          </svg>
        </button>
      </div>
    </form>
  `;
  document.body.appendChild(overlay);

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'absolute top-2 right-2 text-gray-500 hover:text-gray-700';
  closeBtn.setAttribute('aria-label', 'Fechar chat');
  closeBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';
  overlay.prepend(closeBtn);

  // Toggle open/close
  let open = false;
  btn.addEventListener('click', () => {
    open = true;
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    document.getElementById('chatInput').focus();
  });
  closeBtn.addEventListener('click', () => {
    open = false;
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    btn.focus();
  });

  // Form handling
  const form = overlay.querySelector('#chatForm');
  const input = overlay.querySelector('#chatInput');
  const messages = overlay.querySelector('#chatMessages');

  // Initial greeting
  addMessage('bot', cfg.conversation.defaultGreeting);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userMsg = input.value.trim();
    if (!userMsg) return;
    addMessage('user', userMsg);
    input.value = '';
    const typing = document.createElement('div');
    typing.className = 'animate-pulse flex space-x-1';
    typing.innerHTML = '<div class="w-2 h-2 bg-gray-400 rounded-full"></div><div class="w-2 h-2 bg-gray-400 rounded-full"></div><div class="w-2 h-2 bg-gray-400 rounded-full"></div>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
    try {
      const resp = await fetch(cfg.openrouter.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${cfg.openrouter.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: cfg.openrouter.model,
          messages: [{ role: 'user', content: userMsg }],
          max_tokens: 200
        })
      });
      if (!resp.ok) throw new Error(`API ${resp.status}`);
      const data = await resp.json();
      const botReply = data.choices?.[0]?.message?.content || 'Desculpe, ocorreu um erro.';
      messages.removeChild(typing);
      addMessage('bot', botReply);
    } catch (err) {
      console.error(err);
      messages.removeChild(typing);
      addMessage('bot', 'Desculpe, não consegui responder agora. Tente novamente mais tarde.');
    }
    messages.scrollTop = messages.scrollHeight;
  });

  function addMessage(type, text) {
    const wrapper = document.createElement('div');
    wrapper.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-2`;
    wrapper.setAttribute('role', type === 'user' ? 'presentation' : 'assistant');
    const avatar = document.createElement('div');
    avatar.className = 'w-9 h-9 rounded-full flex items-center justify-center';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.innerHTML = type === 'user'
      ? '<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg>'
      : '<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg>';
    const bubble = document.createElement('div');
    bubble.className = 'max-w-xs px-3 py-2 rounded-md ' + (type === 'user' ? 'bg-deepBlue/50 text-white' : 'bg-gray-100 text-gray-900');
    bubble.textContent = text;
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
  }
}
