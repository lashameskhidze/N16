//1
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4)); 


//2
function checkAge(age) {
    if (age >= 18) {
        return "შენ ხარ სრულწლოვანი";
    } else {
        return "შენ ხარ არასრულწლოვანი";
    }
}

console.log(checkAge(20)); 


//3
function isEvenOrOdd(num) {
    if (num % 2 === 3) {
        return "რიცხვი ლუწია";
    } else {
        return "რიცხვი კენტია";
    }
}

console.log(isEvenOrOdd(11)); 

//4
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "ორშაბათი";
        case 2:
            return "სამშაბათი";
        case 3:
            return "ოთხშაბათი";
        case 4:
            return "ხუთშაბათი";
        case 5:
            return "პარასკევი";
        case 6:
            return "შაბათი";
        case 7:
            return "კვირა";
    }
}
console.log(getDayName(5)); 

//5
function compareNumbers(a, b) {
    if (a > b) {
        return "პირველი რიცხვი უფრო დიდია";
    } else if (a < b) {
        return "მეორე რიცხვი უფრო დიდია";
    } else { 
        return "ორივე  ტოლია";
    }
}

console.log(compareNumbers(3, 5)); 
//6
function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        
    }
}

console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-')); 
console.log(calculator(10, 5, '*')); 


// 7 
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(0));   
console.log(celsiusToFahrenheit(18));  
console.log(celsiusToFahrenheit(-10)); 

//8
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMax(3, 7, 5));  
console.log(findMax(10, 5, 8)); 
console.log(findMax(4, 4, 4));  


//9
function checkSign(num) {
    if (num > 0) {
        return "რიცხვი დადებითია";
    } else if (num < 0) {
        return "რიცხვი უარყოფითია";
    }
}

console.log(checkSign(5));  
console.log(checkSign(-3));  

//10
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "იანვარი";
        case 2:
            return "თებერვალი";
        case 3:
            return "მარტი";
        case 4:
            return "აპრილი";
        case 5:
            return "მაისი";
        case 6:
            return "ივნისი";
        case 7:
            return "ივლისი";
        case 8:
            return "აგვისტო";
        case 9:
            return "სექტემბერი";
        case 10:
            return "ოქტომბერი";
        case 11:
            return "ნოემბერი";
        case 12:
            return "დეკემბერი";
      
    }
}


console.log(getMonthName(10));  


//11
function multiplyIfGreaterThanFive(num) {
    if (num >= 5) {
        return num * 7;
    } else {
        return "რიცხვი მცირეა";
    }
}


console.log(multiplyIfGreaterThanFive(7));  
console.log(multiplyIfGreaterThanFive(3));  
console.log(multiplyIfGreaterThanFive(5));  


//12
function getSeason(seasonNumber) {
    switch (seasonNumber) {
        case 1:
            return "გაზაფხული";
        case 2:
            return "ზაფხული";
        case 3:
            return "შემოდგომა";
        case 4:
            return "ზამთარი";
        
    }
}
console.log(getSeason(1));  
console.log(getSeason(2));  
console.log(getSeason(3));  
console.log(getSeason(4));  



//13
function checkPrice(price) {
    if (price > 100) {
        return "ფასი მაღალია";
    } else {
        return "ფასი ნორმალურია";
    }
}
console.log(checkPrice(150));     
console.log(checkPrice(100));  


// 14 
function switchCalculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '':
            return a  *     b;
        case '/':
            return a / b
        default:
            return "არასწორი ოპერატორი";
    }
}


console.log(switchCalculator(27, 9, '+'));
console.log(switchCalculator(43, 1, '-'));
console.log(switchCalculator(4, 25, '*'));
console.log(switchCalculator(64, 8, '/'));





//15

function positiveSum(a, b) {
    if (a > 0 && b > 0) {
        return a + b; 
    } else {
        return "მინიმუმ ერთი რიცხვის უარყოფითი მნიშვნელობაა"; 
    }
}
console.log(positiveSum(5, 10)); 
console.log(positiveSum(-5, 10));        


















