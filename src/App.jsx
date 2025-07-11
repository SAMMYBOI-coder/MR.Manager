import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Events from './pages/Events';
import Notes from './pages/Notes';
import TODOLIST from './pages/TODOLIST';
import Sidebar from './components/sidebar/sidebar'; 
import DarkModeToggle from './components/DarkModeToggle';
import Login from './pages/Login';
import Register from './pages/Register';
import Landingpage from './pages/Landingpage';
import ProtectedRoute from './components/auth/protectedRoutes';



function App() {
  return (
    <div className="flex">
      <Sidebar />
    
      <div className="flex-1 p-4">
        {/* Place dark mode toggle in top-right */}
        <div className="flex justify-end mb-4">
          <DarkModeToggle />
        </div>

        <Routes>
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/notes" element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          } />
          <Route path="/todo-lists" element={
            <ProtectedRoute>
              <TODOLIST/>
            </ProtectedRoute>
          } />
          <Route path="/events" element={
            <ProtectedRoute>
              <Events/>
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
