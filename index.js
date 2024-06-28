// task1
let string = "random";
console.log(string);

// task2
const number = 22;
console.log(number);

//task3
let n1 = 17;
let n2 = 28;
console.log(n1 > n2);

//task4(1)
let oddEven = 111;
if (oddEven % 2 == 0) {
    console.log("ლუწი");
} else {
    console.log("კენტი");
}

//task4(2)
let day = 6;
switch (day) {
    case 1:
        day = "ორშაბათი";
        break;
    case 2:
        day = "სამშაბათი";
        break;
    case 3:
        day = "ოთხშაბათი";
        break;
    case 4:
        day = "ხუთშაბათი";
        break;
    case 5:
        day = "პარასკევი";
        break;
    case 6:
        day = "შაბათი";
        break;
    case 7:
        day = "კვირა";
}
console.log(day);

//task5
let age = 4;
age >= 18 
? console.log("შეგიძლიათ ხმის მიცემა")
: console.log("არ შეგიძლიათ ხმის მიცემა");