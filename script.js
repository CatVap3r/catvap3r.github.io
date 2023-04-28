function redirectToWebsiteYT() {
  window.location.href = "https://youtube.com/@catvap3r";
}

//navbar//

const tButton = document.getElementById('tButton');
const navbar = document.getElementById('navbar');
const navButtons = document.querySelectorAll('.navbutton');
const dcButton = document.getElementById('dcbutton');
const dcFrame = document.getElementById('dcframe');

//navbar code//

let buttonPressed = false;

tButton.addEventListener('click', () => {
  navbar.classList.toggle('expanded');
  tButton.classList.toggle('expanded');
  navButtons.forEach(button => button.classList.toggle('expanded'));
  dcFrame.classList.toggle('expanded');
  buttonPressed = !buttonPressed;

});
