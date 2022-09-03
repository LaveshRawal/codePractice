
/* 
Hooks we will learn here is useNavigate() hook 

const navigate = useNavigate();

<button onClick={()=>navigate("/about")}>About</button>
<button onClick={()=>navigate(-1)}>Go Back Home</button>

Postpage

useParams() = 

useParams hook. The useParams hook is used to read the dynamic params
from the current URL that were matched by <Route path>.

useParams hook will return an object with 
key/value pairs looking like so: /some-path/:name/:id


useSearchParams hook. The useSearchParams hook is used to Read 
and Modify the query string in the URL for the current location.


Similar to the useState hook of React, the useSearchParams hook of React
 Router returns an array with two elements: the first is the 
 current location’s search params and the latter is a function that
  can be used to update them:
 const [searchParams, setSearchParams] = useSearchParams();
https://www.kindacode.com/article/react-router-useparams-usesearchparams-hooks/

https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
https://dev.to/omkarghodake/how-to-use-react-router-dom-v6-973

Firstly, you have to install react-router-dom 
by using npm i react-router-dom or yarn add react-router-dom 
and the import the following.

import {BrowserRouter, Routes, Route} from "react-router-dom".

/* means we are going to put more routes nested inside this route

put below in index.js and done with index.js
 
<Router>
    <Routes>
          <Route path="/*" element={<RootApp />} />
     </Routes>
        
 </Router>

npm i react-router-dom

npm install date-fns --save

Need to make changes into the index.js

*/
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NewPost from "./components/NewPost"
import PostPage from './components/PostPage';
import About from "./components/About"
import Missing from "./components/Missing"
//import Layout from "./components/Layout"
import "./router.css"
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react"
import {format} from 'date-fns';


const RootApp = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "September 02, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "September 02, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "September 02, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "September 02, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const filteredResults = posts.filter(post=>
  ((post.body).toLowerCase()).includes(search.toLowerCase())
  || ((post.title).toLowerCase()).includes(search.toLowerCase()))

   setSearchResult(filteredResults.reverse());

  },[posts,search]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id,title:postBody, datetime,body:postBody};
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate("/")

  }
  const handleDelete = (id)=>{
    console.log(id);
    const postList = posts.filter(post=> post.id !==id);
    setPosts(postList);
    navigate("/");
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