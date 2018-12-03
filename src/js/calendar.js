import NavBar from './newNavbar.js';
import Api from './api.js';

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
    console.log('day');
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
        div.appendChild(button);
        //console.log(routine.name);
        //console.log(routine.name);
      }
    }
    calendarContainer.appendChild(div);
    ++counter;
  });
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

function iniciar() {
  NavBar.addOptions();
  NavBar.listenNavBar();
  getCalendar();
}

window.addEventListener('load',
  () => {
    iniciar();
  }, false);
