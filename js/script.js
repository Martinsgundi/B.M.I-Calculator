const checkRate = ()=> {
    
    // Gets the value inputed by the user 
    const height = Number(document.getElementById ('height').value);
    const weight = Number(document.getElementById ('weight').value);
    const displayResult = document.getElementById ('show-result');

    // Formula for the BMI calculation
    const calcBmi = (weight / height**2);
   

    // These statements shows the BMI result and checks the value of the results, to categorize them accordingly.
    if (calcBmi < 18.5) {
        displayResult.innerHTML = `
        Your BMI rate is <b>${calcBmi.toFixed(1)} kg/m<sup>2</sup></b>. </br> 
        (This falls within the <span>underweight range</span>) 
        `
    };

    if (calcBmi >= 18.5 && calcBmi <=24.9 ) {
        displayResult.innerHTML = `
        Your BMI rate is <b>${calcBmi.toFixed(1)} kg/m<sup>2</sup></b> </br> 
        (This falls within the <span>healthy weight range</span>) 
        `
    };

    if (calcBmi >= 25 && calcBmi <=29.9) {
        displayResult.innerHTML = `
        Your BMI rate is <b>${calcBmi.toFixed(1)} kg/m<sup>2</sup></b> </br> 
        (This falls within the <span>overweight range</span>) 
        `
    };

    if (calcBmi >= 30 && calcBmi <=34.9) {
        displayResult.innerHTML = `
        Your BMI rate is <b>${calcBmi.toFixed(1)} kg/m<sup>2</sup></b> </br> 
        (This falls within the <span>class I obeysity range</span>) 
        `
    };

    if (calcBmi >= 35 && calcBmi <=39.9) {
        displayResult.innerHTML = `
        Your BMI rate is <b>${calcBmi.toFixed(1)} kg/m<sup>2</sup></b> </br> 
        (This falls within the <span>class II obeysity range</span>) 
        `
    };

    if (calcBmi > 40) {
        displayResult.innerHTML = `
        Your BMI rate is <b>${calcBmi.toFixed(1)} kg/m<sup>2</sup></b> </br> 
        (This falls within the <span>class III obeysity range</span>) 
        `
    };
};






