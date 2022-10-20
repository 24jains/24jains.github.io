
function toggleMenu() {
  const menu = document.getElementById('expand-contract');
  if (menu.style.marginTop == '0px') {
    menu.style.marginTop = '-100%';
  } else {
    menu.style.marginTop = '0px';
  }
}

function updateSidInfo() {
  document.getElementById("sid-link").href = "https://media.githubusercontent.com/media/24jains/24jains.github.io/main/images/IMG-20220830-WA0010.jpg"
  document.getElementById("sid-image").src = "https://media.githubusercontent.com/media/24jains/24jains.github.io/main/images/IMG-20220830-WA0010.jpg"
  document.getElementById("sid-title").innerHTML = "Possible future employee";
  document.getElementById("sid-info").innerHTML = "Hi! My name is Sid. I am a middle school graduate student currently attending Columbus North High School. I can bench over 45 pounds and I achieved silver honor roll in my 4th year at Saint Bartholomew School. I have a 4.33 GPA on a 12-point scale and plan on early decisioning to Ivy Tech Community College. My girlfriend is 11 years old, currently in fifth grade. Along with all of this, I was able to successfully get my driver's permit after only two attempts.";
}

window.addEventListener('resize', function(event) {
  if (window.innerWidth > 920) {
    document.getElementById('expand-contract').style.marginTop = '0px';
  }
});
