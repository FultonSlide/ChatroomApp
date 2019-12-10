// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');

// Add a new chat
newChatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = e.target.message.value.trim();

    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch((err) => console.log(err));

    console.log('message posted');
});

// Update username
newNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'anon');

// Get the chats and render
chatroom.getChats(data => chatUI.render(data));