
const apiKey = 'E9WgSL9NaqFhDeY099NkD2l5mBHIEC43';

// Cargar GIFs en tendencia cuando la página se carga
window.onload = () => {
    loadTrendingGifs();
};

// Buscar GIFs cuando el usuario escribe
document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value;

    // Solo busca si hay más de 2 caracteres
    if (query.length > 2) {
        searchGifs(query);
    } else {
        loadTrendingGifs(); // Si la búsqueda se vacía, vuelve a mostrar los GIFs en tendencia
    }
});

// Función para cargar GIFs en tendencia
async function loadTrendingGifs() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const gifContainer = document.getElementById('gif-container');
        gifContainer.innerHTML = ''; // Limpiar los gifs anteriores

        data.data.forEach(gif => {
            const gifItem = document.createElement('div');
            gifItem.classList.add('gif-item');

            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;

            gifItem.appendChild(img);
            gifContainer.appendChild(gifItem);
        });
    } catch (error) {
        console.error('Error al cargar los gifs en tendencia:', error);
    }
}

// Función para buscar GIFs
async function searchGifs(query) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const gifContainer = document.getElementById('gif-container');
        gifContainer.innerHTML = ''; // Limpiar los gifs anteriores

        data.data.forEach(gif => {
            const gifItem = document.createElement('div');
            gifItem.classList.add('gif-item');

            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;

            gifItem.appendChild(img);
            gifContainer.appendChild(gifItem);
        });
    } catch (error) {
        console.error('Error al buscar los gifs:', error);
    }
}