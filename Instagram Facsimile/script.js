let url = new URL('https://picsum.photos/v2/list');
url.search = new URLSearchParams({
    page: 1,
    limit: 20,
})
let request = new Request(url);

/*  Example structure of page to have a reference

    <div id="card">
        <div id="card-title">
            <h3>Name</h>
        </div>

        <figure id="image-container">
            <img src="example.jpg" alt="">
        </figure>

        <div id="description">
            <p>Descrizione</p>
        </div>
    </div>
*/

function createPosts(post)
{
    const parentElement = document.getElementById('container');

    for(let i = 0; i < post.length; i++)
    {
        let cardContainer = document.createElement('div');
        cardContainer.setAttribute('id', 'card-container');
        parentElement.appendChild(cardContainer);

        let titleContainer = document.createElement('div');
        titleContainer.setAttribute('id', 'title-container');
        cardContainer.appendChild(titleContainer);

        let cardTitle = document.createElement('h3');
        cardTitle.setAttribute('id', 'card-title');
        cardTitle.textContent = post[i].author;
        titleContainer.appendChild(cardTitle);

        let imageContainer = document.createElement('figure');
        imageContainer.setAttribute('id', 'image-container');
        cardContainer.appendChild(imageContainer);

        let img = document.createElement('img');
        img.src = post[i].download_url;
        imageContainer.appendChild(img);

        let description = document.createElement('div');
        description.setAttribute('id', 'description');
        cardContainer.appendChild(description);

        let p = document.createElement('p');
        p.textContent = post[i].url;
        description.appendChild(p);
    }
}

//FetchAPI Metodo GET
fetch(request)
    .then(function(response)
    {
        switch(response.status)
        {
            case 200:
                return response.json();
                break;
            default:
                throw new Error(response.statusText);
        }
    })
    .then(function(dataArray)
    {
        createPosts(dataArray);
    })
    .catch(function(err)
    {
        alert('Errore', err);
    });

/*jQuery Ajax Metodo GET
$.ajax({
    url: url,
    method: 'GET',
    async: true,
    dataType: 'json',
    headers: 
    {
        accept:  'application/json',
    },
}).done(function(dataArray)
    {
        createPosts(dataArray);
    });
*/

/*Axios Metodo GET
axios.get(url)
    .then(function(response)
    {
        switch(response.status)
        {
            case 200:
                return response.data;
                break;
            default:
                throw new Error(response.statusText);
        }
    })
    .then(function(dataArray)
    {
        createPosts(dataArray);
    })
    .catch(function(err)
    {
        alert('Errore', err);
    });
*/