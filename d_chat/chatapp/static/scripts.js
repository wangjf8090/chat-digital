document.getElementById('send-button').addEventListener('click', function() {
    var message = document.getElementById('chat-input').value;
    if (message.trim() !== '') {
        var messagesContainer = document.querySelector('.messages');
        var newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        messagesContainer.appendChild(newMessage);
        document.getElementById('chat-input').value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
