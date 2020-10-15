import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import actions from '../../hoc/AuthContext/actions';
import { AuthContext } from '../../hoc/AuthContext/AuthContext';

const Login: React.FC<{ className: string }> = ({ className }) => {

  const { dispatch } = React.useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleAuth = () => dispatch({ type: actions.AUTH_STATE_CHANGED, payload: { email, password } });

  return <div className={className}>
    <TextField
      id="loginUserEmail"
      label="Email"
      type="email"
      value={email}
      required
      onChange={(e) => setemail(e.target.value)} />
    <TextField
      required
      id="loginUserPassword"
      label="Password"
      type="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)} />
    <Button onClick={() => handleAuth()}>Login</Button>
  </div>
}

export default Login;