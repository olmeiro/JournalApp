import React from 'react'
import { Routes, Route } from "react-router-dom";
import { JournalScreen } from '../compounents/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
  
      <Routes>

        <Route path="/auth/*" element={<AuthRouter />} />

        <Route path="/" element={<JournalScreen />} />

        <Route 
          path="*"
          element={<AuthRouter/>}
        />
        
      </Routes>
  );
};
