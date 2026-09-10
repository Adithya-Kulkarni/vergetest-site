/*
============================================================================
VERGECLOUD JAVASCRIPT OPTIMIZATION TEST
============================================================================

This file is intentionally verbose so JavaScript minification can be tested.

Expected behavior:
1. "Waiting for JavaScript..." changes to "JavaScript loaded".
2. The grey status dot becomes green.
3. Clicking "Test JavaScript" increments the circular counter.
4. The card moves slightly.
5. The button text changes.
6. All behavior should remain identical after JavaScript optimization.

The comments and whitespace in this file are intentional test material.
============================================================================
*/

(function () {
    "use strict";

    /*
    ------------------------------------------------------------------------
    Find the HTML elements required by this test.
    ------------------------------------------------------------------------
    */

    var testCard =
        document.getElementById(
            "vc-opt-test"
        );

    var testButton =
        document.getElementById(
            "vc-opt-button"
        );

    var testStatus =
        document.getElementById(
            "vc-opt-status"
        );

    var testDot =
        document.getElementById(
            "vc-opt-dot"
        );

    var testCounter =
        document.getElementById(
            "vc-opt-counter"
        );

    var resultContainer =
        document.querySelector(
            ".vc-opt-result"
        );

    /*
    ------------------------------------------------------------------------
    Test state.
    ------------------------------------------------------------------------
    */

    var clickCount =
        0;

    /*
    ------------------------------------------------------------------------
    Helper function for formatting the current time.
    ------------------------------------------------------------------------
    */

    function addLeadingZero(numberValue) {
        if (numberValue < 10) {
            return "0" + numberValue;
        }

        return String(numberValue);
    }

    function getCurrentTimeText() {
        var currentDate =
            new Date();

        var hours =
            addLeadingZero(
                currentDate.getHours()
            );

        var minutes =
            addLeadingZero(
                currentDate.getMinutes()
            );

        var seconds =
            addLeadingZero(
                currentDate.getSeconds()
            );

        return (
            hours +
            ":" +
            minutes +
            ":" +
            seconds
        );
    }

    /*
    ------------------------------------------------------------------------
    Update the visible status text.
    ------------------------------------------------------------------------
    */

    function updateStatus(messageText) {
        if (!testStatus) {
            return;
        }

        testStatus.textContent =
            messageText;
    }

    /*
    ------------------------------------------------------------------------
    Give the counter a small animation each time it changes.
    ------------------------------------------------------------------------
    */

    function animateCounter() {
        if (!testCounter) {
            return;
        }

        testCounter.classList.remove(
            "vc-opt-counter-pop"
        );

        void testCounter.offsetWidth;

        testCounter.classList.add(
            "vc-opt-counter-pop"
        );

        window.setTimeout(
            function () {
                testCounter.classList.remove(
                    "vc-opt-counter-pop"
                );
            },
            180
        );
    }

    /*
    ------------------------------------------------------------------------
    Click handler.
    ------------------------------------------------------------------------
    */

    function handleTestButtonClick() {
        clickCount =
            clickCount + 1;

        testCounter.textContent =
            String(clickCount);

        testCard.classList.toggle(
            "vc-opt-active"
        );

        testCard.setAttribute(
            "data-js-state",
            "clicked"
        );

        var clickLabel =
            clickCount === 1
                ? "click"
                : "clicks";

        updateStatus(
            "Working: " +
            clickCount +
            " " +
            clickLabel +
            " at " +
            getCurrentTimeText()
        );

        if (clickCount % 2 === 1) {
            testButton.textContent =
                "JavaScript Works";
        } else {
            testButton.textContent =
                "Test JavaScript";
        }

        animateCounter();

        console.log(
            "[VergeCloud optimization test] JavaScript click event executed.",
            {
                clickCount: clickCount,
                time: getCurrentTimeText()
            }
        );
    }

    /*
    ------------------------------------------------------------------------
    Initialization.
    ------------------------------------------------------------------------
    */

    function initializeOptimizationTest() {
        if (
            !testCard ||
            !testButton ||
            !testStatus ||
            !testDot ||
            !testCounter ||
            !resultContainer
        ) {
            console.error(
                "[VergeCloud optimization test] Required HTML elements are missing."
            );

            return;
        }

        testCard.setAttribute(
            "data-js-state",
            "loaded"
        );

        resultContainer.classList.add(
            "vc-opt-success"
        );

        updateStatus(
            "JavaScript loaded at " +
            getCurrentTimeText()
        );

        testButton.addEventListener(
            "click",
            handleTestButtonClick
        );

        console.log(
            "[VergeCloud optimization test] External JavaScript loaded successfully."
        );
    }

    /*
    ------------------------------------------------------------------------
    Start immediately because this script is placed immediately before
    the closing body tag.
    ------------------------------------------------------------------------
    */

    initializeOptimizationTest();

})();
