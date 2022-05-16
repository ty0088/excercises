// function fetchGif(searchVal) {
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=itg7Lp951dtU1p6G6ZeJ1j1iSnSJRDbG&s=${searchVal}`, {mode: 'cors'})
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => {
//         img.src = response.data.images.original.url;
//     })
//     .catch((err) => {
//         console.log(err);
//         img.src = './wrong-GIPHY.gif';
//     });  
// }

async function fetchGif(searchVal) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=itg7Lp951dtU1p6G6ZeJ1j1iSnSJRDbG&s=${searchVal}`, {mode: 'cors'});
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    } catch (err) {
        console.log(err);
        img.src = './wrong-GIPHY.gif';
    }
}

const img = document.querySelector('img');
let searchVal = document.getElementById('searchInput').value;
const searchGIF = document.getElementById('searchBtn');
const refreshGIF = document.getElementById('refreshBtn');
const inputBox = document.getElementById('searchInput');

searchGIF.addEventListener('click', () => {
    if (document.getElementById('searchInput').value !== '') {
        searchVal = document.getElementById('searchInput').value;
        fetchGif(searchVal);
    }
});

refreshGIF.addEventListener('click', () => {
    fetchGif(searchVal);
});

window.onload = (()=>{
    fetchGif(searchVal);
});