/*
JAVASCRIPT OPTIMIZATION TEST

This file intentionally contains comments,
whitespace and readable variable names so
JavaScript minification can be tested.
*/

(function () {

    "use strict";

    var testButton =
        document.getElementById(
            "opt-test-button"
        );

    var testStatus =
        document.getElementById(
            "opt-test-status"
        );

    var testCard =
        document.querySelector(
            ".opt-test-card"
        );

    var clickCount =
        0;

    function updateStatus() {

        clickCount =
            clickCount + 1;

        testStatus.textContent =
            "JavaScript working: " +
            clickCount +
            (
                clickCount === 1
                    ? " click"
                    : " clicks"
            );

        testStatus.classList.add(
            "success"
        );

        testCard.classList.toggle(
            "js-active"
        );

        console.log(
            "JavaScript optimization test click:",
            clickCount
        );
    }

    function initializeTest() {

        if (
            !testButton ||
            !testStatus ||
            !testCard
        ) {

            console.error(
                "Optimization test elements not found."
            );

            return;
        }

        testStatus.textContent =
            "JavaScript loaded";

        testStatus.classList.add(
            "success"
        );

        testButton.addEventListener(
            "click",
            updateStatus
        );

        console.log(
            "Optimization test JavaScript loaded."
        );
    }

    initializeTest();

})();
