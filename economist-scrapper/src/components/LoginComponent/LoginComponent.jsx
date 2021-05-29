import React, { useState } from 'react';
import UsersSrv from '../../services/UsersSrv';
import Emitter from '../../services/EventEmitterSrv';


import './LoginComponent.css';


export default function LoginComponent(props) {

  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeName = e => {
    e?.preventDefault();
    setName(e.target.value);
  }

  const onChangeEmail = e => {
    e?.preventDefault();
    setEmail(e.target.value);
  }

  const onChangePassword = e => {
    e?.preventDefault();
    setPassword(e.target.value);
  }


  const onSubmit = async e => {
    e?.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    try {
      const {data} = await UsersSrv.userSignIn(user);
      if (data._id) {
        localStorage.setItem('user', JSON.stringify(data));
        Emitter.emit('INPUT-USER-LOGIN', user);
        props.history.push('/articles')
      }
    } catch (error) {
      setError('Invalid username or password');
    }

  }


  return (
    <div className='login'>
				<h1>Welcome!</h1>
				<form className="df fldc" onSubmit={onSubmit}>
          {error && (
            <span style={{color: 'red'}}>{error}</span>
          )}
					<input type='text' value={name} onChange={onChangeName} placeholder='Name..' />
					<input type='email' value={email} onChange={onChangeEmail} placeholder='Email..' />
					<input type='password' value={password} onChange={onChangePassword} placeholder='Password..' />
					<button type='submit'>Login</button>
				</form>
			</div>
  )
}
