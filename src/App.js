import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, Profile } from './components';
import './App.css';
import { HomeLayout } from './layouts';
import { Rooms } from './components/rooms';
import { Messages } from './components/messages';
import { Todo } from './components/todo/Todo';

function App() {
 
  return (
      <div className="App">
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<Rooms />}>
              <Route path="/rooms/:roomId" element={<Messages />}></Route>
          </Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </HomeLayout>
      </div>
  );
}

export default App;
