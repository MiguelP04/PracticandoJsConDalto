
let date = document.getElementById("time")
let now = new Date(); //Devuelve la fecha

let time24 = now.getHours(); //Devuelve la hora obtenida de la fecha
let amOrPm = time24 < 12 ? "a. m." : "p. m.";  // Condicion para saber si la hora es en la mañana o en la tarde

let time = time24 > 12 ? time24 - 12 : time24; // Cambia la hora de formato militar a formato de 12 horas
date.textContent = `${time}:00 ${amOrPm}`; //Lo muestra en la etiqueta

function increaseHour() { //Funcion para incrementar la hora

  let millisec = now.getTime(); //Obtiene la hora en milisegundos
  
  millisec += 3600000; //Aumenta 1 hora
  
  now.setTime(millisec); //
  time24 = now.getHours();
  amOrPm = time24 < 12 ? "a. m." : "p. m.";

  if(time24 == 0){
    time24 = 12;
  }
  time = time24 > 12 ? time24 - 12 : time24;
  date.textContent = `${time}:00 ${amOrPm}`;

 
}

let time1 = setInterval(increaseHour, 1000);



const mainContainer = document.getElementById("main-container");
const buttonPass = document.getElementById("btn-pass");

buttonPass.addEventListener('click', () => { //Boton para pasar
    if(time >= 2 && time < 6 && amOrPm == "a. m."){
        mainContainer.classList.add("hidden");
        secondaryContainer.classList.remove("hidden");
        clearInterval(time1)
        setInterval(increaseHour, 10000);
        console.log("hola")
        
    } else {
        mainContainer.classList.add("hidden");
        closedContainer.classList.remove("hidden");
    }
});


const closedContainer = document.getElementById("closed-container");
const secondaryContainer = document.getElementById("secondary-container");
const buttonSubmit = document.getElementById("btn-submit");
const firstPersonContainer = document.getElementById("first-person-container");
const welcomeContainer = document.getElementById("welcome-container");
const lateContainer = document.getElementById("late-container")
let firstPerson = true;
buttonSubmit.addEventListener("click", ()=>{ //Boton para enviar el input de edad
    let data = document.getElementById("data").value;
    let dataInt = parseInt(data);
        if(time >= 6 && amOrPm == "a. m."){ // Condiciones para corregir errores
            secondaryContainer.classList.add("hidden");
            lateContainer.classList.remove("hidden");
    
           time1 = setInterval(increaseHour, 1000)

        } else if(dataInt < 18 && dataInt > 0){
            alert("No puedes pasar, eres menor de edad");
        }else if(dataInt > 100 || dataInt <= 0){
            alert("Esa edad es díficil que la tengas");
        } else if(dataInt >= 18 && dataInt <= 100){ // Condicion para mostrar el contenido en caso de que sea mayor de edad
            if(firstPerson){
                firstPerson = false;
                secondaryContainer.classList.add("hidden");
                firstPersonContainer.classList.remove("hidden")
            }else{
                secondaryContainer.classList.add("hidden");
                welcomeContainer.classList.remove("hidden");
            }
        }else{ // Condicion para corregir errores
        alert("Campo vacío")
    }
})

const buttonBack = document.getElementById("btn-back");
console.log(buttonBack)
buttonBack.addEventListener("click", ()=>{
    closedContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden")
})

const buttonBackTwo = document.getElementById("btn-back-two");
buttonBackTwo.addEventListener("click", ()=>{
    firstPersonContainer.classList.add("hidden");
    secondaryContainer.classList.remove("hidden")
})
const buttonBackThree = document.getElementById("btn-back-three");
buttonBackThree.addEventListener("click", ()=>{
    welcomeContainer.classList.add("hidden");
    secondaryContainer.classList.remove("hidden");
})
const buttonBackToMain = document.getElementById("btn-back-to-main");
buttonBackToMain.addEventListener("click", ()=>{
    lateContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden")
    firstPerson = true;
})