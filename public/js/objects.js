import * as database from './database.js'

async function init()
{
    var objectsDiv = document.getElementById('objects-container');
    (await database.getObjects()).forEach((p) => 
    {
        var objectDiv = document.createElement('div');
        var img = document.createElement('img');
        var objectName = document.createElement('div');
        var objectNameP = document.createElement('p');

        img.src = './images/' + p.image_link;
        objectNameP.textContent = p.name;
        objectDiv.classList.add('object-card-div');
        img.classList.add('object-card-img');
        objectName.classList.add('object-card-name');
        objectDiv.onclick = () =>
        {
            window.location.href = './object.html?id=' + p.id;
        }

        objectDiv.appendChild(img);
        objectDiv.appendChild(objectName);
        objectName.appendChild(objectNameP);
        objectsDiv.appendChild(objectDiv);
    });
}

init()