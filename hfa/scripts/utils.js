const utils = {
    /**
     * Query selector that returns and HTML Element.
     * @param {string} query 
     * @returns {HTMLElement}
     */
    qs: function(query) {
        return document.querySelector(query);
    },
    /**
     * Gets the current page.
     * @returns {string}
     */
    currentPage: function() {
        return window.location.pathname.slice(1);
    }
};

export default utils;