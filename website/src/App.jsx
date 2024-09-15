import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';

import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Footer from './components/Footer';
import Title from './components/Title';
import ResultsPage from './pages/ResultsPage';

const App = () => (
  <Box>
    <Title />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetails />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;