import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar w-64 bg-white border-r border-gray-200 p-6 space-y-6 h-min-screen"> {/* Added 'sidebar' class */}
     <div><Link className="text-xl font-bold" to ='/'><h1 >📝 Mr.Manager</h1></Link></div> 
      <nav className="space-y-3 text-sm text-gray-700">
        
        <div>
          <Link to='/'>
          
          🏠 Home
          
          </Link>
          
          </div>

        <div>
          <Link to='/notes'>
          
          🗒️ Notes
          
          </Link>
          
          </div>
    
      
      <div>
          <Link to='/events'>
          
          📅 Events
          
          </Link>
          
          </div>
          <div>
          <Link to='/todo-lists'>
          
           ✅ To-Do Lists
          
          </Link>
          
          </div>
          <div>
          <Link to='/login'>
          
          👤 Login
          
          </Link>
          
          </div>
      
      </nav>
    </div>
  );
}