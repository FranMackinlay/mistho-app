import React, { useState } from 'react';

import './LoginComponent.css';


export default function LoginComponent(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = e => {
    e?.preventDefault();
    setEmail(e.target.value);
  }

  const onChangePassword = e => {
    e?.preventDefault();
    setPassword(e.target.value);
  }


  const onSubmit = e => {
    e?.preventDefault();
    email && password && props.history.push('/articles');
  }


  return (
    <div className='login'>
				<h1>Welcome!</h1>
				<form className="df fldc" onSubmit={onSubmit}>
					<input type='email' value={email} onChange={onChangeEmail} placeholder='Email..' />
					<input type='password' value={password} onChange={onChangePassword} placeholder='Password..' />
					<button type='submit'>Login</button>
				</form>
			</div>
  )
}
