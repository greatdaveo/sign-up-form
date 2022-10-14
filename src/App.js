import { useState } from "react";
import "./App.css";

function App() {

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
    comfirmPassword: "",
    addNewsLetter: true
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (FormData.password === FormData.comfirmPassword) {
      console.log("Sign up successful")
    } else {
      console.log("Passwords do not match")
      return
    }
    if (FormData.addNewsLetter) {
      console.log("Thanks for signing up for the news letter")
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={FormData.email}
          placeholder="Email address"
          onChange={handleChange}
          className="form--input"
        />
        <input 
          type="password" 
          name="password"
          value={FormData.password}
          placeholder="Password" 
          onChange={handleChange}
          className="form--input" />
        <input
          type="password"
          name="comfirmPassword"
          value={FormData.comfirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
          className="form--input"
        />

        <div className="form--marketing">
          <input 
            id="okayToEmail" 
            name="addNewsLetter"
            type="checkbox" 
            checked={FormData.addNewsLetter}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}

export default App;
