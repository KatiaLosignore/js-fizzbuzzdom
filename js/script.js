console.log('JS OK');

// Prendo gli elementi dal DOM

const numberElement = document.getElementById('number');





// Creo un ciclo da 1 a 100

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    div.className = "col";


    let finalResult = i;

    // Numero divisibile per 3
    if (i % 3 === 0 && i % 5 > 0) {
        finalResult = 'Fizz';
        div.className += " bg-success";
    }

    // Numero divisivile per 5
    if (i % 5 === 0 && i % 3 > 0) {
        finalResult = 'Buzz';
        div.className += " bg-warning";

    }

    // Numero divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        finalResult = 'FizzBuzz';
        div.className += " bg-danger";
    }

    if (!isNaN(finalResult)) {
        div.className += " bg-secondary";
    }

    div.append(finalResult);
    numberElement.append(div);


}


console.log(numberElement);



