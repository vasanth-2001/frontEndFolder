// //author add

// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { POST } from "../../shared/service/HTTP.Service";


// const AuthorEditComp = () => {  
//     const nav = useNavigate();
//     const [formData, setFormData] = useState({ first_name: "", last_name: "", age: "",image:"" });
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
//     // const handleFileChange=(e)=>{
//     //     setFormData({...formData,image:e.target.files[0]})
//     // }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError(null);
//         setSuccess(null);

//         POST("/api/author/", formData)
//             .then(() => {
//                 setSuccess("Author added successfully!");
//                 setFormData({ first_name: "", last_name: "", age: "" });
//                 nav('/mainDashboard/authordash')
//             })
//             .catch((err) => {
//                 console.error("Error adding author:", err);
//                 setError("Failed to add author. Please try again.");
//             });
//     };

//     return (
//         <div>
//             <h1>Add Author</h1>
//             {error && <div style={{ color: "red" }}>{error}</div>}
//             {success && <div style={{ color: "green" }}>{success}</div>}

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>First Name:</label>
//                     <input
//                         type="text"
//                         name="first_name"
//                         value={formData.first_name}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Last Name:</label>
//                     <input
//                         type="text"
//                         name="last_name"
//                         value={formData.last_name}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Age:</label>
//                     <input
//                         type="number"
//                         name="age"  
//                         value={formData.age}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Add Author</button>
//             </form>
//         </div>
//     );
// };

// export default AuthorEditComp;


import React, { useState } from "react";
import { POST } from "../../shared/service/HTTP.Service";
import { useNavigate } from "react-router-dom";

const AuthorEditComp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    image: null, // To handle image upload
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Handle file input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("age", formData.age);
    if (formData.image) {
      data.append("image", formData.image);
    }

    POST("/api/author/", data)
      .then(() => {
        alert("Author added successfully!");
        navigate("/mainDashboard/authordash");
      })
      .catch((error) => {
        console.error("Error adding author:", error);
        alert("Failed to add author. Please try again.");
      });
  };

  return (
    <div>
      <h2>Add Author</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br />
        <label>Profile Image:</label>
        <input type="file" name="image" onChange={handleFileChange} />
        <br />
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
};

export default AuthorEditComp;
