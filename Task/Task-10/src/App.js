import React from 'react';
import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <main>
        <AddPost />
        <PostList />
      </main>
    </div>
  );
}

export default App;
