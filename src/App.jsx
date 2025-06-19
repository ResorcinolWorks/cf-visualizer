import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <main className="flex-grow">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;