import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";
import AuthorList from '../components/AuthorList';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, []);
    
    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }


    return (
        <div>
            <h2>Favorite Authors</h2>
            <button onClick={(e)=>navigate(`/authors/new/`)}> Add an author </button>
            <p>We have quotes by:</p>
            <hr/>
            { loaded && <AuthorList products ={authors} removeFromDom={removeFromDom}/> }
        </div>
    )
}
export default Main;