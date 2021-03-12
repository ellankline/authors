import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";

const AuthorList = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api')
            .then((res) => {
                console.log(res.data);
                setAllAuthors(res.data);
            })
            .catch((err => {
                console.log(err);
            }))
    }, [])
    
    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/' + id)
            .then((res) => {
                const deletedAuthor = res.data;
                console.log(deletedAuthor);
                const filteredAuthors = allAuthors.filter((author) => author._id !== id);
                setAllAuthors(filteredAuthors);
            });
        navigate(`/authors`);
    }
    return (
        <div>
            {allAuthors.map((author, idx) => (
                    <p key={idx}>
                        {author.firstName} {author.lastName}
                    <br/>
                    <button onClick={(e)=>navigate(`/authors/edit/${author._id}`)}>Edit</button>
                    <button onClick={(e)=>deleteAuthor(author._id) }>Delete</button>
                    </p>
            ))}
        </div>
    );
};

export default AuthorList;