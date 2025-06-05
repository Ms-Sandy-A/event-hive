import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-white shadow-md'>
      <h1 className='font-semibold '>
        <span>Event</span>
        <span>Hive</span>
      </h1>
      <div className='flex gap-4'>
        <button>Login</button>
        <button className='bg-primary rounded-lg px-4 py-2'>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;