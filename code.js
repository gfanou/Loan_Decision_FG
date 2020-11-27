$(document).ready(function () {
    $("button").click(loanDecision);
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {  required: true,
                    text:true
                },
            salary:
                {   required: true,
                    min:0,
                    max:1000000,
                    digits:true
                },
            score:
                {   required: true,
                    min:300,
                    max:850,
                    digits:true
                },
            month:
                {   required: true,
                    min:0,
                    digits:true

                },
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Please enter your name",
                },

        };

    function  loanDecision() {


        var name = $("#firstName").val();
        var mySalary = $("#salary").val();
        var myScore = $("#score").val();
        var duration = $("#month").val();
        var output;
        var nothing = "";

        if (mySalary >= 40000 & myScore >= 600) {
            output = `Hey ${name} ! Congratulation! Your loan is approved`;
        } else if (mySalary >= 40000 & myScore < 600 & duration >= 13) {
            output = `Hey ${name} ! Congratulation! Your loan is approved`;
        } else if (mySalary >= 40000 & myScore < 600 & duration < 13) {
            output = `Hey ${name} ! we're sorry your loan is denied`;

        } else if (mySalary < 40000 & myScore >= 600 & duration >= 13) {
            output = `Hey ${name} ! Congratulation! Your loan is approved`;
        } else if (mySalary < 40000 & myScore >= 600 & duration < 13) {
            output = `Hey ${name} ! we're sorry your loan is denied`;
        } else if (mySalary <1 & myScore <1) {
            output = `Please fill out each field first.`;
        } else if (mySalary < 40000 & myScore < 600) {
            output = `Hey ${name}! We're sorry your loan is denied`;
        }


            $(" #message").text(output);

    }

    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: loanDecision,
            rules: myRules,
            messages: myMessages
        }
    );

});