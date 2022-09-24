
function toggleMenu() {
  const menu = document.getElementById('expand-contract');
  if (menu.style.marginTop == '0px') {
    menu.style.marginTop = '-100%';
  } else {
    menu.style.marginTop = '0px';
  }
}

window.addEventListener('resize', function(event) {
  document.getElementById('expand-contract').style.marginTop = '0px';
});
