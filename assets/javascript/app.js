$(document).ready(function () {

    var count;
    var countdown;
    var ready;
    var correct;
    
    reset();

    function reset(){
        count = 75;
        ready = false;
        correct = 0;
    }

    $("#start").click(function () {
        
        $("#container").css("visibility", "visible");
        ready = true;

        if (ready) {
            countdown = setInterval(timer, 1000);

            timer();

        }
    });

    function timer() {
        count--;
        console.log(count);
        var conversion = timeConverter(count);

        $("#timer").html("Time Remaining: " + conversion);
    }

    function timeConverter(time) {
        if (time < 1) {
            reset();
            clearInterval(countdown);
            alert("Time is up!");
            
        }
        
        if (time > 59) {
            var minutes = "01";
            var seconds = time - 60;

            if (seconds < 10) {

                seconds = "0" + seconds;
            }

            return minutes + ":" + seconds;
        }


        var minutes = "00";
        var seconds = time;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return minutes + ":" + seconds;



    }



    $("#submit").click(function () {
        var question1 = $('input[name = "response1"]:checked').val();
        var question2 = $('input[name = "response2"]:checked').val();
        var question3 = $('input[name = "response3"]:checked').val();
        var question4 = $('input[name = "response4"]:checked').val();
        var question5 = $('input[name = "response5"]:checked').val();

        if (question1 === "2005") {
            correct++;
        }else{

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
        clearInterval(countdown);

        $("#score").css("visibility", "visible");
        $("#wins").append(correct);
        $("#losses").append(5-correct);
        $("#message").text("You got " + correct + " questions correct!");

        reset();

    });


});