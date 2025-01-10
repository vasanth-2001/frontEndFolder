import axios from "axios";

//create axios object with basic configuration
const axiosHttp = axios.create({
    // baseURL:window.location.hostname.includes("localhost")? "http://localhost:8080":"http://www.google.com"
    baseURL:"http://127.0.0.1:8000"
});

// create interceptor for request
axiosHttp.interceptors.request.use(
    (config)=>{
        const token =!!sessionStorage.getItem("jwtToken");
        return{
            ...config,
            headers:{
                ...(token && {'Authorization':`Bearer ${sessionStorage.getItem("jwtToken")}`}),
                ...config.headers
            }
        }
    },
    (error)=>{
        return Promise.reject(error)
    }
);


//create interceptor for response

axiosHttp.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.reject(error)
    }
)


//Global Request Http Request

export const GET = (url,header={})=>{
    return axiosHttp.get(url,{headers:header});
}

// export const DELETE = (url,header={})=>{
//     return axiosHttp.delete(url,{headers:header});
// }
// export const POST = (url,payload,header={})=>{
//     return axiosHttp.post(url,payload,{headers:header});
// }

// export const PUT = (url,payload,header={})=>{
//     return axiosHttp.put(url,payload,{headers:header});
// }

// DELETE request (for author)
export const DELETE = (url, header = {}) => {
    return axiosHttp.delete(url, { headers: header })
        .then(response => {
            console.log("Deleted successfully:", response);
            return response;
        })
        .catch(error => {
            console.error("Error during DELETE request:", error);
            throw error; // Re-throw error for further handling
        });
};

// POST request (for creating author or other data)
export const POST = (url, payload, header = {}) => {
    return axiosHttp.post(url, payload, { headers: header });
};

// PUT request (for updating author data)
export const PUT = (url, payload, header = {}) => {
    return axiosHttp.put(url, payload, { headers: header })
        .then(response => {
            console.log("Updated successfully:", response);
            return response;
        })
        .catch(error => {
            console.error("Error during PUT request:", error);
            throw error; // Re-throw error for further handling
        });
};
