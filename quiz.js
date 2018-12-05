function checkAnswers()
{
    //make an array to store feedback on every question
    var feedback = [];
    //keep score
    var score = 0;

    //check answer 1
    //first collect the answer using an input box
    var q1answer = document.quiz.a1.value.toLowerCase();
    if (q1answer === 'harry potter')
    {
        //increase score by 1
        score = score + 1;
        //push feedback to the array
        feedback.push("Question 1 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 1 was HARRY POTTER.");

    }

    //question 2
    if(document.quiz.a2.value === 'Arkansas')
    {
        //increase the score
        score++;
        feedback.push("Question 2 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 2 was ARKANSAS.");
    }

    //question 3
    if (document.quiz.a3A.checked === true && document.quiz.a3B.checked === true && document.quiz.a3D.checked === true)
    {
        if (document.quiz.a3C.checked === true || document.quiz.a3E.checked === true)
        {
            feedback.push("WRONG! Question 3 was THE FLASH/SUPERGIRL/RIVERDALE")
        }
        else
        {
            score++;
            feedback.push("Question 3 is correct!");
        }
    }
    else
    {
        feedback.push("WRONG! Question 3 was THE FLASH/SUPERGIRL/RIVERDALE")
    }

    //question 4
    if(document.quiz.a4.value === 'Alaska')
    {
        //increase the score
        score++;
        feedback.push("Question 4 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 4 was ALASKA.");
    }

    //question 5
    if(document.quiz.a5.value === 'Soccer')
    {
        //increase the score
        score++;
        feedback.push("Question 5 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 5 was SOCCER.");
    }
    //question 6
    if (document.quiz.a6A.checked === true && document.quiz.a6D.checked === true && document.quiz.a6E.checked === true)
    {
        if (document.quiz.a6B.checked === true || document.quiz.a6C.checked === true)
        {
            feedback.push("WRONG! Question 6 was HARRY POTTER/BEAUTY AND THE BEAST/FANTASTIC BEASTS")
        }
        else
        {
            score++;
            feedback.push("Question 6 is correct!");
        }
    }
    else
    {
        feedback.push("WRONG! Question 6 was HARRY POTTER/BEAUTY AND THE BEAST/FANTASTIC BEASTS")
    }
    //question 7
    var q7answer = document.quiz.a7.value.toLowerCase();
    if (q7answer === 'april')
    {
        //increase score by 1
        score = score + 1;
        //push feedback to the array
        feedback.push("Question 7 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 7 was APRIL.");

    }
    //question 8
    if(document.quiz.a8.value === '26')
    {
        //increase the score
        score++;
        feedback.push("Question 8 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 8 was 26.");
    }
    //question 9
    var q9answer = document.quiz.a9.value.toLowerCase();
    if (q9answer === 'addams')
    {
        //increase score by 1
        score = score + 1;
        //push feedback to the array
        feedback.push("Question 9 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 9 was ADDAMS.");

    }
    //question 10
    if (document.quiz.a10A.checked === true && document.quiz.a10E.checked === true)
    {
        if (document.quiz.a10B.checked === true || document.quiz.a10C.checked === true || document.quiz.a10D.checked === true)
        {
            feedback.push("WRONG! Question 10 was HOOVER/HANOVER HIGHLANDS")
        }
        else
        {
            score++;
            feedback.push("Question 10 is correct!");
        }
    }
    else
    {
        feedback.push("WRONG! Question 10 was HOOVER/HANOVER HIGHLANDS")
    }
    return feedback[0]+ '<br>' + feedback[1] + '<br>' + feedback[2]+ '<br>' + feedback[3] + '<br>' + feedback[4]+ '<br>' + feedback[5] + '<br>'
        + feedback[6]+ '<br>' + feedback[7] + '<br>' + feedback[8]+ '<br>' + feedback[9] + '<br>' + "Your score is: " + score;
}
