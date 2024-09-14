import React from "react";

export default function StudentLogin() {
  return (
    <div className="mainPageAdmin">
      <div className="formAdmin">
        <h2>Login In 
        </h2>
        <div className="formAdminLogin">
          <div>
            <h4>Email</h4>
            <input type="text" />
          </div>
          <div>
            <h4>Password</h4>
            <input type="text" />
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
