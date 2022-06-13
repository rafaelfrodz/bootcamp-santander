const elementos = document.querySelectorAll('h1, button, footer, body')
const button = document.querySelector("#mode-selector")
button.addEventListener('click', changeMode)

function changeMode() {
  darkTheme()
  changeText()
}

function darkTheme() {
  for (let index = 0; index < elementos.length; index++) {
    elementos[index].classList.toggle('dark-mode') 
  }
}

function changeText() {
  let h1 = elementos[1]
  let button = elementos[2]

  if (elementos[3].classList.contains("dark-mode")) {
	  const darkMode = 'Dark Mode'; 
    h1.innerHTML = darkMode + ' ON'
    button.innerHTML = darkMode + ' ON'
  } else { 
    const lightMode = 'Light Mode';
    h1.innerHTML = lightMode + ' ON'
    button.innerHTML = lightMode + ' ON'
  }
}


