var form = document.querySelector(".contact-form");
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var formData = new FormData(form);
  window.location = `mailto:photobooth.snapandshare.help@gmail.com?subject=${formData.get('subject')}&body=${formData.get('body')}`;
})
