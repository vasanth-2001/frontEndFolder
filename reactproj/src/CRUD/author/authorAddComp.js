import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorAddComp = () => {
    const nav = useNavigate();
    const [author, setAuthor] = useState({
        first_name: "",
        last_name: "",
        age: ""
    });

    const getAuthToken = () => {
        return localStorage.getItem('jwtToken');
    };

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setAuthor({ ...author, [name]: value });
    }

    const addAuthor = async (event) => {
        event.preventDefault();
        try {
            console.log('Sending data:', author); 
            const response = await axios.post(
                'http://localhost:8000/api/authors/',
                author,
                {
                    headers: {
                        'Authorization': `Bearer ${getAuthToken()}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.status === 201) {
                window.alert(response.data.message);
                nav('/authors');
            }
        } catch (error) {
            window.alert(error.response?.data?.message || "Failed to add author");
        }
    }

    return (
        <div>
            <h2 className="mb-4">Add New Author</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addAuthor}>
                        <div className="mb-3">
                            <label className='form-label'>First Name:</label>
                            <input
                                type='text'
                                name='first_name'
                                onChange={inputChangeHandler}
                                value={author.first_name}
                                className='form-control'
                                maxLength="20"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                name='last_name'
                                onChange={inputChangeHandler}
                                value={author.last_name}
                                className='form-control'
                                maxLength="20"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Age:</label>
                            <input
                                type='number'
                                name='age'
                                onChange={inputChangeHandler}
                                value={author.age}
                                className='form-control'
                                min="0"
                                max="150"
                                required
                            />
                        </div>

                        <button type='submit' className='btn btn-primary'>
                            Add Author
                        </button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
    );
}

export default AuthorAddComp;