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
    name: 'Beta - 11.0.A',
    version: 'Beta',
    dateTime: 'Wednesday, 24 July 24 20:16 PM',
    title: 'fixing bugs, enhancing stability, and improving performance.',
    what: 'fixing bugs, enhancing stability, and improving performance.',
    why: '',
    performance: 'Bug occurrence reduced by 90%.',
  },
  {
    id: 2,
    name: 'Beta - 10.0.A',
    version: 'Beta',
    dateTime: 'Thursday, 20 June 24 02:30 PM',
    title: 'UI Design Fully Improved and New Pages Added',
    what: 'The entire user interface has been redesigned to enhance the user experience. New pages have been added to the website, including a revamped Blog system and a Hot Deals section with personalized recommendations.',
    why: 'We aimed to significantly improve the overall performance and usability of the website. This update provides users with a more intuitive and visually appealing interface, along with valuable new features.',
    performance: 'This version offers a 90% faster response time compared to the previous version, Stable - 09.8.A.',
  },
  {
    id: 3,
    name: 'Previous Version',
    version: 'Stable - 09.8.A',
    dateTime: 'Monday, 4 March 24 02:30 PM',
    title: 'Improved User Authentication and Security',
    what: 'This update focused on fixing bugs, enhancing stability, and improving performance.',
    why: 'The improvements were necessary as the website occasionally failed to load on older web browsers, impacting user experience.',
    performance: 'Bug occurrence reduced by 90%.',
  },
  // Add more updates as needed
];

const UpdateHub: React.FC = () => {
  useEffect(() => {
    document.title = 'Update Hub | SpliXtech';
  }, []);
  const handleClickDeveloper = () => {
    // Handle click action for developer link
    window.open('https://yourdeveloperprofilelink.com', '_blank');
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
          Developer: Akshar Patel
        </p>
      </div>
      </div>
    </div>
  );
};

export default UpdateHub;
