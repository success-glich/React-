import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("Please Login");
  const submitForm = (e) => {
    e.preventDefault();
    // const newEntry = { email: email, password: password };
    // console.log(newEntry);
    // setAllEntry([...allEntry, newEntry]);
    // console.log(allEntry);
    if(email==="admin" &&password==="admin"){
        setMsg("Logged in successfully");
    }else{
        setMsg("Login Failed")
    }
  };
  return (
 
    <div className="container">
      <div className="showDataStyles">
        <p>{msg}</p>
      </div>

      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit"> Login</button>
      </form>
      </div>
    
  );
};
export default BasicForm;
