    console.clear();


    function makeQ(q, a, level) {
        let question = {}
        question.q = q;
        question.a = a;
        question.level = level;
        return question;
    }

    let questions = [];
    questions.push(makeQ("2^3", "8", 1));
    questions.push(makeQ("\\dfrac{1}{2}", ".5", 1));
    questions.push(makeQ("\\dfrac{1}{2}", ".5", 1));
    questions.push(makeQ("\\sqrt{16}", "4", 1));
    questions.push(makeQ("\\sqrt{16}=4", "True", 1));


    function makeTest(e) {
        for (let i = 0; i < questions.length; i++) {
            if (i % 2 == 1)
                theQuestion = '<div class="odd">';
            else
                theQuestion = '<div class="even">';
            theQuestion += '\\(';
            theQuestion += questions[i].q;
            theQuestion += '\\)';
            theQuestion += '<input data-answer="';
            theQuestion += questions[i].a;
            theQuestion += '">'
            theQuestion += '</div>';
            $('#theQuestions').append(theQuestion);
        }
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

    }

   makeTest();

    $("input").change(checkAnswer);

    function doesMatch(a,b){

        a = a.toString().toLowerCase().trim();
        b = b.toString().toLowerCase().trim();
        if(a==b){
            return true;
        } else{
            return false;
        }

    }

    function checkAnswer(e) {
        correct = $(this).data("answer");
        response = $(this).val();

        if (doesMatch(correct,response) == true) {
            $(this).removeClass("incorrect").addClass("correct");
            var numCorrect = $("#numCorrect").text();
            $("#numCorrect").text(numCorrect * 1 + 1);
        } else {
            $(this).removeClass("correct").addClass("incorrect");
        }
    }