import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
   const {onRegisterSubmit} = useContext(AuthContext)
   const {values, changeHandler, onSubmit} = useForm ({
      email: '',
      password:'',
      confirmPassword: '',
   }, onRegisterSubmit)
 

  return (
    <form className="registration-form"  method = "POST" onSubmit={onSubmit}>
      <h2>Регистрация</h2>
      <div className="form-group">
        <label htmlFor="email">Имейл</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Парола</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={changeHandler}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Потвърди паролата</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={changeHandler}
          required
        />
      </div>
      <button type="submit">Регистрирай се</button>
      <p className='firld'>
        <span>If you already have profile click <Link to= '/login'>here</Link></span>
      </p>
    </form>
  );
};

export default RegistrationForm;
