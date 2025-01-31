function greetUser() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    if (name === 'Artem') {
        greetingMessage.textContent = 'Artem, jan shoma doste khobe man hasti azizammm <3 take care cause I really need u for the rest of my hard days as the only one who can entirely understand what i say and feel';
    } else {
        greetingMessage.textContent = 'Maybe an error occurred, so try again and enter your name correctly!';
    }
}
