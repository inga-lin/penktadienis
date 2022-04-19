
let local = localStorage;
const button = document.getElementById("btn");
const body = document.body;


const colors = ['#DCDCDC', '#ADD8E6', '#FFF0F5', '#E0FFFF', '#E6E6FA'];
body.style.backgroundColor = colors[3]; //nurodom pagrindine spalva



button.addEventListener('click', changeBackground); 

function changeBackground(){
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex];
    console.log(colors[colorsIndex]);
    local.setItem('colors', JSON.stringify(colors[colorsIndex]))
}

changeBackground = () => {
    let colorsIndex = local.getItem('colors');
    colorsIndex = JSON.parse(colors[colorsIndex]);
}
/////
if (JSON.parse(local.getItem('colors'))){
    const color = local.getItem('colors')
    console.log(JSON.parse(color))
    body.style.backgroundColor = JSON.parse(color)
    console.log(local.getItem('colors'));
    //button.addEventListener('click', changeBackground); 
}

