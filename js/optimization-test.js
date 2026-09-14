/*
===============================================================================
VERGECLOUD JAVASCRIPT OPTIMIZATION TEST
===============================================================================

PURPOSE

This JavaScript file has deliberately been written in a very inefficient,
verbose and human-readable format.

The purpose of this file is NOT to demonstrate good JavaScript coding style.

The purpose is specifically to create a JavaScript asset that contains enough:

- comments
- whitespace
- blank lines
- indentation
- long variable names
- verbose functions
- repeated documentation
- unnecessary formatting

to make VergeCloud JavaScript Optimization easy to test.

===============================================================================

WHAT SHOULD HAPPEN WHEN OPTIMIZATION IS OFF

The browser/CDN should receive a large JavaScript file containing:

1. These comments
2. Hundreds of line breaks
3. Large amounts of whitespace
4. Long variable names
5. Human-readable formatting
6. Repeated documentation blocks

===============================================================================

WHAT SHOULD HAPPEN WHEN OPTIMIZATION IS ON

A JavaScript minifier would normally:

1. Remove these comments
2. Remove blank lines
3. Remove unnecessary spaces
4. Collapse the code into very few lines
5. Potentially shorten internal expressions
6. Reduce the total number of bytes transferred

===============================================================================

FUNCTIONAL REQUIREMENT

Despite optimization, the application must continue to work.

The expected visible behavior is:

NORMAL MODE
The orange ball moves normally.

FIRST BUTTON CLICK
The orange ball moves faster.

SECOND BUTTON CLICK
The orange ball pauses.

THIRD BUTTON CLICK
The orange ball resumes normal movement.

The click counter should also increase every time.

===============================================================================

VERGECLOUD TEST MARKER

VC_JS_OPTIMIZATION_TEST_MAIN_COMMENT

If JavaScript optimization removes comments, this marker should disappear from
the optimized response.

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 01
===============================================================================

This entire section exists only to increase the unoptimized JavaScript size.

A minifier can safely remove this comment because it has absolutely no effect
on the JavaScript application.

Marker:

VC_JS_COMMENT_BLOCK_01

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 02
===============================================================================

Whitespace between JavaScript statements normally has no functional purpose.

The large amount of whitespace used throughout this file exists deliberately
so that the optimization system has additional characters that it can remove.

Marker:

VC_JS_COMMENT_BLOCK_02

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 03
===============================================================================

This is another intentionally unnecessary documentation section.

The VergeCloud optimizer should ideally remove comments like this while
preserving the actual executable JavaScript.

Marker:

VC_JS_COMMENT_BLOCK_03

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 04
===============================================================================

The source file should remain easy to inspect while optimization is disabled.

When optimization is enabled, this explanatory text does not need to be sent
to the browser.

Marker:

VC_JS_COMMENT_BLOCK_04

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 05
===============================================================================

This block is deliberately repetitive.

It exists to create an obvious difference between the unoptimized source and
the optimized source.

Marker:

VC_JS_COMMENT_BLOCK_05

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 06
===============================================================================

None of the text inside this comment is required for the animation.

It is therefore removable during JavaScript minification.

Marker:

VC_JS_COMMENT_BLOCK_06

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 07
===============================================================================

The application should behave exactly the same whether this comment exists or
whether a minifier removes it completely.

Marker:

VC_JS_COMMENT_BLOCK_07

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 08
===============================================================================

This is additional test payload.

It increases the byte size of the original JavaScript source without affecting
the output of the application.

Marker:

VC_JS_COMMENT_BLOCK_08

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 09
===============================================================================

The JavaScript optimization feature can be verified by comparing:

OFF:
large file
many lines
comments present

ON:
smaller file
few lines
comments absent

Marker:

VC_JS_COMMENT_BLOCK_09

===============================================================================
*/


/*
===============================================================================
MINIFICATION TEST COMMENT BLOCK 10
===============================================================================

This is the final large pre-execution comment block.

More verbose executable JavaScript follows below.

Marker:

VC_JS_COMMENT_BLOCK_10

===============================================================================
*/



