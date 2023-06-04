import * as database from './database.js'


async function init()
{
    var objectID = (new URLSearchParams(window.location.search)).get('id');
    var object = (await database.getObject(objectID))[0];
    
    var objectNameDiv = document.getElementById('object-name');
    var objectImg = document.getElementById('object-img');
    var objectDescriptionDiv = document.getElementById('object-description');

    if (!object)
    {
        objectDescriptionDiv.textContent = "Объект не найден";
        objectNameDiv.textContent = "Объект не найден";
    }

    objectNameDiv.textContent = object.name;
    objectImg.src = './images/' + object.image_link;
    objectDescriptionDiv.textContent = object.description;
}

init()