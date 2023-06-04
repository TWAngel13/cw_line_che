import * as database from './database.js'

document.getElementById('orderButton').onclick = async () =>
{
    var inputName = document.getElementById('nameInput').value;
    var inputPhone = document.getElementById('phoneInput').value;
    var inputEmail = document.getElementById('emailInput').value;
    var inputRoute = document.getElementById('routeInput').value;

    if (!inputName || !inputPhone || !inputEmail || !inputRoute)
    {
        document.getElementById('exampleModalLabel').textContent = 'Ошибка!';
        document.getElementById('exampleModalContent').textContent = 'Пожалуйста, заполните все поля.';
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('emailInput').value))
    {
        document.getElementById('exampleModalLabel').textContent = 'Спасибо за обращение!';
        document.getElementById('exampleModalContent').textContent = 'Мы скоро свяжемся с Вами.';
        await database.addContact(inputName, inputPhone, inputEmail, inputRoute);
    }
    else
    {
        document.getElementById('exampleModalLabel').textContent = 'Ошибка!';
        document.getElementById('exampleModalContent').textContent = '"' + document.getElementById('emailInput').value + '" не является корректным адресом электронной почты';
    }
}