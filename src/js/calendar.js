import NavBar from './newNavbar.js';
import Api from './api.js';
import Cookie from './cookie.js';

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function paintCalendar(calendar) {
  // console.log(calendar);
  const days = calendar.routinesPerDay;
  const calendarContainer = document.getElementsByClassName('flex-calendar')[0];
  let counter = 0;

  days.forEach((day) => {
    let div = document.createElement('div');
    div.classList.add('calendar');
    let h6 = document.createElement('h6');
    h6.textContent = `Día ${counter}`;
    div.appendChild(h6);
    if (day != null) {
      for (let routine of day) {
        let button = document.createElement('button');
        button.type = 'button';
        button.classList.add('routine');
        button.textContent = routine.name;
        button.dataset.idRoutine = routine.id;
        //console.log(button);
        div.appendChild(button);
        //console.log(routine);
        //console.log(routine.name);
        //console.log(routine.name);
      }
    }
    calendarContainer.appendChild(div);
    ++counter;
  });

  listenRoutines();
}

async function listenRoutines() {
  let buttons = document.getElementsByClassName('routine');
  //console.log(buttons);
  for (var i = 0; i < buttons.length; i++) {
  //  console.log(buttons[i]); //second console output
    const id = buttons[i].dataset.idRoutine;
    buttons[i].addEventListener('click', () => {
      modal(id);
    })
  }
}


async function modal(id) {
  let modalRoutine = document.getElementsByClassName("modal")[0];
  let routine = await Api.getRoutine(id);
  console.log(routine.data);
  let rName = document.getElementById('rName');
  rName.textContent = routine.data.name;
  let rDescription = document.getElementById('rDescription');
  rDescription.textContent = routine.data.description;
  let exercisesList = document.getElementById('exercisesList');

  routine.data.exercises.forEach((element) => {
    //let exercise = document.createElement('div');
    //exercise.classList.add('exercise');
    let items = document.createElement('ul');
    items.classList.add('exercise');

    let nameExercise = document.createElement('li');
    nameExercise.textContent = 'Nombre Ejercicio: ' + element.name;
    let bodyPartExercise = document.createElement('li');
    bodyPartExercise.textContent = 'Parte del cuerpo: ' + element.bodyPart;
    let trainingTypeExercise = document.createElement('li');
    trainingTypeExercise.textContent = 'Tipo de entrenamiento: ' + element.trainingType;
    let repetitionsExercise = document.createElement('li');
    repetitionsExercise.textContent = 'Número de repeticiones: ' + element.repetitions;
    let descriptionExercise = document.createElement('li');
    descriptionExercise.textContent = 'Descripción: ' + element.description;

    items.appendChild(nameExercise);
    items.appendChild(bodyPartExercise);
    items.appendChild(trainingTypeExercise);
    items.appendChild(repetitionsExercise);
    items.appendChild(descriptionExercise);

    exercisesList.appendChild(items);

    //console.log(element.name);
  });






  modalRoutine.classList.toggle("show-modal");
}


async function getCalendar() {
  const idCalendar = getParameterByName('id');
  const calendar = await Api.getCalendar(idCalendar);
  if(calendar.status === 200) {
    paintCalendar(calendar.data);
    const title = document.getElementsByClassName('title')[0];
    title.textContent = calendar.data.name;
  }
}

async function paintAssignButton(calendarId, userId){
  const assignButton = document.getElementsByClassName('assignButton')[0];
  assignButton.classList.add('show');
  assignButton.addEventListener('click', () => {
    // console.log(calendarId, userId);
    suscribe(calendarId, userId);
  });
}


async function suscribe(calendarId, userId){
  let isSuscribe = await Api.assignCalendar(calendarId, userId);
  //console.log(isSuscribe);
  if(isSuscribe.status == 201){
    const assignButton = document.getElementsByClassName('assignButton')[0];
    assignButton.classList.remove('show');
  //  console.log(assignButton);
    paintUnassgnButton(calendarId, userId);
  }
}

async function unSuscribe(calendarId, userId){
  let unSuscribe = await Api.unassignCalendar(calendarId, userId);
  // console.log(unSuscribe);
  if(unSuscribe.status == 200){
    const unassignButton = document.getElementsByClassName('unassignButton')[0];
    unassignButton.classList.remove('show');
    paintAssignButton(calendarId, userId);
  }
}


function paintUnassgnButton(calendarId, userId){
  const unassignButton = document.getElementsByClassName('unassignButton')[0];
  unassignButton.classList.add('show');
  unassignButton.addEventListener('click', () => {
    // console.log(calendarId, userId);
    unSuscribe(calendarId, userId);
  });
}

async function detectButton(){
  const calendarId = getParameterByName('id');
  const userId = Cookie.getCookie('userId');
  if(userId != null){
    let userData = await Api.isSuscribe(userId, userId);
    let userHaveCalendar;
    // console.log(userData);
    userData.data.some(elem => elem.id == calendarId) == true ? paintUnassgnButton(calendarId, userId) : paintAssignButton(calendarId, userId);
  }
}


function iniciar() {
  NavBar.addOptions();
  NavBar.listenNavBar();
  getCalendar();
  detectButton();
  const closeButton = document.getElementsByClassName('close-button')[0];
  const modalRoutine = document.getElementsByClassName("modal")[0];
  closeButton.addEventListener('click', ()=>{
    modalRoutine.classList.toggle("show-modal");
  });
}


window.addEventListener('load',
  () => {
    iniciar();
  }, false);
