import React from 'react';
import { Link } from 'react-router-dom';

const infoItems = [
  {
    id: 1,
    title: "Process of obtaining a new driving license",
    icon: "🔖",
    description: "Detailed process of how to obtain a new driving license.",
    path: "/NewLicence",
  },
  {
    id: 2,
    title: "Things that are important when running",
    icon: "📑",
    description: "Important considerations while driving.",
    path: "/DrivingRules",
  },
  {
    id: 3,
    title: "Driving License Government Fees",
    icon: "🚗",
    description: "Information about government fees for driving licenses.",
    path: "https://dmt.gov.lk/index.php?option=com_content&view=article&id=85&Itemid=170&lang=en",
  },
  {
    id: 4,
    title: "Book an Appointment at the (DMT)",
    icon: "📅",
    description: "How to book an appointment at the Department of Motor Traffic (DMT).",
    path: "https://dmtappointments.dmt.gov.lk/",
  },
  {
    id: 5,
    title: "Things that are very important when driving",
    icon: "🚘",
    description: "Crucial tips for safe driving.",
    path: "/DrivingInfo",
  },
  {
    id: 6,
    title: "For applicants with special circumstances",
    icon: "📜",
    description: "Guidelines for applicants under special circumstances.",
    path: "/SpecialLicenseInfo",
  },
  {
    id: 7,
    title: "Obtaining a revenue license",
    icon: "✋",
    description: "Steps to obtain a revenue license for your vehicle.",
    path: "/RevenuLicence",
  },
  {
    id: 8,
    title: "Issuing fines for traffic violations",
    icon: "⚠️",
    description: "Details about fines for various traffic violations.",
    path: "/HighwayOffenses",
  },
  {
    id: 9,
    title: "Driving on highways",
    icon: "🛣️",
    description: "Best practices and rules for driving on highways.",
    path: "/Expressway",
  },
  {
    id: 10,
    title: "Vehicle Classes",
    icon: "🚛",
    description: "Different classes of vehicles and their licensing requirements.",
    path: "https://dmt.gov.lk/index.php?option=com_content&view=article&id=46&Itemid=163&lang=en",
  },
  {
    id: 11,
    title: "Conversion of Old Driving License to New",
    icon: "🔄",
    description: "Steps to convert an old driving license to a new one.",
    path: "/OldLicence", // Example path
  },
  {
    id: 12,
    title: "Conversion of Foreign License",
    icon: "🌍",
    description: "How to convert a foreign driving license to a local one.",
    path: "/ForeignLicence", // Example path
  },
  {
    id: 13,
    title: "Assesment",
    icon: "🧾",
    description: "How to convert a foreign driving license to a local one.",
    path: "/Assesment", // Example path
  },
];

const Information = () => {
  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='p-5 bg-white dark:bg-black w-full py-6 px-56'>
      <div className='flex justify-between items-center bg-[#023e8a] text-white p-5 rounded-lg mb-5 w-full'>
        <div>
          <h1 className='text-xl font-bold'>Information Portal</h1>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 gap-4 px-8'>
        
        {infoItems.map((item) => {
          const isExternalLink = item.path.startsWith("http");

          return isExternalLink ? (
            <div
              key={item.id}
              onClick={() => handleExternalLinkClick(item.path)}
              className='bg-white p-4 rounded-lg flex items-center shadow-xl cursor-pointer'
            >
              <span className='font-bold mr-3'>
                {item.id.toString().padStart(2, '0')}
              </span>
              <span className='mr-3 size-6'>{item.icon}</span>
              <span style={{ fontSize: '16px' }}>{item.title}</span>
            </div>
          ) : (
            
            <Link
              to={item.path}
              key={item.id}
              className='bg-white p-4 rounded-md flex items-center shadow-lg cursor-pointer'
            >
              <span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}>
                {item.id.toString().padStart(2, '0')}
              </span>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.icon}</span>
              <span style={{ fontSize: '16px' }}>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
