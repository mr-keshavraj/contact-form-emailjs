# contact-form-emailjs
This project uses EmailJS to enable client-side email functionality. It allows users to submit a contact form, which then sends the data directly to an email inbox using EmailJS’s API, eliminating the need for a separate backend server.
Here’s a clean and professional **README.md** file for your project using **EmailJS** — especially if it's a contact form in a portfolio or standalone project.

---

````markdown
# 📧 EmailJS Contact Form

This project demonstrates how to send emails directly from a frontend application using **EmailJS**, without needing a backend server.

## 🚀 Features

- Send emails directly from the browser
- No server-side code required
- Easy integration with contact forms
- Secure API key handling (via EmailJS public key)

## 🛠️ Tech Stack

- HTML / CSS / JavaScript
- EmailJS (Client-side email service)

## 🔗 Live Demo

[View Live Site](#) <!-- Replace with your live link -->

## 📸 Screenshot

<!-- Add a screenshot -->
![Screenshot](screenshot.png)

## 🔧 How to Use

1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Set up an email service and template.
3. Add the EmailJS SDK to your project:

```html
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  })();
</script>
````

4. Use JavaScript to trigger the email on form submission:

```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formElement)
  .then(() => {
    alert("Email sent successfully!");
  }, (error) => {
    console.error("Failed to send email:", error);
  });
```

## 📁 Folder Structure

```
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🙌 Acknowledgements

* [EmailJS Documentation](https://www.emailjs.com/docs/)

## 📝 License

This project is open source and free to use

