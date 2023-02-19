import axios from "axios";

const URL = "http://localhost:8000";
const config = {
  headers: { authorization: localStorage.getItem('token')},
};
//Use login
export const userLogin = async (user) => {
  try {
    return await axios.post(`${URL}/login`, user);
  } catch (error) {
    console.log("Error while calling userLogin API", error);
  }
};
// User Signup
export const userSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling userSignup API", error);
  }
};
// Create Post
export const createNewPost = async (newPost) => {
  try {
    return await axios.post(`${URL}/new`, newPost,config);
  } catch (error) {
    console.log("Error while calling createNwePost API", error);
  }
};


// get all posts 
export const fetchAllPosts = async (user) => {
  try {
    return await axios.get(`${URL}/posts`);
  } catch (error) {
    console.log("Error while calling userLogin API", error);
  }
};
//Delete psot
export const DeletePost = async(id)=>{

try {
  return await axios.delete(`${URL}/posts/${id}`)
  
} catch (error) {
  console.log('error while calling delete API',error)
  
}

}
export const fetchProfile =async()=>{
  try {
    return await axios.get(`${URL}/profile`,config)
    
  } catch (error) {
    console.log(error)
    
  }
}




