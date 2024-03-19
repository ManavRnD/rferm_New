import React from 'react';
import Testing_page from './Rferm_components/Testing_page';



const LoginPage = () => {
  const userCredentials = ['CCC'];

  return (
    <div>
      <Testing_page credentials={userCredentials} />
    </div>
  );
};

export default LoginPage;

