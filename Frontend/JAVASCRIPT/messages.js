document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById('sendBtn');
  const messageInput = document.getElementById('messageInput');
  const chatBox = document.getElementById('chatBox');

  sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
      const msgDiv = document.createElement('div');
      msgDiv.classList.add('message', 'sent');
      msgDiv.textContent = message;
      chatBox.appendChild(msgDiv);
      messageInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });

  messageInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
});
