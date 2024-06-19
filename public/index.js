/**
 * @author Darleine Abellard
 * CS 132 SP 2024 
 * Final Project: Full Fit Fashions
 * 
 * TODO: WRITE DESCRIPTION
 */

(function () {
    "use strict";

    const BASE_URL = "/";
    const STOCK_URL = BASE_URL + "clothing/bottoms/skirts";

    /**
     * Initializes the site's UI functions
     */
    async function init() {
        openShoppingCart();
        await readFileTest();
    }

    async function readFileTest() {
        try {
            let resp = await fetch(STOCK_URL);
            resp = checkStatus(resp);
            const data = await resp.json();
            console.log(data);
        } catch (err) {
            handleError(err);
        }
    }

    /**
     * Animates the shopping cart icon on mouse hover
     * and opens cart when clicked
     */
    function openShoppingCart() {
        let cartImg = id("cart-icon");
        let dialog = qs("dialog");
        let closeBtn = id("close-cart-btn");
        cartImg.addEventListener("mouseover", () => {
            cartImg.src = "imgs/shopping-bag-animated.gif";
            cartImg.alt = "shopping bag active";
        });
        cartImg.addEventListener("mouseout", () => {
            cartImg.src = "imgs/shopping-bag-static.png";
            cartImg.alt = "shopping bag static";
        });
        cartImg.addEventListener("click", () => {
            dialog.showModal();
        });
        closeBtn.addEventListener("click", () => {
            dialog.close();
        });
    }


/***************************** HELPER FUNCTIONS *****************************/
    function genDisplayViewCards() {
        
    }

    
    init();
})();