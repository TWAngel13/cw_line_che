import * as database from './database.js'

var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

async function init () {
    var routeSelect = document.getElementById('route-select');
    (await database.getRoutes()).forEach((route) =>
    {
        var routeOption = document.createElement('option');
        routeOption.value = route.id;
        routeOption.classList.add('route-option');
        routeOption.textContent = route.name;
        routeSelect.appendChild(routeOption);
    });

    routeSelect.onchange = (async () =>
    {
        myMap.geoObjects.removeAll();
        var routePoints = (await database.getPointsForRoute(routeSelect.value)).map((p) => {return [p.x, p.y];});
        var routePolyline = new ymaps.Polyline(routePoints, {
            balloonContent: "Ломаная линия"
        }, {
            balloonCloseButton: false,
            strokeColor: "8000FF",  
            strokeWidth: 4,
            strokeOpacity: 0.75
        });
        myMap.geoObjects.add(routePolyline);
        (await database.getObjects()).forEach((p) => 
        {
            var objectPlacemark = new ymaps.Placemark([p.x, p.y],
                {
                    balloonContent: '<a href="./object.html?id=' + p.id + '">' + p.name + '</a>'
                });
            myMap.geoObjects.add(objectPlacemark);
        })
    });

    

    myMap = new ymaps.Map('map', {
        center: [55.162710, 61.393836],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    });

    routeSelect.onchange();
}