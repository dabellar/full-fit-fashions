/**
 * @author Darleine Abellard
 * CS 132 SP 2024 
 * Final Project: Full Fit Fashions
 * 
 * The js file for FAQ page. 
 * Dynamically populates the page with FAQ data by getting it from API 
 * and formatting article elements.
 */

(function () {
    "use strict";

    const BASE_URL = "/";

    /**
     * Initializes the site's UI functions
     */
    async function init() {
        await getFAQs();
    }

    /**
     * Gets the Frequently Asked Questions from FFF API
     * and populates the #faq container with faq articles  
     */
    async function getFAQs() {
        try {
            let resp = await fetch(BASE_URL + "FAQ");
            resp = checkStatus(resp);
            const data = await resp.json();
            populateFAQArea(data);
        } catch (err) {
            handleError(err);
        }
    }

    /**
     * Populates the #faq container with faq articles
     * 
     * @param {Array} faqArray - a list of FAQ JSON objects 
     */
    function populateFAQArea(faqArray) {
        const faqCon = id("faq");
        for (let obj of faqArray) {
            faqCon.appendChild(genFAQArticle(obj));
        }
    }

    /**
     * Generates an article DOM element with FAQ data 
     * 
     * @param {Object} faqInfo - one FAQ JSON object (See getFAQs)
     * @return {DOMElement} - the article element with FAQ data
     */
    function genFAQArticle(faqInfo) {
        const article = gen("article");
        article.classList.add("question-card");

        const pQues = gen("p");
        pQues.classList.add("ques-text");
        pQues.textContent = faqInfo.question;
        article.appendChild(pQues);

        const pAns = gen("p");
        pAns.classList.add("ans-text");
        pAns.textContent = faqInfo.answer;
        article.appendChild(pAns);
        return article;
    }
    init();
})();