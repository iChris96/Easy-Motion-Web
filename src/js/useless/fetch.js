fetch('https://easy-motion.herokuapp.com/calendars')
.then(response => response.json())
.then(data => {
  //console.log(data.data)
  let jamon = data.data;
  console.log(jamon);
})
