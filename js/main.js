    console.clear();


    function makeQ(q, a, level, type, img=null) {
        let question = {}
        question.q = q;
        question.a = a;
        question.level = level;
        question.type = type;
        question.img = img;
        return question;
    }

    let questions = [];
    questions.push(makeQ("2^3", "8", 1, 1));
    questions.push(makeQ("\\dfrac{1}{2}", ".5", 1, 1));
    questions.push(makeQ("\\sqrt{16}", "4", 1, 1));
    questions.push(makeQ("\\sqrt{16}=4", "True", 1, 4));
    questions.push(makeQ("How many Radians are in 360 degrees", "2\\pi", 3, 2))
    questions.push(makeQ("Find the perimiter:", "?", 3, 3, "qi.png"))
    questions.push(makeQ("How cute is this dog, 0-10", "10", 1, 3, "dog.jpg"))
// For Question.type:
//     1 = Number question
//     2 = Plain text question
//     3 = Text with picture question
//     4 = True or false question

    function makeTest(e) {      
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].type == 1){
                if (i % 2 == 1){
                    theQuestion = '<div class="odd">';
                }
                else{
                    theQuestion = '<div class="even">';
                }
                theQuestion += '\\(';
                theQuestion += questions[i].q;
                theQuestion += '\\)';
                theQuestion += '<input data-answer="';
                theQuestion += questions[i].a;
                theQuestion += '">'
                theQuestion += '</div>';
                $('#theQuestions').append(theQuestion);
             }
             else if(questions[i].type == 2){
                if (i % 2 == 1)
                    theQuestion = '<div class="odd">';
                else
                    theQuestion = '<div class="even">';
                theQuestion += questions[i].q;
                theQuestion += '<input data-answer="';
                theQuestion += questions[i].a;
                theQuestion += '">'
                theQuestion += '</div>';
                $('#theQuestions').append(theQuestion);
            }
            else if(questions[i].type == 3){
                if (i % 2 == 1)
                    theQuestion = '<div class="odd">';
                else
                    theQuestion = '<div class="even">';
                theQuestion += questions[i].q;
                theQuestion += "<img src='http://math.seattleacademy.org/aldenmcgonagle/day72/img/";
                theQuestion += questions[i].img;
                theQuestion += "'>";
                theQuestion += '<input data-answer="';
                theQuestion += questions[i].a;
                theQuestion += '">'
                theQuestion += '</div>';
                $('#theQuestions').append(theQuestion);
            }
            else if(questions[i].type == 4){
                if (i % 2 == 1)
                    theQuestion = '<div class="odd">';
                else
                    theQuestion = '<div class="even">';
                theQuestion += "True or False:"
                theQuestion += '\\(';
                theQuestion += questions[i].q;
                theQuestion += '\\)';
                theQuestion += '<input data-answer="';
                theQuestion += questions[i].a;
                theQuestion += '">'
                theQuestion += '</div>';
                $('#theQuestions').append(theQuestion);
            }
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
