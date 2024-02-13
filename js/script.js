// Reuse function of get value 
function getInputId(inputFieldID){
    const inputField = document.getElementById(inputFieldID)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// total area calculation 
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Triangle Area
function calculateTriangleArea(){
    const base = getInputId('triangle-base');
    const height = getInputId('triangle-height');

    const area = 0.5 * base * height;
    setInnerTextById('triangle-area', area)
}

//Rectangle Area 
function rectangleAreaCalculate(){
    const width = getInputId('rectangleW');
    const lenght = getInputId('rectangleL');

    const area = width * lenght;
    setInnerTextById('rectangle-area', area);
}

//Parallelogram Area
function parallelogramAreaCalculate(){
    const base = getInputId('parallelogram-base');
    const height = getInputId('parallelogram-height');

    const area = base * height;
    setInnerTextById('parallelogram-area', area);
}

//Rhombus Area
function rhombusAreaCalculate(){
    const d1 = getInputId('rhombusD1');
    const d2 = getInputId('rhombusD2');

    const area = 0.5 * d1 * d2;
    setInnerTextById('rhombus-area', area);
}

//Pentagon Area
function pentagonAreaCalculate(){
    const P = getInputId('pentagonP');
    const B = getInputId('pentagonB');

    const area = 0.5 * P * B;
    setInnerTextById('pentagon-area', area);
}

//Ellipse Area
function ellipseAreaCalculate(){
    const a = getInputId('ellipseA');
    const b = getInputId('ellipseB');

    const area = 3.1416 * a * b;
    setInnerTextById('ellipse-area', area);
}
