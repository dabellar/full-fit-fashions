/**
 * @author Darleine Abellard
 * CS 132 SP 2024 
 * Final Project: Full Fit Fashions
 * 
 * The js file for the admin page, which updates an item
 */

(function () {
    "use strict";

    const BASE_URL = "/";
    const STOCK_URL = BASE_URL + "updateItem";

    /**
     * Initializes the site's UI functions
     */
    async function init() {
        id("add-item-form").addEventListener("submit", async (evt) => {
            evt.preventDefault();
            await updateItemQuant();
        });
        
    }

    /**
     * Retrieves the form data from #add-item-form and 
     * updates the given item's quantity
     */
    async function updateItemQuant() {
        let params = new FormData(id("add-item-form"));
        try {
            let resp = await fetch(STOCK_URL, { method : "POST", body : params});
            resp = checkStatus(resp);
            let data = await resp.text();
            displayMsg(data);
        } catch (err) {
            handleError(err);
        }
    }

    /**
     * Displays success or error message
     * 
     * @param {String} confirmMsg - message of either success or error
     */
    function displayMsg(confirmMsg) {
        let successCon = id("successAdd");
        successCon.textContent = confirmMsg;
    }
    
    init();
})();