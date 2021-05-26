import React from 'react';

import './LoginComponent.css';


export default function LoginComponent() {
  return (
    <div className='login'>
				<h1>Welcome!</h1>
				<form className="df fldc">
					<input type='email' placeholder='Email..' />
					<input type='password' placeholder='Password..' />
					<button type='submit'>Login</button>
				</form>
			</div>
  )
}
