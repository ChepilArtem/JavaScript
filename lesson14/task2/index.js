'use strict';

const createMessenger = () => {
    let sender = 'Gromcode';
    let message = 'Just learn it!';    

    function sendMessage(name) {

        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }
    function setSender(send) {
        sender = send;
    }
    return {
        sendMessage,
        setMessage,
        setSender
    };
};

export default createMessenger;

const messenger = createMessenger();
messenger.sendMessage('Bob');
const newMessage = 'Good job!';
const boldNewMessage = newMessage.bold();
const messenger1 = createMessenger();
messenger1.setMessage(boldNewMessage);