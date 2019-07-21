import React from 'react';

const LoginLayout = ({ children }) => (
    <div style={{ backgroundColor: '#f3f3f4', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '300px' }}>
        { children }
      </div>
    </div>
);

export default LoginLayout;
