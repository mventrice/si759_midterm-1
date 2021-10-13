const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here

messageInput.addEventListener('input', () => {
    const messageChars = messageInput.value;
    const charLength = messageChars.length;
    // console.log(charLength)
    if(charLength <= MAX_CHARACTERS) {
        const charsLeft = MAX_CHARACTERS - charLength;
        messageFeedback.textContent = `${charsLeft} characters left`;
        messageInput.classList.remove('is-invalid');
        messageFeedback.classList.remove('invalid-feedback');
        messageInput.classList.add('is-valid');
        messageFeedback.classList.add('valid-feedback'); 
    };
    if(charLength > MAX_CHARACTERS){
        const charsOver = charLength - MAX_CHARACTERS;
        messageFeedback.textContent = `${charsOver} characters too long`;
        messageInput.classList.remove('is-valid');
        messageFeedback.classList.remove('valid-feedback');
        messageInput.classList.add('is-invalid');
        messageFeedback.classList.add('invalid-feedback');
    };
})