import React, {  useState, useEffect} from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Authentification = () => {

    // Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [inputPassword, setInputPassword] = useState('')
    const [password, setPassword] = useState('');
    const [toHomePage, setToHomePage] = useState(false);
    const [error,setError] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
        localStorage.setItem("isDarkModeEnabled", isDarkMode);
      }, [isDarkMode]);
  
      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };
  
  
      useEffect(() => {
          getPassword();
      }, []);

    // Retreive Password From Firebase
    const getPassword = async () => {
        try{
            const response = await axios.get("https://portfolio-a0278-default-rtdb.firebaseio.com/password.json");
            setPassword(response.data);
        } catch (error) {
            console.log("Error fetching data", error);
            return null;
        }
    };


    // Form Submit Logic
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (inputPassword == password) {
            setToHomePage(true);
        } else {
            setError(true);
        }
    };

    if (toHomePage === true) {
        return <Navigate to="/home"/>
    };


  return (
    <>
      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>
      {/* End Dark & Light Mode Swicher  */}

        <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/logo.png" alt="brand" />
                </Link>
              </div>
            </div>
        </div>
        {/* End Left Part  */}

        <div className="rightpart">
          <div className="rightpart_in authentification_container">
            <div className="tokyo_tm_section authentification_flex">
                <div className="container authentification_center">
                    <div className="tokyo_tm_contact">
                    <div className="tokyo_tm_title">
                        <div className="title_flex">
                        <div className="left">
                            <h3>Enter Password Provided On Resume</h3>
                        </div>
                        </div>
                    </div>
                    {/* END TITLE */}


                        <div className="fields">
                            <form
                            className="contact_form"
                            id="myForm"
                            onSubmit={formSubmitHandler}
                            >
                            <div className="first">   
                                <ul>
                                    <li>
                                        <input
                                        type="password"
                                        id="password"
                                        value={inputPassword}
                                        onChange={(event) => setInputPassword(event.target.value)}
                                        placeholder="Enter Password..."
                                        required
                                        />
                                    </li>
                                    {error && <p style={{color: 'red'}}>Password is incorrect, try agin</p>}
                                    {/* END PASSWORD */}
                                </ul>
                             
                            </div>
                            <div className="tokyo_tm_button">
                                <button type="submit" className="ib-button">
                                    View Portfolio
                                </button>
                            </div>
                            {/* END SUBMIT BUTTON */}
                            </form>
                            {/* END FORM */}
                        </div>
                        {/* END FIELDS */}
                     </div>
                </div>
            </div>
          </div>
        </div>
        {/* End Right Part  */}
    </>
  );
};

export default Authentification;