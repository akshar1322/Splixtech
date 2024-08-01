'use client';
import React ,{useEffect} from 'react';
import Headerimage from '@/components/ui/Headerimage';

interface Update {
  id: number;
  name: string;
  version?: string;
  dateTime: string;
  title: string;
  what: string;
  why: string;
  performance: string;
}

const updates: Update[] = [
  {
    id: 1,
    name: 'Beta - 1.0.A',
    version: 'Beta',
    dateTime: 'Friday, 2 Agust 24 04:10 am',
    title: 'Wllcome to the first beta release of the app',
    what: '',
    why: '',
    performance: '',
  },
  
     // Add more updates as needed
];

const UpdateHub: React.FC = () => {
  useEffect(() => {
    document.title = 'Update Hub | SpliXtech';
  }, []);
  const handleClickDeveloper = () => {
    // Handle click action for developer link
    window.open('https://splixtech.vercel.app/', '_blank');
  };

  return (
    
    <div className="bg-black text-white">
      <br />
      <Headerimage 
        backgroundImageUrl="https://images.unsplash.com/photo-1627637819794-fba32f82be16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Release Updates" />
     <div className="container mx-auto  p-8 min-h-screen rounded-lg">
      
      {updates.map((update) => (
        <div key={update.id} className="bg-[#282828] p-6 mb-4 rounded-lg">
          <div className="flex justify-between items-center p-3">
            <div>
              <p className="text-2xl font-bold mb-2">{update.name}</p>
              <p className="text-sm mb-2">{update.dateTime}</p>
              <p className="text-xl font-semibold mb-2">{update.title}</p>
              <p className="text-sm mb-2">{update.what}</p>
              <p className="text-sm mb-2">{update.why}</p>
              <p className="text-sm mb-2">Performance: {update.performance}</p>
            </div>
          </div>
        </div>
      ))}
      <div>
        <p className="cursor-pointer hover:text-blue-300" onClick={handleClickDeveloper}>
          Developer: Splix Tech
        </p>
      </div>
      </div>
    </div>
  );
};

export default UpdateHub;
