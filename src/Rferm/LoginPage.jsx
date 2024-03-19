import React from 'react';
import Testing_page from './Rferm_components/Testing_page';



const LoginPage = () => {
  const userCredentials = ['ADMIN'];

  return (
    <div>
      <Testing_page credentials={userCredentials} />
    </div>
  );
};

export default LoginPage;

