const chat = {};
chat.contacts = [];
chat.date = new Date;
var nameInput = document.querySelector('#name-input')
chat.text = true;
chat.start = () =>{
    chat.getTheDate();
}
chat.addContact = () =>{
    nameInput.style.display = 'block';
}
chat.toChat = (e) =>{
    var contacts = document.querySelectorAll('.contact');
    contacts.forEach(element => {
        element.style.border = 'black 1px solid'
        
    });
    document.querySelector('.contact-name').innerHTML = e.target.innerText;
    e.target.style.border = 'black 5px solid';
}

chat.submitContact = () =>{
    nameInput.style.display = 'none';
    var contact = {};
    contact.firstName = document.querySelector('#first-name').value;
    contact.lastName = document.querySelector('#last-name').value;
    chat.contacts.push(contact);
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    var newContact = document.createElement('div');
    var nameContact = document.createElement('h3');
    var image = document.createElement('img');
    image.classList.add('contact-img');
    image.src = "./images/contact.png";
    newContact.classList.add('contact');
    newContact.addEventListener('click', chat.toChat);
    nameContact.innerHTML = `${contact.firstName} ${contact.lastName}`;
    nameContact.style.display = 'inline-block';
    document.querySelector('.nav').appendChild(newContact);
    newContact.appendChild(image);
    newContact.appendChild(nameContact);
}
chat.getTheDate = () =>{
    document.querySelector('.time').innerHTML = chat.date.toDateString();
}
chat.submitText = () =>{    
    var userText = document.querySelector('#user-text').value;
    var newText = document.createElement('div');
    if(chat.text){
        newText.classList.add('message1');
    }
    else{
        newText.classList.add('message2');
    }
    chat.text = !chat.text;
    newText.innerHTML = userText;
    document.querySelector('.chat').appendChild(newText);
    document.querySelector('#user-text').value = '';
}

chat.start();
document.querySelector('.add-contact').addEventListener('click', chat.addContact);
document.querySelector('#submit-name').addEventListener('click', chat.submitContact);
document.querySelector('#submit-text').addEventListener('click', chat.submitText);