const chat = {};
chat.contacts = [];
var nameInput = document.querySelector('#name-input')
// var userText = document.querySelector('#user-text').value;
chat.text = true;
chat.start = () => {
    chat.getTheDate();
    chat.createEmoji();
    // chat.dateTime();
    // console.log(chat.dateTime());
    
}
chat.dateTime = () => new Date;
chat.addEmoji = (e) => {
    var newDiv = document.createElement('div');
    // newDiv.classList.add('div-emoji');
    document.querySelector('.chat').appendChild(newDiv);
    var addEmojiToChat = document.createElement('img');
    addEmojiToChat.src = e.target.src;
    newDiv.appendChild(addEmojiToChat);
    if (chat.text) {
        newDiv.classList.add('message1');
    }
    else {
        newDiv.classList.add('message2');
    }
    chat.text = !chat.text;

}
chat.createEmoji = () => {
    for (let i = 0; i < 6; i++) {
        var newEmoji = document.createElement('div');
        document.querySelector('.emoji').appendChild(newEmoji);
        var emoji = document.createElement('img');
        emoji.style.cursor = 'pointer';
        emoji.addEventListener('click', chat.addEmoji);
        emoji.src = `./images/${i}.png`;
        newEmoji.appendChild(emoji);
    }
}
chat.addContact = () => {
    nameInput.style.display = 'block';
}
chat.toChat = (e) => {
    var contacts = document.querySelectorAll('.contact');
    contacts.forEach(element => {
        element.style.border = 'rgba(70, 161, 75, 0.671) 1px solid'
        element.style.backgroundColor = "";
    });
    document.querySelector('.contact-name').innerHTML = e.target.innerText;
    e.target.style.border = 'rgba(70, 161, 75, 0.671) 3px solid';
    e.target.style.backgroundColor = "rgba(70, 161, 75, 0.671)";
    document.querySelector('#user-text').disabled = '';
}

chat.submitContact = (e) => {    
    nameInput.style.display = 'none';
    var contact = {};
    contact.text = [];
    contact.firstName = document.querySelector('#first-name').value;
    contact.lastName = document.querySelector('#last-name').value;
    chat.contacts.push(contact);
    // var x = chat.contacts.indexOf(contact);
    // console.log(x);
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    var newContact = document.createElement('div');
    var nameContact = document.createElement('h3');
    var image = document.createElement('img');
    image.classList.add('contact-img');
    image.src = "./images/contact.png";
    newContact.classList.add('contact');
    newContact.setAttribute("class", "contact animated bounce")
    newContact.addEventListener('click', chat.toChat);
    nameContact.innerHTML = `${contact.firstName} ${contact.lastName}`;
    nameContact.style.display = 'inline-block';
    document.querySelector('.nav').appendChild(newContact);
    newContact.appendChild(image);
    newContact.appendChild(nameContact);
}
chat.getTheDate = () => {
    var date = chat.dateTime();
    document.querySelector('.time').innerHTML = date.toDateString();
}
chat.submitText = () => {
    var userText = document.querySelector('#user-text').value;
    if (userText != '') {
        var newText = document.createElement('div');
        newText.setAttribute("class","inline");
        newText.style.backgroundColor="rgba(70, 161, 75, 0.671)";
        if (chat.text) {
            newText.classList.add('message1');
        }
        else {
            newText.classList.add('message2');
        }
        chat.text = !chat.text;
        newText.innerHTML = userText;
        document.querySelector('.chat').appendChild(newText);
        var textTime = document.createElement('div');
        var date = chat.dateTime();
        textTime.innerHTML = date.toLocaleTimeString();
        textTime.style.fontSize = '8px';
        newText.appendChild(textTime);
        chat.contacts[0].text.push(userText);
        document.querySelector('#user-text').value = '';
    }
}


chat.start();
document.querySelector('.add-contact').addEventListener('click', chat.addContact);
document.querySelector('#submit-name').addEventListener('click', chat.submitContact);
document.querySelector('#submit-text').addEventListener('click', chat.submitText);