// fetch("https://git.esi-bru.be/api/v4/projects/41281/repository/files/pae.json/raw")
//         .then(response => response.json())
//         .then(data => f(data));

// function f(data) {
//     const liste = document.getElementById("recipes");
//     data.recipes.forEach(recipe => {
//         const e = document.createElement("li");
//         const img = document.createElement("img");
//         img.setAttribute("src", recipe.image);
//         e.textContent = `${recipe.name} `;
//         e.append(img);
//         liste.append(e);
//     });
// }

let data;

async function fetchPAE() {
    const requestPathname = '/projects/41281/repository/files/pae.json/raw';
    const url = requestURL(requestPathname);

    const request = new Request(url, getInit('GET'));
    const response = await fetch(request);

    if (!response.ok && response.status === 401) {
        throw new Error("Unauthorized");
    }

    return await response.json();
}

function getMatricules(ue, group=undefined) {
    return data
        .filter(d => 
            (d[0] == ue)
                && (group ? d[1] == group : true))  
        .map(d => d[2]);
}

function ues() {
    console.log(data);
    return new Set(data.map(d => d[0]));
}

function ueGroups(ue) {
    return new Set(data.filter(d => d[0] == ue).map(d => d[1]))
}