import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormLayout = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, form } = useForm(
    submitForm,
    validate
  );

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Contact Me For an Appoitment
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Enter the service you want below, and time for appoitment</label>
          <input
            className='form-input'
            type='textarea'
            name='message'
            placeholder='Enter your message'
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default FormLayout;