import utils from '../utils.js';

const modal = utils.qs('.post-details');
const btnOpen = utils.qs('.open-modal');
const btnClose = utils.qs('.close-modal');


function initilizePostModal() {
  registerEventHandlers();
}

function registerEventHandlers() {
    listenForOpenClick();
    listenForCloseClick();
}

function listenForOpenClick() {
    btnOpen.addEventListener('click', () => 
        modal.showModal());
}

function listenForCloseClick() {
    btnClose.addEventListener('click', () => 
        modal.close())
}


export default initilizePostModal;