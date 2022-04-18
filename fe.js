
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

setchangeBackground = () => {
    let colorsIndex = local.getItem('colors');
    colorsIndex = JSON.parse(colors[colorsIndex]);
}
/////

