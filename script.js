
$(document).ready(function() {
  $(".sidebar").stick_in_parent({
    offset_top: 60
  });
});

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

const firebaseConfig = {
  apiKey: "AIzaSyA7rFtVWt4TsC-1ZDyEAvt5tCTMlNUcXzU",
  authDomain: "sidstudioshop.firebaseapp.com",
  databaseURL: "https://sidstudioshop-default-rtdb.firebaseio.com",
  projectId: "sidstudioshop",
  storageBucket: "sidstudioshop.appspot.com",
  messagingSenderId: "313779483792",
  appId: "1:313779483792:web:a80db4c22cc27b55b91415",
  measurementId: "G-RRZE1ER1KF"
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('shop');

document.getElementById('order-info').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var item = document.getElementById('item').innerHTML;
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var size = getRadioValue('size');
  var payment = getRadioValue('payment');

  saveData(item, name, email, phone, size, payment);

  document.getElementById('order-info').reset();
  document.getElementById('order-confirmation').style.display = "block";
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function getRadioValue(name) {
  var element = document.getElementsByName(name);
  for (i = 0; i < element.length; i++) {
    if (element[i].checked) {
      return element[i].id;
    }
  }
}

function saveData(item, name, email, phone, size, payment) {
  var newMessageRef = messagesRef.push();
    newMessageRef.set({
      item: item,
      name: name,
      email: email,
      phone: phone,
      size: size,
      payment: payment
  });
}
