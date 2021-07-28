$(document).ready(function() {
    //https://5d76bf96515d1a0014085cf9.mockapi.io/quiz
    var form  = $(".quiz-div")

    var correctAnswers = [];

    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/quiz',function(data,status){

        var questionsArranged = [];

        for(i=0 ; i < data.length ; i++){
            questionAppend = "<section class='quiz-item'><h3>Q" + data[i].id + ". " + data[i].question +"</h3>"

            questionsArranged.push(questionAppend)

            correctAnswers.push(data[i].answer)

            for(j=0; j < data[i].options.length ; j++){
                questionChoices = "<div class='option-wrapper'><label><input type='radio' required name='q"+ data[i].id +"' value='"+ (j+1) + "'><p>" + data[i].options[j] + "</p></label></div>"
                questionsArranged.push(questionChoices)
            }
            questionsArranged.push("</section>")
        }

        form.append(questionsArranged.join(""))


    })

    $('.quiz').submit(function(event){
        event.preventDefault()

        var answerAnswerd = [];

        var selectedOption1 = $("input:radio[name=q1]:checked").val()
        var selectedOption2 = $("input:radio[name=q2]:checked").val()
        var selectedOption3 = $("input:radio[name=q3]:checked").val()
        var selectedOption4 = $("input:radio[name=q4]:checked").val()
        var selectedOption5 = $("input:radio[name=q5]:checked").val()
        
        answerAnswerd.push(parseInt(selectedOption1),parseInt(selectedOption2),parseInt(selectedOption3),parseInt(selectedOption4),parseInt(selectedOption5))

        var counter = 0;
    
        for(i = 0 ; i < answerAnswerd.length ; i++){
            if(answerAnswerd[1] == correctAnswers[i]){
                counter++
            }
        }

        $("#score-count").append(counter)

    })
});