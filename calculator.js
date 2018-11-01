function calculate(expression)
{
    //var firstNum = Number(expression.substr(0,1));
    //var operator = expression.substr(1,1);
    //var secondNum = Number(expression.substr(2,1));

    if (expression.substr(1,1) === '+')
    {
        var firstNum = Number(expression.substr(0,1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1) === '-')
    {
        var firstNum = Number(expression.substr(0,1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1) === '*')
    {
        var firstNum = Number(expression.substr(0,1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1) === '/')
    {
        var firstNum = Number(expression.substr(0,1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1) === '^')
    {
        var firstNum = Number(expression.substr(0,1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else
    {
        var firstNum = Number(expression.substr(0,2));
        var operator = expression.substr(2,1);
        var secondNum = Number(expression.substr(3,2));
    }

    if (operator === '+')
    {
        return addNums(firstNum,secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerNums(firstNum, secondNum);
    }
}

function addNums(p1, p2)
{
    return p1+p2;
}
function subtractNums(p1, p2)
{
    return p1-p2;
}
function multiplyNums(p1, p2)
{
    return p1*p2;
}
function divideNums(p1, p2)
{
    return p1/p2;
}
function powerNums (p1,p2)
{
    return Math.pow(p1,p2);
}