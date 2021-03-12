import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";
import AuthorForm from '../components/AuthorForm'

const Update = (props) => {
    const {id} = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id, author)
            .then((res)=>{
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/' + id, author)
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    };

    return (
        <div>
            <h2>Favorite Authors</h2>
            <button onClick={(e)=>navigate(`/authors`)}>Home</button>
            <p>Edit this author:</p>
            {loaded && (
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialFirstName={author.firstName}
                    initialLastName={author.lastName}
                />
            )}
        </div>
    )
}

export default Update;