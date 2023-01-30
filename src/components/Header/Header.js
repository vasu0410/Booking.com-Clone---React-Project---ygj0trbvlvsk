import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./header.css";

const Header = () => {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMailId(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const navigate = useNavigate();
  return (
    <nav className='navbar'>
      <div className='container'>
        <a className='navbar' href='/Master'>
          <img src={logo} alt='logo' width='140' height='35' className='logo' />
        </a>
        <div className='navLinks'>
          <ul>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/Master")}
              >
                FLIGHTS
              </button>
            </li>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/hotels")}
              >
                HOTELS
              </button>
            </li>
            <li>
              <div className='dropdown ms-2'>
                <button
                  className='btn btn-primary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  User Info
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <li>
                    <a className='dropdown-item' href='/Master'>
                      Hello User
                    </a>
                  </li>

                  <li>
                    <a
                      className='dropdown-item'
                      href='.'
                      onClick={() => navigate("/")}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
