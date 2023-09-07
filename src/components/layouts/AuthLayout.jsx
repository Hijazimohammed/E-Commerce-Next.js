'use client';
import React from 'react';
import AuthForm from '../molecules/AuthForm';

const AuthLayout = ({ children }) => {
  return (
    <>
      {children}
      <AuthForm />
    </>
  );
};

export default AuthLayout;
