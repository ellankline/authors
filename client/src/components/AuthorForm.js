import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";
const AuthorForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
        navigate(`/authors`);
    }
        
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input 
                        type="text" 
                        name="firstName" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input 
                        type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </p>
                <input type="submit" />
            </form>
            <button onClick={(e)=>navigate(`/authors`)}>Cancel</button>
        </div>
    )
}

export default AuthorForm;


