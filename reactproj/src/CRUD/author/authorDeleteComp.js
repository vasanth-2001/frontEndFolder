// //auhtoredit
// import React, { useEffect, useState } from "react";
// import { GET, PUT } from "../../shared/service/HTTP.Service";

// const AuthorDeleteComp = ({ authorId }) => {
//     // const { id } = useParams();
//   const [formData, setFormData] = useState({ first_name: "", last_name: "", age: "" });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchAuthor = () => {
//     setIsLoading(true);
//     GET(`/api/author/${authorId}/`)
//       .then((res) => {
//         setFormData(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching author:", err);
//         setError("Failed to fetch author details.");
//         setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchAuthor();
//   }, [authorId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     PUT(`/api/author/${authorId}/`, formData)
//       .then(() => {
//         setSuccess("Author updated successfully!");
//       })
//       .catch((err) => {
//         console.error("Error updating author:", err);
//         setError("Failed to update author. Please try again.");
//       });
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Author</h1>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       {success && <div style={{ color: "green" }}>{success}</div>}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="first_name"
//             value={formData.first_name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="last_name"
//             value={formData.last_name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Update Author</button>
//       </form>
//     </div>
//   );
// };

// export default AuthorDeleteComp;



// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { GET,PUT } from '../../shared/service/HTTP.Service' 
// const AuthorDeleteComp = () => {

//     const { id } = useParams();
//     const nav = useNavigate();

//     const [author, setAuthor] = useState({
//         first_name:'',
//         last_name:'',
//         age:'',
//     })

//     const inputChange = (event) => {
//         const { type, name, value } = event.target;
//         setAuthor({ ...author, [name]: value });

//     }

//     useEffect(() => {
//         GET(`/api/author/${id}/`)
//             .then((response) => {
//                 console.log(response.data);
//                 setAuthor(response.data);
//             })
//             .catch((error) => {
//             });
//     }, []);



//     const authorEdit = (event) => {
//         event.preventDefault();
//         PUT(`/api/author/${id}/`, author).then(() => {
//             window.alert("Auhor edited Successfully");
//             nav('/mainDashboard/authorDash')
//         }).catch((error) => { })

//     }
//     return (
//         <div>
//             <h2> This is AuthorEditComp</h2>
//             <div className='row'>
//                 <div className='col-sm-3'></div>
//                 <div className='col-sm-6'>
//                     <form onSubmit={authorEdit}>
//                         <label className='form-label'>Enter First Name:</label>
//                         <input type='text' name='first_name' className='form-control' value={author.first_name} onChange={inputChange}></input>
//                         <label className='form-label'>Enter Last Name:</label>
//                         <input type='text' name='last_name' className='form-control'value={author.last_name} onChange={inputChange}></input>
//                         <label className='form-label'>Enter Age:</label>
//                         <input type='text' name='age' className='form-control' value={author.age} onChange={inputChange}></input>
                
//                         <div className='d-grid gap-2'>
//                             <button type='submit' className='btn btn-success' > EDIT </button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className='col-sm-3'></div>
//             </div>
//         </div>
//     )
// }

// export default AuthorDeleteComp






// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { GET, PUT } from "../../shared/service/HTTP.Service";

// const AuthorDeleteComp = () => {
//   const { id } = useParams(); // Getting author ID from the URL
//   const navigate = useNavigate(); // To navigate after success
//   const [author, setAuthor] = useState({
//     first_name: "",
//     last_name: "",
//     age: "",
//   });
//   const [error, setError] = useState(null);

//   // Fetch author data by ID
//   const fetchAuthor = () => {
//     GET(`/api/author/${id}`)
//       .then((res) => {
//         setAuthor(res); // Populate form with the existing data
//       })
//       .catch((err) => {
//         setError("Error fetching author data.");
//       });
//   };

//   // Update author
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Update the author details with the PUT request
//     PUT(`/api/author/${id}`, author)
//       .then(() => {
//         alert("Author updated successfully!");
//         navigate("/mainDashboard/authordash"); // Navigate back to authors list after successful update
//       })
//       .catch((error) => {
//         setError("Error updating author.");
//       });
//   };

//   useEffect(() => {
//     fetchAuthor(); // Fetch author data on component mount
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Author</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={author.first_name}
//             onChange={(e) => setAuthor({ ...author, first_name: e.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             value={author.last_name}
//             onChange={(e) => setAuthor({ ...author, last_name: e.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <label>Age:</label>
//           <input
//             type="number"
//             value={author.age}
//             onChange={(e) => setAuthor({ ...author, age: e.target.value })}
//             required
//           />
//         </div>

//         <button type="submit">Update Author</button>
//       </form>
//     </div>
//   );
// };

// export default AuthorDeleteComp;















import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GET,PUT } from '../../shared/service/HTTP.Service' 
const AuthorDeleteComp = () => {

    const { id } = useParams();
    const nav = useNavigate();

    const [author, setAuthor] = useState({
        first_name:'',
        last_name:'',
        age:'',
        profile:''
    })

    const inputChange = (event) => {
        const { type, name, value , files } = event.target;
        setAuthor({ ...author, 
            [name]:(type === 'file') ? files[0] : value });
    }

    useEffect(() => {
        GET(`/api/author/${id}/`)
            .then((response) => {
                console.log(response.data);
                setAuthor(response.data);
            })
            .catch((error) => {
            });
    }, []);



    const authorEdit = (event) => {
        event.preventDefault();
        const authorForm = new FormData();
        authorForm.append('first_name',author.first_name);
        authorForm.append('last_name',author.last_name);
        authorForm.append('age',author.age);
        authorForm.append('image',author.profile);
        PUT(`/api/author/${id}/`, authorEdit).then(() => {
            window.alert("Author edited Successfully");
            nav('/mainDashboard/authordash')
        }).catch((error) => { })

    }
    return (
        <div>
            <h2> This is AuthorEditComp</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={authorEdit}>
                        <label className='form-label'>Enter First Name:</label>
                        <input type='text' name='first_name' className='form-control' value={author.first_name} onChange={inputChange}></input>
                        <label className='form-label'>Enter Last Name:</label>
                        <input type='text' name='last_name' className='form-control'value={author.last_name} onChange={inputChange}></input>
                        <label className='form-label'>Enter Age:</label>
                        <input type='text' name='age' className='form-control' value={author.age} onChange={inputChange}></input>
                        <label className='form-label'>Upload Image:</label>
                        <input type='file' className='form-control' name='profile' onChange={inputChange}></input><br/>
                        <div className='d-grid gap-2'>
                            <button type='submit' className='btn btn-success' > EDIT </button>
                        </div>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
    )
}

export default AuthorDeleteComp