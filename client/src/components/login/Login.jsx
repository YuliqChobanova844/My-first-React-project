import React from "react";

import {useForm} from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const LoginFormKeys = {
 Email: 'email',
 Password: 'password',

};



export default function Login() {
    const {onLoginSubmit} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm ({
     [LoginFormKeys.Email]: '',
     [LoginFormKeys.Password]: '',

    }, onLoginSubmit);



return (
  <form className="login-form" method="POST" onSubmit={onSubmit}>
  <h2>Login</h2>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name= {LoginFormKeys.Email}
      value={values[LoginFormKeys.Email]}
      onChange={changeHandler}
      placeholder="Enter your email"
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name = {LoginFormKeys.Password}
      value={values[LoginFormKeys.Password]}
      onChange={changeHandler}
      placeholder="Enter your password"
    />
  </div>
  <button type="submit">Login</button>
</form>
);

}