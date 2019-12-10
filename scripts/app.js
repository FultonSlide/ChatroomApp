// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

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
    // Update name via the chatroom class
    const newName = e.target.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

// Update the chat room
rooms.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(data => chatUI.render(data));
    }
});

// Check local storage for username
const username = localStorage.username ? localStorage.username : 'anon';

// Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// Get the chats and render
chatroom.getChats(data => chatUI.render(data));