 {/*
 let themeCollor = localStorage.getItem('collor');
if (themeCollor === null) {
   localStorage.setItem('collor', 'blue');
   themeCollor = 'blue';
}
document.documentElement.className = themeCollor;
const btnBlue = document.getElementById('blue');
const btnGreen = document.getElementById('green');

btnBlue.addEventListener('click', () => {
    document.documentElement.className = 'blue';
    localStorage.setItem('collor', 'blue')
});
btnGreen.addEventListener('click', () => {
    document.documentElement.className = 'green';
    localStorage.setItem('collor', 'green')
    });
*/}
/*
let themeCollor = localStorage.getItem('collor');
const button = document.getElementById("btn");
const body = document.body;


const colors = ['green', 'salmon', 'blue', 'purple', 'red'];
body.style.backgroundColor = colors[0];

button.addEventListener('click', changeBackground); 
localStorage.setItem('collor', 'green')
function changeBackground(){
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
}

*/

const date = new Date();//sukuriam siandienine data
//console.log(date);

const visasKalendorius = () => {
    //const month = date.getMonth();// menesi isgaunam, tik skaiciuoja cia nuo 0menesius o ne nuo 1
    //console.log(month);
    date.setDate(7); //cia keiciam seno menesio pasibaigimo dienas////
    //console.log(date.getDate());
    //date.setMonth(2);//sio menesio pasirinkimas

    const monthDays = document.querySelector('.days');//1.is html pasirenkam kur norim ideti

    const paskutineDiena = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();//sio menesio data
    console.log(paskutineDiena);
    const praejusiData = new Date(date.getFullYear(), date.getMonth(),0).getDate(); //praejusio menesio data gaunam
    const pirmosDienosIndeksas = date.getDay();
    const ateinantiData = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const kitaDiena = 7 - ateinantiData ;// cia keiciam ateinancio men dienas///// galim rasyt tarkim -1, -2
    const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December',];
    document.querySelector('.manths h1').innerHTML = months[date.getMonth()]; //gausim einama menesi. jei butu months[1]- gautumem vasari

    //document.querySelector('')innerHTML = date.toDateString- su juo pilna siandienine data butu galima irasyti

    let days = ''; //1.cia sukuriam tas dienas ir sudedam

    for(let k = pirmosDienosIndeksas; k > 0; k--){ //cia idejom praejusio menesio dienas
        days += `<div class='praejusi-data'>${praejusiData - k + 1}</div>`
    }

    for (let i = 1; i <= paskutineDiena; i++){//sio menesio dienos
        if (i === new Date().getDate() &&date.getMonth() === new Date().getMonth()){ // + padarom kad pazymetu siandienine data
            days += `<div class="siandiena">${i}</div>`;
        } else {
            days += `<div> ${i}</div>`;
        }
    
    //monthDays.innerHTML = days;
    }

    for (let l = 1; l <= kitaDiena; l++){//busimo menesio dienos
        days += `<div class='ateinanti-data'> ${l}</div>`;
        monthDays.innerHTML = days;
    }
}


document.querySelector(".prev").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    visasKalendorius();
    
});

document.querySelector(".next").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    visasKalendorius();
});



visasKalendorius();