(function () {


    "use strict";



    /*
    ===========================================================================
    SECTION 01
    FIND THE REQUIRED HTML ELEMENTS
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
    APPLICATION STATE VARIABLES
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
    VALIDATION FUNCTION
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
    NUMBER TO TEXT CONVERSION
    ===========================================================================
    */


    function convertNumberToText(
        numberValue
    ) {


        var convertedNumber =
            String(
                numberValue
            );



        return (
            convertedNumber
        );

    }



    /*
    ===========================================================================
    SECTION 05
    LEADING ZERO HELPER
    ===========================================================================
    */


    function addLeadingZero(
        numberValue
    ) {


        if (
            numberValue < 10
        ) {


            var valueWithLeadingZero =
                "0" +
                numberValue;



            return (
                valueWithLeadingZero
            );

        }



        var regularNumberValue =
            String(
                numberValue
            );



        return (
            regularNumberValue
        );

    }



    /*
    ===========================================================================
    SECTION 06
    CURRENT TIME GENERATOR
    ===========================================================================
    */


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
    SECTION 07
    UPDATE CLICK COUNTER
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
    SECTION 08
    UPDATE STATUS MESSAGE
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
    SECTION 09
    UPDATE CARD STATE
    ===========================================================================
    */


    function updateCardState(
        newState
    ) {


        if (
            !optimizationTestCard
        ) {


            return;

        }



        optimizationTestCard.setAttribute(
            "data-state",
            newState
        );

    }



    /*
    ===========================================================================
    SECTION 10
    ACTIVATE ANIMATION STAGE
    ===========================================================================
    */


    function activateAnimationStage() {


        if (
            !animationStage
        ) {


            return;

        }



        animationStage.classList.remove(
            "inactive"
        );



        animationStage.classList.add(
            "active"
        );

    }



    /*
    ===========================================================================
    SECTION 11
    DEACTIVATE ANIMATION STAGE
    ===========================================================================
    */


    function deactivateAnimationStage() {


        if (
            !animationStage
        ) {


            return;

        }



        animationStage.classList.remove(
            "active"
        );



        animationStage.classList.add(
            "inactive"
        );

    }



    /*
    ===========================================================================
    SECTION 12
    REMOVE ALL SPECIAL ANIMATION CLASSES
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
    SECTION 13
    NORMAL ANIMATION MODE
    ===========================================================================
    */


    function activateNormalMode() {


        clearAnimationClasses();



        animationControlButton.textContent =
            "Speed Up Animation";



        var normalStatusMessage =
            "JavaScript: normal mode at " +
            getCurrentTime();



        updateStatusMessage(
            normalStatusMessage
        );



        updateCardState(
            "normal"
        );



        activateAnimationStage();

    }



    /*
    ===========================================================================
    SECTION 14
    FAST ANIMATION MODE
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



        var fastStatusMessage =
            "JavaScript: fast mode at " +
            getCurrentTime();



        updateStatusMessage(
            fastStatusMessage
        );



        updateCardState(
            "fast"
        );



        activateAnimationStage();

    }



    /*
    ===========================================================================
    SECTION 15
    PAUSED ANIMATION MODE
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



        var pausedStatusMessage =
            "JavaScript: paused at " +
            getCurrentTime();



        updateStatusMessage(
            pausedStatusMessage
        );



        updateCardState(
            "paused"
        );



        deactivateAnimationStage();

    }



    /*
    ===========================================================================
    SECTION 16
    VERBOSE DIAGNOSTIC MESSAGE BUILDER
    ===========================================================================
    */


    function buildVerboseDiagnosticMessage(
        diagnosticLabel,
        diagnosticValue
    ) {


        var diagnosticPrefix =
            "[VergeCloud JS Optimization Diagnostic] ";



        var diagnosticLabelText =
            String(
                diagnosticLabel
            );



        var diagnosticSeparator =
            " = ";



        var diagnosticValueText =
            String(
                diagnosticValue
            );



        var diagnosticTimestamp =
            " at " +
            getCurrentTime();



        var completeDiagnosticMessage =
            diagnosticPrefix +
            diagnosticLabelText +
            diagnosticSeparator +
            diagnosticValueText +
            diagnosticTimestamp;



        return (
            completeDiagnosticMessage
        );

    }



    /*
    ===========================================================================
    SECTION 17
    BUILD DIAGNOSTIC DATA
    ===========================================================================
    */


    function buildDiagnosticCollection() {


        var diagnostics =
            [];



        diagnostics.push(
            [
                "buttonExists",
                Boolean(
                    animationControlButton
                )
            ]
        );



        diagnostics.push(
            [
                "ballExists",
                Boolean(
                    animatedOrangeBall
                )
            ]
        );



        diagnostics.push(
            [
                "statusExists",
                Boolean(
                    javascriptStatusMessage
                )
            ]
        );



        diagnostics.push(
            [
                "counterExists",
                Boolean(
                    interactionCounter
                )
            ]
        );



        diagnostics.push(
            [
                "cardExists",
                Boolean(
                    optimizationTestCard
                )
            ]
        );



        diagnostics.push(
            [
                "stageExists",
                Boolean(
                    animationStage
                )
            ]
        );



        diagnostics.push(
            [
                "animationModeCount",
                animationModes.length
            ]
        );



        return (
            diagnostics
        );

    }



    /*
    ===========================================================================
    SECTION 18
    PRINT DIAGNOSTICS
    ===========================================================================
    */


    function printDiagnosticCollection(
        diagnosticCollection
    ) {


        if (
            !Array.isArray(
                diagnosticCollection
            )
        ) {


            return;

        }



        diagnosticCollection.forEach(
            function (
                diagnosticEntry
            ) {


                var diagnosticLabel =
                    diagnosticEntry[
                        0
                    ];



                var diagnosticValue =
                    diagnosticEntry[
                        1
                    ];



                var diagnosticMessage =
                    buildVerboseDiagnosticMessage(
                        diagnosticLabel,
                        diagnosticValue
                    );



                console.debug(
                    diagnosticMessage
                );

            }
        );

    }



    /*
    ===========================================================================
    SECTION 19
    HANDLE BUTTON CLICK
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



        var currentModeName =
            animationModes[
                currentAnimationMode
            ];



        console.log(
            "[VergeCloud Optimization Test]",
            {
                mode:
                    currentModeName,

                clicks:
                    totalNumberOfClicks,

                time:
                    getCurrentTime()
            }
        );

    }



    /*
    ===========================================================================
    SECTION 20
    PRINT INITIALIZATION INFORMATION
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
            "Large unoptimized JavaScript loaded successfully."
        );



        console.log(
            "Current animation mode:",
            animationModes[
                currentAnimationMode
            ]
        );



        console.log(
            "Current click count:",
            totalNumberOfClicks
        );



        console.log(
            "JavaScript loaded at:",
            getCurrentTime()
        );



        console.log(
            "=================================================="
        );

    }



    /*
    ===========================================================================
    SECTION 21
    INITIALIZE APPLICATION
    ===========================================================================
    */


    function initializeOptimizationTest() {


        if (
            optimizationTestInitialized === true
        ) {


            console.warn(
                "Optimization test has already been initialized."
            );



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



        var initialStatusMessage =
            "External JavaScript loaded at " +
            getCurrentTime();



        updateStatusMessage(
            initialStatusMessage
        );



        updateCardState(
            "ready"
        );



        animationControlButton
            .addEventListener(
                "click",
                changeAnimationMode
            );



        var initializationDiagnostics =
            buildDiagnosticCollection();



        printDiagnosticCollection(
            initializationDiagnostics
        );



        printInitializationInformation();

    }



    /*
    ===========================================================================
    SECTION 22
    START APPLICATION
    ===========================================================================
    */


    initializeOptimizationTest();



})();


/*
===============================================================================
ADDITIONAL POST-SCRIPT MINIFICATION TEST COMMENT
===============================================================================

Everything inside this final comment is unnecessary for execution.

It is deliberately placed after the JavaScript application so that the source
contains removable content at both the beginning and end of the file.

A JavaScript minifier should normally delete this entire section.

Markers:

VC_JS_FINAL_COMMENT
VC_JS_OPTIMIZATION_TEST_COMPLETE

When optimization is disabled you should be able to find these strings.

When optimization is enabled and comments are being stripped, these markers
should no longer appear in the delivered JavaScript response.

===============================================================================
*/
