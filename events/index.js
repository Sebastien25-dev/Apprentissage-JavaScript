const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    img.classList.toggle('show')
})

// séparation

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (event) => {
  horizontal.innerHTML = event.x;
  vertical.innerHTML = event.y;
  mouseEvent.style.left = event.x / window.innerWidth * 100 + "%";
  if (event.x > 500){
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
})

// séparation

document.getElementById('input').addEventListener('input', (event) => {
  vertical.innerHTML = event.target.value;
})
// Séparation

const theme = document.querySelectorAll('.theme');
const dark = document.querySelector('.dark');
const salmon = document.querySelector('.salmon');
const yellow = document.querySelector('.yellow');

theme.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(event.target.id);
    document.body.classList.remove("darktheme", "salmontheme", "yellowtheme");
    switch (event.target.id) {
      case "dark":
        document.body.classList.add("darktheme");
        break;
        
      case "salmon":
        document.body.classList.add("salmontheme");
        break;
        
      case "yellow":
        document.body.classList.add("yellowtheme");
        break;
        default:
          null;
        

    }
  })
})