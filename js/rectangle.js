function rectangleAreaCalculate(){
    //get rectangle width
    const rectangleInput = document.getElementById('rectangleW')
    const rectangelWtext = rectangleInput.value;
    const width = parseFloat(rectangelWtext)
    // console.log(width)

    // get rectangel Length
    const rectangleLInput = document.getElementById('rectangleL');
    const rectangleText = rectangleLInput.value;
    const lenght =parseFloat (rectangleText)
    // console.log(lenght);

    //get Area 
    const Area = width * lenght;

    //display rectangle area
    const disrectangle = document.getElementById('rectangle-area')
    disrectangle.innerText = Area;
}