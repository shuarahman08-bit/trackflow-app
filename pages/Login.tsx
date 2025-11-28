import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="login">
      <h2>Login</h2>
      <button onClick={onLogin}>Sign In</button>
    </div>
  );
};

export default Login;
