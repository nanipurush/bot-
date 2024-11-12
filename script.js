// Display chat messages
function displayMessage(content, sender) {
    const chatDisplay = document.getElementById('chatDisplay');
    const messageElement = document.createElement('div');
    
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = content;
  
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight; // Auto-scroll to the bottom
  }
  
  // Handle sending messages
  function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
  
    if (message) {
      displayMessage(message, 'user');
      messageInput.value = ''; // Clear input
      
      // Simulate bot response
      setTimeout(() => {
        displayMessage("Bot: I'm here to help!", 'bot');
      }, 1000);
    }
  }
  
  // Optional: Allow 'Enter' key to send message
  document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  