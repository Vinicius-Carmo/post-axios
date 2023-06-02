import React from 'react'
import './NewPost.css'

import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  
    const navigate = useNavigate()
    const [title, seTitle] = useState()
    const [body, setBody] = useState() 
  

  const createPost = async(e) =>{
    e.preventDefault();

    const post ={title, body, userId:1}

    await blogFetch.post('/posts',{
      body: post,
    })

    navigate('/')
  }

  return (
    <div className='new_post'>
      <h2>Inserir novo Post:</h2>
      <form onSubmit={createPost}>
        <div className="form_control">
          <label htmlFor="title">Título:</label>
          <input type="text" name='title' id='title' placeholder='Digite o título' onChange={(e) => seTitle(e.target.value)} />

        </div>
        <div className="form_control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" cols="30" rows="6" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>
          
        </div>
        <input type="submit" value='Criar Post' className="btn" />
      </form>
    </div>
  )
}

export default NewPost