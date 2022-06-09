import React, { useState } from 'react';

import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'

import './styles/app.scss'

import Header from './components/header';
import Login from './containers/login';
import Chat from './containers/chat';

import PrivateRoute from './context/PrivateRoute';

function App() {
  const [user, setUser] = useState("")

  return (
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <Routes>
            <Route path="/chat" element={<PrivateRoute user={user} />}>
              <Route path="/chat" element={<Chat />} />
            </Route>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
