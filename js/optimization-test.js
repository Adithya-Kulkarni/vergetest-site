/*
VERGECLOUD JAVASCRIPT OPTIMIZATION TEST
This is intentionally unminified.
*/

(function () {

    "use strict";

    var button =
        document.getElementById(
            "opt-test-button"
        );

    var ball =
        document.getElementById(
            "opt-animation-ball"
        );

    var status =
        document.getElementById(
            "opt-test-status"
        );

    var counter =
        document.getElementById(
            "opt-test-counter"
        );

    var mode =
        0;

    var clicks =
        0;

    if (
        !button ||
        !ball ||
        !status ||
        !counter
    ) {

        console.error(
            "Optimization test could not initialize."
        );

        return;

    }

    status.textContent =
        "External JavaScript loaded";

    button.addEventListener(
        "click",
        function () {

            clicks =
                clicks + 1;

            counter.textContent =
                clicks;

            mode =
                (mode + 1) % 3;

            ball.classList.remove(
                "fast",
                "paused"
            );

            if (mode === 1) {

                ball.classList.add(
                    "fast"
                );

                button.textContent =
                    "Pause Animation";

                status.textContent =
                    "JavaScript: fast mode";

            }

            else if (mode === 2) {

                ball.classList.add(
                    "paused"
                );

                button.textContent =
                    "Resume Animation";

                status.textContent =
                    "JavaScript: paused";

            }

            else {

                button.textContent =
                    "Speed Up Animation";

                status.textContent =
                    "JavaScript: normal mode";

            }

        }
    );

})();
