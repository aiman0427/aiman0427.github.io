function assignGrade()
{
    var num1 = Number(document.project3.num1.value);
    if (num1 >= 90)
    {
        return "A";
    }
    else if (num1 >= 80)
    {
        return "B";
    }
    else if (num1 >= 70)
    {
        return "C";
    }
    else if(num1 >= 60)
    {
        return "D";
    }
    else if (num1 >= 0)
    {
        return "F";
    }
}

function temperatureBug()
{
    var num1 = Number(document.project4.temp1.value);
    var image = document.getElementById("weather");
    if(num1 >= 136)
    {
        image.src = "img/sun.jpeg";
        return "Come back to Earth!";
    }
    else if (num1 >= 80)
    {
        image.src = "img/summer.jpg"
        return "Summer";
    }
    else if (num1 >= 60)
    {
        image.src = "img/spring.jpg";
        return "Spring";
    }
    else if (num1 >= 40)
    {
        image.src = "img/autumn.jpg";
        return "Fall";
    }
    else if(num1 >= 0)
    {
        image.src = "img/winter.png";
        return "Winter";
    }
}

function calorieCounter()
{
    var exercise = document.getElementById('activities').value;
    var time = document.getElementById('time').value;
    if (exercise === 'soccer')
    {
        if (time == '30 minutes')
        {
            return "215 calories burned"
        }
        else if (time == '60 minutes')
        {
            return "430 calories burned"
        }
    }
    else if (exercise === 'walking')
    {
        if (time == '30 minutes')
        {
            return "90 calories burned"
        }
        else if (time == '60 minutes')
        {
            return "180 calories burned"
        }
    }
    else if (exercise === 'running')
    {
        if (time == '30 minutes')
        {
            return "230 calories burned"
        }
        else if (time == '60 minutes')
        {
            return "460 calories burned"
        }
    }
}