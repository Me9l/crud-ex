import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()

  const authContext = useAuth()

  function handleUsernameChange(e) {
    // console.log(e.target.value);
    setUsername(e.target.value)
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  };

  function handleSubmit() {
    if(authContext.login(username,password)) {
      navigate(`/welcome/${username}`)
    } else {
      setShowErrorMessage(true)
    }
  }

  return (
    <div className="Login">
      <h2>LOGIN Page</h2>
      <div className="LoginForm">
        <div>
          <label> UserName </label>
          <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
        </div>
        <div>
          <label> Password </label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>Login</button>
        </div>
        {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}
      </div>
    </div>
  );
}

export default LoginComponent