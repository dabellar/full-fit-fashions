/**
 * @author Darleine Abellard
 * CS 132 SP 2024 
 * Final Project: Full Fit Fashions
 * 
 * The js file for contact page, which adds the user's feedback to JSON file
 */

(function () {
    "use strict";

    const BASE_URL = "/";
    const CONTACT_URL = BASE_URL + "contact";

    /**
     * Initializes the site's UI functions
     */
    async function init() {
        id("contact-form").addEventListener("submit", async (evt) => {
            evt.preventDefault();
            await addUserFeedback();
        });
        
    }

    /**
     * Retrieves the form data from #contact-form and 
     * posts the user feedback 
     */
    async function addUserFeedback() {
        let params = new FormData(id("contact-form"));
        try {
            let resp = await fetch(CONTACT_URL, { method : "POST", body : params });
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
        let successCon = id("confirmation");
        successCon.textContent = confirmMsg;
    }

    init();
})();