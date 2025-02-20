import initializeCoreComponents from "../main.js";
import utils from "../utils.js";

function initializePageResources() {
    initializeCoreComponents();
    const response = parseResponseValues();
    renderValues(response);
}

function parseResponseValues() {
    let searchString = window.location.search;
    searchString = searchString.slice(1);
    searchString = searchString.replaceAll('+', ' ');
    searchString = searchString.replace('%40', '@');
    const searchArray = searchString.split('&').map((record) => 
        record.split('=')
    );
    return Object.fromEntries(searchArray);
}

function renderValues(value) {
    utils.qs('#first').value = value.first;
    utils.qs('#last').value = value.last;
    utils.qs('#email').value = value.email;
}

initializePageResources();