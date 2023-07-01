import React, { useState } from 'react';
import "./Form.css";
import axios from 'axios';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [body, setBody] = useState("hello sir this is the new mail");
  const [file, setFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('email2', email);
    formData.append('body', body);
    formData.append('file', file);

    try {
      await axios.post('/app/forma', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success
      console.log('Email sent successfully!');
    } catch (error) {
      // Handle error
      console.error('Failed to send email', error);
    }
  };

  return (
    <div className='form_container'>
   <h2 className='form_heading'>Send</h2>
      <div>
    <form onSubmit={handleFormSubmit}>
      <div className='content'>
      <h4> Name:</h4>
      <div className='single_col'>
      <input
        type="text"
        placeholder="Name"
        className='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      </div>
      <div className='content'>
      <h4> Email:</h4>
      <div className='single_col'>
      <input
        type="email"
        placeholder="Email"
        className='name'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      </div>
      <div className='content'>
      <h4> Email2:</h4>
      <div className='single_col'>
      <input
        type="email"
        placeholder="Email2"
        className='name'
        value={email2}
        onChange={(e) => setEmail2(e.target.value)}
      />
      </div>
      </div>
      <div className='content'>
      <h4> Body:</h4>
      <div  className='single_col'>
      <textarea
        placeholder="Message"
       className='name'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      </div>
      </div>
      <div className='content'>
      <h4> File to be send :</h4>
        <div  className='attachment'>
      <input type="file" className='choose_btn' onChange={(e) => setFile(e.target.files[0])} />
      </div>
      </div>
      <button type="submit" className='form-btn'>Submit</button>
    </form>
    </div>
    </div>
  );
};

export default FormComponent;
