(function() {
  emailjs.init("1FuhFcj61T2tYQvC2"); // Replace with your EmailJS Public Key
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Replace with your EmailJS Service ID and Template ID
  const serviceID = 'service_ho47q8q';
  const templateID = 'template_dqntvq4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (err) => {
      alert('Failed to send message! Please try again.\n' + JSON.stringify(err));
    });
});
