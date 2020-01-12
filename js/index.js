const chat = {};
chat.contacts = [];
var nameInput = document.querySelector('#name-input')
chat.text = true;
chat.idContact = null;
chat.start = () => {
    chat.getTheDate();
    chat.createEmoji();
}
chat.dateTime = () => new Date;
chat.addEmoji = (e) => {
    if (chat.idContact != null) {

        var newDiv = document.createElement('div');
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
        var textTime = document.createElement('div');
        var date = chat.dateTime();
        textTime.innerHTML = date.toLocaleTimeString();
        textTime.style.fontSize = '8px';
        newDiv.appendChild(textTime);
    }
}
chat.createEmoji = (event) => {
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
    chat.idContact = e.target.id;
    // console.log(chat.idContact);
    var contacts = document.querySelectorAll('.contact');
    contacts.forEach(element => {
        element.style.border = 'rgba(70, 161, 75, 0.671) 1px solid'
        element.style.backgroundColor = "";
    });
    document.querySelector('.contact-name').innerHTML = e.target.innerText;
    e.target.style.border = 'rgba(70, 161, 75, 0.671) 3px solid';
    e.target.style.backgroundColor = "rgba(70, 161, 75, 0.671)";
    document.querySelector('#user-text').disabled = '';
    var messagesOne = document.querySelectorAll('.message1');
    var messagesTwo = document.querySelectorAll('.message2');
    messagesOne.forEach(element => {
        element.remove();
    });
    messagesTwo.forEach(element => {
        element.remove();
    });
    
    if (chat.contacts[chat.idContact].text.length > 0) {
        for (const message of chat.contacts[chat.idContact].text) {
            var divText = document.createElement('div');
            divText.innerHTML = message;
            if (chat.text) {
                divText.classList.add('message1');
            }
            else {
                divText.classList.add('message2');
            }
            chat.text = !chat.text;
            document.querySelector('.chat').appendChild(divText);
            var textTime = document.createElement('div');
            var date = chat.dateTime();
            textTime.innerHTML = date.toLocaleTimeString();
            textTime.style.fontSize = '8px';
            divText.appendChild(textTime);
        }
    }
}

chat.submitContact = (e) => {
    nameInput.style.display = 'none';
    var contact = {};
    contact.text = [];
    contact.firstName = document.querySelector('#first-name').value;
    contact.lastName = document.querySelector('#last-name').value;
    chat.contacts.push(contact);
    chat.idContact = chat.contacts.indexOf(contact);
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    var newContact = document.createElement('div');
    newContact.id = chat.idContact;
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
chat.submitText = (e) => {
    var userText = document.querySelector('#user-text').value;
    if (userText != '') {
        var newText = document.createElement('div');
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
        chat.contacts[chat.idContact].text.push(userText);
        document.querySelector('#user-text').value = '';
    }
}


chat.start();
document.querySelector('.add-contact').addEventListener('click', chat.addContact);
document.querySelector('#submit-name').addEventListener('click', chat.submitContact);
document.querySelector('#submit-text').addEventListener('click', chat.submitText);