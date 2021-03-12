import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";
import AuthorForm from '../components/AuthorForm'

const New = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, []);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then (res => {
                setAuthors([...authors, res.data]);
            })
        }

    return (
        <div>
            <h2>Favorite Authors</h2>
            <button onClick={(e)=>navigate(`/authors`)}>Home</button>
            <p>Add a new author:</p>
            {loaded && (
                <AuthorForm onSubmitProp={createAuthor} initialFirstName="" initialLastName=""/>
            )}
        </div>
    )
}

export default New;
