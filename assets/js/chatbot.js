const config = {
  openrouter: {
    apiUrl: "https://openrouter.ai/api/v1/chat/completions",
    model: "gpt-3.5-turbo",
    apiKey: "YOUR_OPENROUTER_API_KEY"
  },
  conversation: {
    defaultGreeting: "Olá! Eu sou sua assistente de suporte. Como posso ajudar?",
    placeholder: "Digite sua mensagem..."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.CHATBOT_CONFIG = config;
  initChatWidget(config);
});

function initChatWidget(cfg) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'chat-launcher';
  btn.setAttribute('aria-label', 'Abrir triagem técnica');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = `
    <span class="chat-launcher__pulse" aria-hidden="true"></span>
    <svg class="chat-launcher__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.75S5.75 9.6 5.75 14.6a6.25 6.25 0 0 0 12.5 0C18.25 9.6 12 2.75 12 2.75Z" stroke="currentColor" stroke-width="1.8" />
      <path d="M9.15 14.2h5.7M10.25 17h3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
  `;
  document.body.appendChild(btn);

  const overlay = document.createElement('div');
  overlay.className = 'chat-panel hidden';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Triagem técnica Água Doce');
  overlay.innerHTML = `
    <div class="chat-panel__header">
      <div>
        <p class="chat-panel__kicker">CHATBOT</p>
        <h2>Água Doce</h2>
      </div>
      <button type="button" class="chat-panel__close" aria-label="Fechar chat">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 18 18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>



    <div class="chat-panel__messages" id="chatMessages" aria-live="polite"></div>

    <div class="chat-panel__shortcuts" aria-label="Atalhos de assunto">
      <button type="button" data-prompt="Preciso de orçamento para análise de água.">Análise de água</button>
      <button type="button" data-prompt="Preciso saber se minha operação precisa de ART.">ART</button>
      <button type="button" data-prompt="Preciso de limpeza de reservatório com laudo.">Reservatório</button>
    </div>

    <form class="chat-panel__form" id="chatForm">
      <label class="sr-only" for="chatInput">Mensagem</label>
      <input type="text" id="chatInput" placeholder="${cfg.conversation.placeholder}" autocomplete="off" required />
      <button type="submit" aria-label="Enviar mensagem">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 12 20 4l-5.2 16-3.1-6.7L4 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
          <path d="m11.7 13.3 3.1-3.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </button>
    </form>
  `;
  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector('.chat-panel__close');
  const form = overlay.querySelector('#chatForm');
  const input = overlay.querySelector('#chatInput');
  const messages = overlay.querySelector('#chatMessages');
  const shortcutButtons = overlay.querySelectorAll('[data-prompt]');
  let open = false;

  function setOpen(nextOpen) {
    open = nextOpen;
    overlay.classList.toggle('hidden', !open);
    btn.classList.toggle('is-open', open);
    overlay.setAttribute('aria-hidden', String(!open));
    btn.setAttribute('aria-expanded', String(open));

    if (open) {
      input.focus();
    } else {
      btn.focus();
    }
  }

  btn.addEventListener('click', () => setOpen(!open));
  closeBtn.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && open) setOpen(false);
  });

  shortcutButtons.forEach((shortcut) => {
    shortcut.addEventListener('click', () => {
      input.value = shortcut.dataset.prompt;
      input.focus();
    });
  });

  addMessage('bot', cfg.conversation.defaultGreeting);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userMsg = input.value.trim();
    if (!userMsg) return;

    addMessage('user', userMsg);
    input.value = '';

    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.setAttribute('aria-label', 'Assistente digitando');
    typing.innerHTML = '<span></span><span></span><span></span>';
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
      const botReply = data.choices?.[0]?.message?.content || 'Não recebi uma resposta válida. Envie o contexto da demanda novamente.';
      typing.remove();
      addMessage('bot', botReply);
    } catch (err) {
      console.error(err);
      typing.remove();
      addMessage('bot', 'Não consegui responder agora. Para agilizar, envie pelo WhatsApp o local, a urgência e o tipo de serviço desejado.');
    }

    messages.scrollTop = messages.scrollHeight;
  });

  function addMessage(type, text) {
    const wrapper = document.createElement('div');
    wrapper.className = `chat-message chat-message--${type}`;
    wrapper.setAttribute('role', type === 'user' ? 'presentation' : 'status');

    const avatar = document.createElement('div');
    avatar.className = 'chat-message__avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.innerHTML = type === 'user'
      ? '<svg viewBox="0 0 24 24" fill="none"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3s-5 5.4-5 9.2a5 5 0 0 0 10 0C17 8.4 12 3 12 3Z" stroke="currentColor" stroke-width="1.8"/><path d="M9.8 12.2h4.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

    const bubble = document.createElement('div');
    bubble.className = 'chat-message__bubble';
    bubble.textContent = text;

    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
  }
}
