import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ children }) {
  return (
    <div className='div1'>
      <div className='div2'>
        <div className='div3'>
          <div className='div4'>
            <div className='div5'>
              <div className='div6'>
                <div className='div7'>
                  <Link to='/' className='div7'>
                    <div className='div8'>When Should I Leave</div>
                  </Link>
                </div>
              </div>

              <div className='div9'>
                <div className='div10'>
                  <Link to='/directions' className='link1'>
                    Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
