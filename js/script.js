console.log('JS OK');

// Creo un ciclo da 1 a 100

for (let i = 1; i <= 100; i++) {
    

    let finalResult = i;
   
    // Numero divisibile per 3
    if (i % 3 === 0 && i % 5 > 0){
        finalResult = 'Fizz';    
    }

    // Numero divisivile per 5
    if (i % 5 === 0 && i % 3 > 0){
        finalResult = 'Buzz';    
    }

    // Numero divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0){
        finalResult = 'FizzBuzz';    
    }



    console.log(finalResult);
}


