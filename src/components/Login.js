import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      
      
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/GB-en-20241104-TRIFECTA-perspective_b22b6633-ce0d-49ce-bab9-3e20d0259ad4_large.jpg' 
          alt='bg' 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form container */}
      <div className='relative bg-black bg-opacity-60 p-6 rounded-lg w-100'>
      <label className='text-white text-2xl font-bold'>Sign In</label>
        <form className='flex flex-col items-center'>
          <input type='text' placeholder='Email or phone number' className='w-80 h-10 m-2 p-2 rounded-md opacity-60'/>
          <input type='password' placeholder='Password' className='w-80 h-10 m-2 p-2 rounded-md opacity-60'/>
          <button className='w-80 h-10 m-2 p-2 bg-red-800 text-white rounded-md hover:bg-red-600'>Sign In</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
