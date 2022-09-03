 // npx json-server -p 3300 -w data/axiosdb.json
// data/axiosdb.json

/* below example is of Basic fetch method
useEffect(()=>{
  const fetchItems = async ()=>{
    try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error ('Did not receive expected data');
          const listItems = await  response.json();
          setItems(listItems);
          setFetchError(null);
    }catch(err){
      // console.log(err.stack);
        // console.log(err.message); 
        setFetchError(err.message)
      }finally{
        setLoading(false);
      }
    } */

import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from './PostPage';
import About from "./About"
import Missing from "./Missing"
//import Layout from "./Layout"
import "./blog.css"
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react"
import {format} from 'date-fns';
import api from "./api/posts"


const RootApp = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  // Receiving data from JSON server at the Load time with AXIOS 
  useEffect(()=>{
    const fetchPost = async () =>{
      try{
  /* Axios automatically creates JSON and automatically catch the error
    when they are not in the range of 200 http responses  */
    const response = await api.get('/posts')
    setPosts(response.data);
      }catch(err){
        if(err.response){
            // Not is 200 response range axios provide error for us from backend
            console.log(err.response.data);
            console.log(err.response.data.message);
            console.log(err.response.status);
            console.log(err.response.headers);
            }
            else{
              console.log(`Error ${err.message}`) /* when no response at all and 404 or something else */
            }
      }
    }
    fetchPost();
  },[]);

  useEffect(()=>{
    const filteredResults = posts.filter(post=>
  ((post.body).toLowerCase()).includes(search.toLowerCase())
  || ((post.title).toLowerCase()).includes(search.toLowerCase()))

   setSearchResult(filteredResults.reverse());

  },[posts,search]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id,title:postBody, datetime,body:postBody};
    
    // Updating Data into Json Server DB with AXIOS
    try{
    const response = await api.post('/posts',newPost);
    const allPosts = [...posts, response.data]; // newPost=> response this is because we updating data which we receive from JSON server
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate("/")
    }catch(err){
      console.log(`Error ${err.message}`);
    }
  }

  // TO delete Data with AXIOS // no need to get reponse for delete method 
  const handleDelete = async (id)=>{
    try { 
      await api.delete(`/posts/${id}`);// Axios will delete with ID and list will be updated below
      
      //let res = await api.delete(`/posts/${id}`); console.log(res);
     
    const postList = posts.filter(post=> post.id !==id);
    setPosts(postList);
    navigate("/"); 
    }catch(err){
      console.log(`Error ${err.message}`);
    }
  }
  



  return (
    <div className="App">
            <Header title="ReactJS Blog" />
            <Nav 
            search={search}
            setSearch={setSearch}
            />
        <Routes>
             <Route path="/" element={  <Home posts={searchResult} />  } /> 
             
             <Route path="/post" element={   <NewPost 
             postTitle={postTitle} 
             setPostTitle={setPostTitle}
             handleSubmit={handleSubmit}
             postBody={postBody}
             setPostBody={setPostBody}
             /> } /> 

             <Route path="/post/:id" element={  <PostPage posts={posts} handleDelete={handleDelete} /> } /> 
             <Route path="/about" element={  <About /> } /> 
             <Route path="*" element={  <Missing />} />                                   
        </Routes>
            <Footer />

    </div>
  
  )
}

export default RootApp