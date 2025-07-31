import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasError = {
      name: name.trim() === '',
      email: email.trim() === '',
      message: message.trim() === ''
    };

    setNameError(hasError.name);
    setEmailError(hasError.email);
    setMessageError(hasError.message);

    if (!hasError.name && !hasError.email && !hasError.message && form.current) {
      emailjs.sendForm(
        'service_6pnobxq',
        'template_pu9kcfh',
        form.current,
        '4gY6mqOcdnC6AMo_j'
      ).then(
        () => {
          alert('Message sent successfully!');
          form.current?.reset();
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
    }
  };

  return (
    <section id="contact">
      <div className="contact_wrapper">
        <h1>Contact Me</h1>
        <p>Got a project waiting to be realized? Let’s collaborate and make it happen!</p>

        <div className="contact-links">
          <a
            href="https://wa.me/254769563214"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <WhatsAppIcon /> <span>WhatsApp Me</span>
          </a>
          <a
            href="mailto:collinskimani254@gmail.com"
            className="email-link"
          >
            <EmailIcon /> <span>collinskimani254@gmail.com</span>
          </a>
        </div>

        <Box
          ref={form}
          component="form"
          noValidate
          autoComplete="off"
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-flex">
            <TextField
              required
              fullWidth
              name="user_name"
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? 'Please enter your name' : ''}
            />
            <TextField
              required
              fullWidth
              name="user_email"
              label="Email or Phone"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Please enter your email or phone number' : ''}
            />
          </div>
          <TextField
            required
            name="message"
            label="Message"
            placeholder="Send me any inquiries or questions"
            multiline
            rows={6}
            className="body-form"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? 'Please enter the message' : ''}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            className="send-btn"
          >
            Send
          </Button>
        </Box>
      </div>
    </section>
  );
}

export default Contact;
