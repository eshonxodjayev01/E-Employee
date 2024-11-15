// Elements
const chatList = document.getElementById('chat-list');
const chatMessages = document.getElementById('chat-messages');
const chatUsername = document.getElementById('chat-username');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

let currentChat = '';
let chats = {
    'User1': [],
    'User2': [],
    'User3': []
};

// Load chat when a user is selected
chatList.addEventListener('click', (e) => {
    if (e.target.classList.contains('chat-item')) {
        currentChat = e.target.getAttribute('data-username');
        chatUsername.textContent = currentChat;
        displayMessages();
    }
});

// Send a message
sendBtn.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText && currentChat) {
        chats[currentChat].push({ sender: 'You', text: messageText });
        displayMessages();
        messageInput.value = '';
    }
});

// Display messages in the chat area
function displayMessages() {
    chatMessages.innerHTML = '';
    chats[currentChat].forEach((msg) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-bubble');
        messageElement.classList.add(msg.sender === 'You' ? 'sent' : 'received');
        messageElement.textContent = `${msg.sender}: ${msg.text}`;
        chatMessages.appendChild(messageElement);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
