const accessKey = "";

const searchForm = document.getElementById("search-form");

const searchBox = document.getElementById("search-box");

const searchResult = document.getElementById("search-result");

const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.ariaValueMax;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
}