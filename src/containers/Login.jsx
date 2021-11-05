import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <div className='form-container'>
        <img src='./logos/logo_yard_sale.svg' alt='logo' className='logo' />

        <h1 className='title'>Create a new password</h1>
        <p className='subtitle'>Enter a new passwrd for your account</p>

        <form action='/' className='flex flex-col form'>
          <label for='password' className='mb-1 text-base font-bold label'>
            Password
          </label>

          <input type='password' id='password' placeholder='*********' className='input input-password' />

          <label for='new-password' className='mb-1 text-base font-bold label'>
            Password
          </label>
          <input type='password' id='new-password' placeholder='*********' className='input input-password' />

          <input type='submit' value='Confirm' className='primary-button login-button' />
        </form>
      </div>
    </div>
  );
};

export { Login };
