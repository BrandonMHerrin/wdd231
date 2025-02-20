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
        let pageName;
        const pathArray = window.location.pathname.split("/");
        pageName = pathArray[pathArray.length - 1]
        if (!pageName) {
            pageName = "index.html"
        }
        return pageName;
    }
};

export default utils;