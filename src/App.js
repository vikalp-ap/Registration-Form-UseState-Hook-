import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="card">
          <h2 className="card-title text-center">Detail Form</h2>
          <div className="card-body py-md-4">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  placeholder="Name"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="password"
                  name="age"
                  placeholder="Age"
                  autoComplete="off"
                  value={formData.age}
                  onChange={handleInput}
                />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <button className="btn btn-primary">Submit Details</button>
              </div>
            </form>
            <div>
              <p>{`My name is ${formData.username} and email is ${formData.email}. I am ${formData.age} years old.`}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 2.4rem;
    margin: 3.2rem 0;
  }
  a {
    color: #333;
  }
  a:hover {
    color: #da5767;
    text-decoration: none;
  }
  .card {
    border: 1px solid #000;
    padding: 0 3.2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .form-control:focus {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000;
    outline: 0;
    box-shadow: none;
  }
  input {
    width: 25rem;
    padding: 1rem 2rem;
    //font-family: "Work Sans", sans-serif;
    outline: 0;
    border: 1px solid #000;
    font-size: 1.2rem;
  }
  .btn {
    padding: 0.6rem 1.2rem;
    background-color: #ffdb99;
    border-color: #ffdb99;
    margin-bottom: 3.2rem;
  }
  .btn-primary:hover {
    background: #ffa500;
    border: inset 0.2rem solid #da5767;
    transition: 0.3s;
  }
`;
