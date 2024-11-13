
// import React from 'react';
// import './Navbar.css';
// const Navbar = ({ isLoggedIn, handleLogout }) => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><a href="/">Home</a></li>
//         {!isLoggedIn ? (
//           <>
//             <li><a href="/login">Login</a></li>
//             <li><a href="/signup">Signup</a></li>
//           </>
//         ) : (
//           <li>
//             <button onClick={handleLogout}>Logout</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import './Navbar.css';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="app-name">ViberBus</div>
      <ul>
        {/* <li><a href="/">Home</a></li> */}
        {!isLoggedIn ? (
          <>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
