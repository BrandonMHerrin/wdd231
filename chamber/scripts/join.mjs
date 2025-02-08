import MembershipModal from "./membership-modal.mjs";
import utils from "./utils.mjs";

const membershipModal = new MembershipModal();
const aside = utils.qs('aside');
const timestamp = utils.qs('#timestamp');
const form = utils.qs('#join-form');

function registerEventHandlers() {
    aside.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const button = event.target;
            membershipModal.openModal(button.dataset.membershipLevel);
            console.log(button.dataset.membershipLevel);
        }
    });
    form.addEventListener('submit', (event) => 
        timestamp.value = Date.now()
    );
}

function Page() {
    registerEventHandlers();
}

Page();
