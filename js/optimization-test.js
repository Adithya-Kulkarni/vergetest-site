/*
===============================================================================
VERGECLOUD JAVASCRIPT OPTIMIZATION TEST
===============================================================================

PURPOSE

This JavaScript file has intentionally been written in an unnecessarily
verbose and human-readable style.

The purpose is to create a useful test file for VergeCloud JavaScript
Optimization.

BEFORE OPTIMIZATION

You should be able to see:

- This large comment
- Lots of whitespace
- Long variable names
- Multiple helper functions
- Multiple line breaks
- Human-readable formatting

AFTER OPTIMIZATION

A JavaScript optimizer/minifier may:

- Remove these comments
- Remove whitespace
- Remove unnecessary line breaks
- Shorten internal code
- Reduce total response size

FUNCTIONAL REQUIREMENT

The animation controls must continue to work after optimization.

===============================================================================
*/


(function () {


    "use strict";



    /*
    ===========================================================================
    SECTION 01
    DOM ELEMENT REFERENCES
    ===========================================================================
    */


    var animationControlButton =
        document.getElementById(
            "opt-test-button"
        );



    var animatedOrangeBall =
        document.getElementById(
            "opt-animation-ball"
        );



    var javascriptStatusMessage =
        document.getElementById(
            "opt-test-status"
        );



    var interactionCounter =
        document.getElementById(
            "opt-test-counter"
        );



    var optimizationTestCard =
        document.getElementById(
            "opt-test-card"
        );



    var animationStage =
        document.querySelector(
            ".opt-animation-stage"
        );



    /*
    ===========================================================================
    SECTION 02
    APPLICATION STATE
    ===========================================================================
    */


    var currentAnimationMode =
        0;



    var totalNumberOfClicks =
        0;



    var optimizationTestInitialized =
        false;



    var animationModes =
        [
            "normal",
            "fast",
            "paused"
        ];



    /*
    ===========================================================================
    SECTION 03
    VALIDATION
    ===========================================================================
    */


    function requiredElementsExist() {


        var buttonExists =
            Boolean(
                animationControlButton
            );



        var ballExists =
            Boolean(
                animatedOrangeBall
            );



        var statusExists =
            Boolean(
                javascriptStatusMessage
            );



        var counterExists =
            Boolean(
                interactionCounter
            );



        var allRequiredElementsExist =
            buttonExists &&
            ballExists &&
            statusExists &&
            counterExists;



        return (
            allRequiredElementsExist
        );

    }



    /*
    ===========================================================================
    SECTION 04
    UTILITY FUNCTION
    FORMAT NUMBER
    ===========================================================================
    */


    function convertNumberToText(
        numberValue
    ) {


        var textValue =
            String(
                numberValue
            );



        return (
            textValue
        );

    }



    /*
    ===========================================================================
    SECTION 05
    UTILITY FUNCTION
    CURRENT TIME
    ===========================================================================
    */


    function addLeadingZero(
        numberValue
    ) {


        if (
            numberValue < 10
        ) {


            return (
                "0" +
                numberValue
            );

        }



        return (
            String(
                numberValue
            )
        );

    }



    function getCurrentTime() {


        var currentDate =
            new Date();



        var currentHour =
            addLeadingZero(
                currentDate.getHours()
            );



        var currentMinute =
            addLeadingZero(
                currentDate.getMinutes()
            );



        var currentSecond =
            addLeadingZero(
                currentDate.getSeconds()
            );



        var currentTimeText =
            currentHour +
            ":" +
            currentMinute +
            ":" +
            currentSecond;



        return (
            currentTimeText
        );

    }



    /*
    ===========================================================================
    SECTION 06
    UPDATE COUNTER
    ===========================================================================
    */


    function updateInteractionCounter() {


        if (
            !interactionCounter
        ) {


            return;

        }



        var counterText =
            convertNumberToText(
                totalNumberOfClicks
            );



        interactionCounter.textContent =
            counterText;

    }



    /*
    ===========================================================================
    SECTION 07
    UPDATE STATUS
    ===========================================================================
    */


    function updateStatusMessage(
        newStatusMessage
    ) {


        if (
            !javascriptStatusMessage
        ) {


            return;

        }



        javascriptStatusMessage.textContent =
            newStatusMessage;

    }



    /*
    ===========================================================================
    SECTION 08
    RESET ANIMATION CLASSES
    ===========================================================================
    */


    function clearAnimationClasses() {


        animatedOrangeBall
            .classList
            .remove(
                "fast"
            );



        animatedOrangeBall
            .classList
            .remove(
                "paused"
            );

    }



    /*
    ===========================================================================
    SECTION 09
    NORMAL MODE
    ===========================================================================
    */


    function activateNormalMode() {


        clearAnimationClasses();



        animationControlButton.textContent =
            "Speed Up Animation";



        updateStatusMessage(
            "JavaScript: normal mode at " +
            getCurrentTime()
        );



        if (
            optimizationTestCard
        ) {


            optimizationTestCard
                .setAttribute(
                    "data-state",
                    "normal"
                );

        }



        if (
            animationStage
        ) {


            animationStage
                .classList
                .remove(
                    "inactive"
                );



            animationStage
                .classList
                .add(
                    "active"
                );

        }

    }



    /*
    ===========================================================================
    SECTION 10
    FAST MODE
    ===========================================================================
    */


    function activateFastMode() {


        clearAnimationClasses();



        animatedOrangeBall
            .classList
            .add(
                "fast"
            );



        animationControlButton.textContent =
            "Pause Animation";



        updateStatusMessage(
            "JavaScript: fast mode at " +
            getCurrentTime()
        );



        if (
            optimizationTestCard
        ) {


            optimizationTestCard
                .setAttribute(
                    "data-state",
                    "fast"
                );

        }



        if (
            animationStage
        ) {


            animationStage
                .classList
                .add(
                    "active"
                );

        }

    }



    /*
    ===========================================================================
    SECTION 11
    PAUSED MODE
    ===========================================================================
    */


    function activatePausedMode() {


        clearAnimationClasses();



        animatedOrangeBall
            .classList
            .add(
                "paused"
            );



        animationControlButton.textContent =
            "Resume Animation";



        updateStatusMessage(
            "JavaScript: paused at " +
            getCurrentTime()
        );



        if (
            optimizationTestCard
        ) {


            optimizationTestCard
                .setAttribute(
                    "data-state",
                    "paused"
                );

        }



        if (
            animationStage
        ) {


            animationStage
                .classList
                .remove(
                    "active"
                );



            animationStage
                .classList
                .add(
                    "inactive"
                );

        }

    }



    /*
    ===========================================================================
    SECTION 12
    CHANGE ANIMATION MODE
    ===========================================================================
    */


    function changeAnimationMode() {


        totalNumberOfClicks =
            totalNumberOfClicks +
            1;



        updateInteractionCounter();



        currentAnimationMode =
            (
                currentAnimationMode +
                1
            ) %
            animationModes.length;



        if (
            currentAnimationMode === 0
        ) {


            activateNormalMode();

        }



        else if (
            currentAnimationMode === 1
        ) {


            activateFastMode();

        }



        else if (
            currentAnimationMode === 2
        ) {


            activatePausedMode();

        }



        console.log(
            "[VergeCloud Optimization Test]",
            {
                mode:
                    animationModes[
                        currentAnimationMode
                    ],

                clicks:
                    totalNumberOfClicks,

                time:
                    getCurrentTime()
            }
        );

    }



    /*
    ===========================================================================
    SECTION 13
    DEBUG INFORMATION
    ===========================================================================
    */


    function printInitializationInformation() {


        console.log(
            "=================================================="
        );



        console.log(
            "VergeCloud JavaScript Optimization Test"
        );



        console.log(
            "External JavaScript loaded successfully."
        );



        console.log(
            "Animation controls initialized."
        );



        console.log(
            "Current mode:",
            animationModes[
                currentAnimationMode
            ]
        );



        console.log(
            "Loaded at:",
            getCurrentTime()
        );



        console.log(
            "=================================================="
        );

    }



    /*
    ===========================================================================
    SECTION 14
    INITIALIZATION
    ===========================================================================
    */


    function initializeOptimizationTest() {


        if (
            optimizationTestInitialized === true
        ) {


            return;

        }



        if (
            requiredElementsExist() === false
        ) {


            console.error(
                "Optimization test could not initialize because required HTML elements were not found."
            );



            return;

        }



        optimizationTestInitialized =
            true;



        currentAnimationMode =
            0;



        totalNumberOfClicks =
            0;



        updateInteractionCounter();



        updateStatusMessage(
            "External JavaScript loaded at " +
            getCurrentTime()
        );



        if (
            optimizationTestCard
        ) {


            optimizationTestCard
                .setAttribute(
                    "data-state",
                    "ready"
                );

        }



        animationControlButton
            .addEventListener(
                "click",
                changeAnimationMode
            );



        printInitializationInformation();

    }



    /*
    ===========================================================================
    SECTION 15
    START APPLICATION
    ===========================================================================
    */


    initializeOptimizationTest();



})();


/*
===============================================================================
END OF VERGECLOUD JAVASCRIPT OPTIMIZATION TEST
===============================================================================
*/
