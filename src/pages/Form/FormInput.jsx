import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormInput = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    body: ''
  });

  // Функция для обработки изменений в поле ввода формы
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Функция для обработки отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then((response) => {
        setPosts((prevState) => [...prevState, response.data]);
        setNewPost({ title: '', body: '' });
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={newPost.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormInput;
