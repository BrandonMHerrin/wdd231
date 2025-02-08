import utils from "./utils.mjs";

class MembershipModal {
    #membershipDetails = [];
    #modal;
    #modalTitle;
    #modalCost;
    #modalDescription;
    #closeButton;
    constructor() {
        this.#loadMembershipDetails();
        this.#setModalElements();
        this.#registerCloseEventListener();
    }
    /**
     * Opens the Membership Modal for the given membership level passed.
     * @param {string} membershipLevel - The membership level to load into the modal.
     */
    openModal(membershipLevel) {
        const membershipDetail = this.#loadMembershipDetail(membershipLevel);
        this.#setModalValues(membershipDetail);
        this.#openModal();
    }

    /**
     * Ties properties to DOM elements.
     */
    #setModalElements() {
        this.#modal = utils.qs("dialog");
        this.#modalTitle = utils.qs("#modal-title");
        this.#modalCost = utils.qs("#modal-cost");
        this.#modalDescription = utils.qs("#modal-description");
        this.#closeButton = utils.qs("dialog header button");
    }

    #setModalValues(membershipDetail) {
        this.#modalTitle.textContent = membershipDetail.title;
        this.#modalCost.textContent = membershipDetail.cost;
        this.#modalDescription.textContent = membershipDetail.description;
    }

    #registerCloseEventListener() {
        this.#closeButton.addEventListener('click', this.#closeModal)
    }

    #openModal() {
        this.#modal.showModal();
    }

    #closeModal() {
        utils.qs('dialog').close();
    }

    /**
     * Load membership details.
     */
    async #loadMembershipDetails() {
        const response = await fetch('memberships.json');
        this.#membershipDetails = await response.json();
    }

    #loadMembershipDetail(membershipLevel) {
        return this.#membershipDetails.find((detail) =>
            detail.level === membershipLevel);
    }
}

export default MembershipModal;