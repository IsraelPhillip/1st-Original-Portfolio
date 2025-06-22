import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2jhetzv',     // Your EmailJS Service ID
        'template_2i5wdzi',    // Your EmailJS Template ID
        form.current,
        {
          publicKey: '05TfPzs-cdf7mgVsu', // Your EmailJS Public Key
        }
      )
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess('Failed to send message. Try again.');
        }
      );
  };

  return (
    <div>
      <p className='text-cyan mb-4'>{success}</p>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>

        <input
          name='from_name'
          type='text'
          placeholder='Your Name'
          required
          className='h-12 rounded-lg bg-grey px-2'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          name='from_email'
          type='email'
          placeholder='Your Email'
          required
          className='h-12 rounded-lg bg-grey px-2'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          name='message'
          cols='50'
          rows='10'
          placeholder='Your Message'
          required
          className='rounded-lg bg-grey p-2'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type='submit'
          className='w-full rounded-lg border border-cyan text-white font-bold text-xl h-12 hover:bg-darkCyan bg-cyan transition-all duration-500'
        >
          Send
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
