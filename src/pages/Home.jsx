import HeaderGreeting from "../components/home/headerGreeting";
import QuickActions from '../components/home/quickAction';
import Folders from '../components/home/folders';
import Tasks from "../components/home/tasks";
import RecentNotes from "../components/home/recentNotes";
import { useEffect } from 'react';

export default function Home() {
  // Initialize dark mode state properly
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const html = document.documentElement;
    
    // Only apply dark class if explicitly saved as true
    if (savedMode === 'true') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark'); // Force remove if not dark mode
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex dark:bg-gray-900 dark:text-white">
      <div className="flex-1 p-8 space-y-6">
        <HeaderGreeting />
        <QuickActions />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Folders />
          <Tasks />
        </div>
        <RecentNotes />
      </div>
    </div>
  );
}