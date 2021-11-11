import React from "react";


function NavBar() {
  return (
    <header className="navbar">
        <h3>HOME</h3>
{/* route to Home page */}
        <h3>DOGS </h3>
        {/* display only dogs */}

        <h3>CATS</h3>
        {/* display only cats */}

        <h3>TEST</h3>

    </header>
  );
}

export default NavBar;