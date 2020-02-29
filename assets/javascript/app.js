$(document).ready(function () {

    var count = 8;
    var countdown;
    var ready = false;
    var correct = 0;

    $("<button>").click(function () {
        $("#container").css("visibility", "visible");
        ready = true;
    });

    if (ready) {
        countdown = setInterval(timer, 1000);

        function timer() {
            count--;

            var conversion = timeConverter(count);

            $("#timer").html("Time Remaining: " + conversion);
        }

        function timeConverter(time) {
            if (time == 0) {
                clearInterval(countdown);
                alert("Time is up!");
                ready = false;
            }

            if (time > 59) {
                var minutes = "01";
                var seconds = time - 60;

                if (seconds < 10) {

                    seconds = "0" + seconds;
                }

                return minutes + ":" + seconds;
            }

            {
                var minutes = "00";
                var seconds = time;

                if (seconds < 10) {
                    seconds = "0" + seconds;
                }

                return minutes + ":" + seconds;
            }


        }
    }
    $("#submit").click(function () {
        var question1 = $('input[name = "response1"]:checked').val();
        var question2 = $('input[name = "response2"]:checked').val();
        var question3 = $('input[name = "response3"]:checked').val();
        var question4 = $('input[name = "response4"]:checked').val();
        var question5 = $('input[name = "response5"]:checked').val();

        if (question1 === "2005") {
            correct++;
        }
        if (question2 === "Krasinski") {
            correct++;
        }
        if (question3 === "Chili's") {
            correct++;
        }
        if (question4 === "Jim") {
            correct++;
        }
        if (question5 === "Kevin") {
            correct++;
        }

        $("#score").text("You got " + correct + " questions correct!");

    });


});