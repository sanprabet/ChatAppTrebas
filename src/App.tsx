import React from 'react';

import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'

import './styles/app.scss'

import Header from './components/header';
import Login from './containers/login';
import Chat from './containers/chat';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/login" element={<Login  />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
