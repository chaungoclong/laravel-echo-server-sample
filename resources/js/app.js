import './bootstrap';

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

function sendMessage() {
    const message = document.getElementById('messageContent').value;
    fetch('/messages', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({message: message, _token: csrfToken})
    })
        .then();
}

const sendButton = document.getElementById('sendButton');
const messageBox = document.getElementById('messages');

const main = () => {
    window.Echo
        .channel('laravel_database_chat')
        .listen('MessageSent', function (event) {
            const messageLine = document.createElement('p');
            messageLine.innerText = event.message;
            messageBox.append(messageLine);
        })

    sendButton.addEventListener('click', sendMessage);
}

main();
