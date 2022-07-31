var menu = document.querySelector('.main-menu');
var button = document.querySelector('.menu-action__button-toggle');
var form_button = document.querySelector('.user-opinion__button');
var error_button = document.querySelector('.fail-popup__button');
var success_button = document.querySelector('.success-popup__button');

var user_name = document.querySelector('[name=user-name]')
var user_surname = document.querySelector('[name=user-surname]')
var user_phone = document.querySelector('[name=user-mobile]')
var user_email = document.querySelector('[name=user-email]')

var error_modal = document.querySelector('.fail-popup');
var success_modal = document.querySelector('.success-popup');

function close_menu() {
  menu.classList.add('hide');
  button.classList.remove('menu-action__button-toggle--toggle-modif');
}

function open_menu() {
  menu.classList.toggle('hide');
  button.classList.toggle('menu-action__button-toggle--toggle-modif');
}

function close_error() {
  event.preventDefault()
  error_modal.style.display = 'none';
}

function show_error () {
  event.preventDefault()
  error_modal.style.display = 'block';
}

function close_success() {
  success_modal.style.display = 'none';
}

function show_success () {
  event.preventDefault()
  success_modal.style.display = 'block';
}

function check_form_values() {
  var error_color = 'thin solid red';
  if (!user_name.value) {
    event.preventDefault()
    user_name.style.border = error_color;
    show_error ();
  }

  if (!user_surname.value) {
    event.preventDefault()
    user_surname.style.border = error_color;
    show_error ();
  }

  if (!user_phone.value) {
    event.preventDefault()
    user_phone.style.border = error_color;
    show_error ();
  }

  if (!user_email.value) {
    event.preventDefault()
    user_email.style.border = error_color;
    show_error ();
  }

  if (user_name.value && user_surname.value && user_phone.value && user_email.value) {
    show_success();
  }
}

window.onload = close_menu();
button.addEventListener('click',open_menu);

form_button.addEventListener('click',check_form_values);

error_button.addEventListener('click',close_error);

success_button.addEventListener('click',close_success);
