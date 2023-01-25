

let weight = +prompt('Enter Weight (kg)');
let height = +prompt('Enter Height (m)');

let index = weight / (height ** 2);
let descriptionOfMassIndex;

if(index >= 16 && index <= 18.5) {
    descriptionOfMassIndex = "Недостаточная (дефицит) масса тела";
} else if(index >= 18.5 && index <= 25) {
    descriptionOfMassIndex = "Норма";
} else if(index > 25 && index <= 30) {
    descriptionOfMassIndex = "Избыточная масса тела (предожирение)";
} else if(index > 30 && index <= 35) {
    descriptionOfMassIndex = "Ожирение 1 степени";
} else if(index > 35 && index <= 40) {
    descriptionOfMassIndex = "Ожирение 2 степени";
} else if(index > 40) {
    descriptionOfMassIndex = "Ожирение 3 степени";
} else {
    descriptionOfMassIndex = "Некорретный индекс массы тела";
}

alert(`Index ${index.toFixed(2)}: ${descriptionOfMassIndex}`);

console.log(`Index ${index.toFixed(2)} : ${descriptionOfMassIndex}`);

///////////////////////////////////////
/////////////////////////////////


let dateOfReform = 1582;

let typedYear = +prompt('Введите год');

let counting;
let leapYear;


if(typedYear > dateOfReform) {
  counting = typedYear % 4;
  
  leapYear = counting ? 'Не высокосный год' : 'Высокосный год';
  console.log(leapYear);
} else {
    console.log('До 1582 года высокных лет не существовало');
}