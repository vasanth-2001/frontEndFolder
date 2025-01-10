// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { GET } from "../../shared/service/HTTP.Service"; 

// const AuthorAddComp = () => {
//   const [authors, setAuthors] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchAuthors = () => {
//     // const token = sessionStorage.getItem("jwtToken"); 
//     // if (!token) {
//     //   setError("User not authenticated. Please log in.");
//     //   return;
//     // }

//     // const headers = {
//     //   Authorization: `Bearer ${token}`, 
//     // };

//     GET("/api/author/")
//       .then((res) => {
//         console.log("Fetched authors: ", res.data);
//         setAuthors(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching authors: ", err);
//         setError("Failed to fetch authors. Please try again.");
//       });
//   };

//   useEffect(() => {
//     fetchAuthors(); // Fetch authors when the component mounts
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Authors</h1>
//       {authors.length > 0 ? (
//         <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Age</th>
//             </tr>
//           </thead>
//           <tbody>
//             {authors?.map((author) => (
//               <tr key={author.id}>
//                 <td>{author.id}</td>
//                 <td>{author.first_name}</td>
//                 <td>{author.last_name}</td>
//                 <td>{author.age}</td>
//               </tr>

              
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No authors found.</p>
//       )}
//     </div>
//   );
// };

// export default AuthorAddComp;








import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Button } from "react-bootstrap";
import { DELETE, GET } from "../../shared/service/HTTP.Service";

const AuthorAddComp = () => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [show, setShow] = useState(false);

  // Fetch authors from the API
  const fetchAuthors = () => {
    setLoading(true);
    
      GET("/api/author/")
      .then((res) => {
        setAuthors(res.data)    ;
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching authors: ", err);
        setError("Failed to fetch authors. Please try again.");
        setLoading(false);
      });
  };

  // Delete an author by ID
  const deleteAuthor = (id) => {
    console.log(id);
    
    if (window.confirm(`Are you sure you want to delete author ID: ${id}?`)) {
      
        DELETE(`/api/author/${id}/`)
        .then(() => {
          alert("Author deleted successfully.");
          fetchAuthors(); // Refresh the author list
        })
        .catch((err) => {
          console.error("Error deleting author: ", err);
          alert("Failed to delete the author. Please try again.");
        });
    }
  };

  // Open the modal with selected author details
  const handleShow = (author) => {
    setSelectedAuthor(author);
    setShow(true);
  };

  // Close the modal
  const handleClose = () => {
    setShow(false);
    setSelectedAuthor(null);
  };

  // Fetch authors on component mount
  useEffect(() => {
    fetchAuthors();
  }, []);

  if (loading) {
    return <div>Loading authors...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Authors</h1>
      <Link to="/mainDashboard/authoradd" className="btn btn-primary mb-3">
        <AddIcon /> Add Author
      </Link>
      {authors.length > 0 ? (
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ width: "100%", textAlign: "left" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={author.id}>
                <td>{index + 1}</td>
                <td>{author.first_name}</td>
                <td>{author.last_name}</td>
                <td>{author.age}</td>
                <td>
                {author.image ? (
                  <img src={author.image} alt="Profile" width="10vw" />
                ) : (
                  "No Image"        
                )}
              </td>

                <td>
                  {/* View Author Details */}
                  <button
                    type="button"
                    className="btn btn-outline-info btn-sm"
                    onClick={() => handleShow(author)}
                  >
                    <VisibilityIcon />
                  </button>
                  &nbsp;
                  {/* Edit Author */}
                  <Link
                    to={`/mainDashboard/authoredit/${author.id}`}
                    className="btn btn-outline-success btn-sm"
                  >
                    <EditIcon />
                  </Link>
                  &nbsp;
                  {/* Delete Author */}
                  <button
                    type="button"
                    onClick={() => deleteAuthor(author.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No authors found.</p>
      )}

      {/* Modal for viewing author details */}
      {selectedAuthor && (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedAuthor.first_name} {selectedAuthor.last_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>First Name:</strong> {selectedAuthor.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {selectedAuthor.last_name}
            </p>
            <p>
              <strong>Age:</strong> {selectedAuthor.age}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AuthorAddComp;
