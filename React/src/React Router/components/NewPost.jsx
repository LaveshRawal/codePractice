import React from 'react'

const NewPost = ({postTitle,setPostTitle,handleSubmit,postBody,setPostBody}) => {
  return (
    <main className='NewPost'>
        <h1>NewPost</h1>
        <form className='newPostForm' onSubmit={handleSubmit}>
  <label htmlFor='postTitle'>Title:</label>
          <input 
          id='postTitle'
          type="text"
          required
          value={postTitle}
          onChange={(e)=> setPostTitle(e.target.value)}
          />

<label htmlFor='postBody'>Title:</label>
          <textarea 
          id='postBody'
          type="text"
          required
          value={postBody}
          onChange={(e)=> setPostBody(e.target.value)}
          />
<button type='submit'>Submit</button>

        </form>
    </main>
  )
}

export default NewPost