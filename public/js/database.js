export async function getPoints()
{
    const response = await fetch("/api/points", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true)
    {
        return await response.json();
    }
    else
    {
        console.log(response);
    }
}

export async function getPointsForRoute(id)
{
    const response = await fetch("/api/points/" + id, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true)
    {
        return await response.json();
    }
    else
    {
        console.log(response);
    }
}

export async function getRoutes()
{
    const response = await fetch("/api/routes", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true)
    {
        return await response.json();
    }
    else
    {
        console.log(response);
    }
}

export async function getObjects()
{
    const response = await fetch("/api/objects", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true)
    {
        return await response.json();
    }
    else
    {
        console.log(response);
    }
}

export async function getObject(id)
{
    const response = await fetch("/api/objects/" + id, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true)
    {
        return await response.json();
    }
    else
    {
        console.log(response);
    }
}

export async function addContact(name, phone, email, route)
{
    const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            route: route
        })
    });
}