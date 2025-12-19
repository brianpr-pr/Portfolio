const btn = document.getElementById('button');
const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_dkax50a';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      cleanForm(form);    
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

function cleanForm(form){
  [...form.querySelectorAll('input')].forEach(input => {
    input.value = '';
  });
  
  form.querySelector('textarea').value = '';
}