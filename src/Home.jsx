import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NameicContext } from './Context/Context';
import './index.css';

function Home() {
    const navigate=useNavigate();
    const {users,setuser} = useContext(NameicContext);

    const [user, setUser] = useState({ name: "", ic: "" });
    const [userst, setUserst] = useState({ name: "", ic: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleInputChangest = (event) => {
        const { name, value } = event.target;
        setUserst((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        setuser({name:user.name,ic:user.ic})
        navigate("/others")
    };
    const handleSubmitST = (event) => {
        event.preventDefault();
        console.log(userst);
        setuser({name:userst.name,ic:userst.ic})
        navigate("/stutea")
    };

    return (
        <div className="home-container">
            <div>
                <h1 className="others-heading">
                    OTHERS
                </h1>
                <form onSubmit={handleSubmit} className="form-container">
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    placeholder='Enter the name'
                    />
                    <label htmlFor="ic">IC Number:</label>
                    <input
                    type="text"
                    id="ic"
                    name="ic"
                    value={user.ic}
                    onChange={handleInputChange}
                    placeholder='Enter the ic number'
                    />
                    <button type="submit" className="submit-button">
                        Submit OTHERS
                    </button>
                </form>
            </div>
            <div>
                <h1 className="stutea-heading">
                    STUDENT AND TEACHER
                </h1>
                <form onSubmit={handleSubmitST} className="form-container">
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={userst.name}
                    onChange={handleInputChangest}
                    placeholder='Enter the name'
                    />
                    <label htmlFor="ic">IC Number:</label>
                    <input
                    type="text"
                    id="ic"
                    name="ic"
                    value={userst.ic}
                    onChange={handleInputChangest}
                    placeholder='Enter the ic number'
                    />
                    <button type="submit" className="submit-button">
                        Submit Teacher Student
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;