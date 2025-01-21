import project1 from '@/assets/images/project1.jpg';
import project2 from '@/assets/images/project2.jpg';
import project3 from '@/assets/images/project3.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'EasyBuy',
    type: 'A Multi Vendor E-Commerce Platform',
    coverImage: project1,
    overview:
      'EasyBuy serves as a platform where multiple vendors can register, showcase, and sell their products to customers. It supports diverse product categories, enabling users to shop from various sellers in one place. The platform includes features for vendor management, product listings and secure payment processing.',
    techTack: ['React', 'TypeScript', 'Tailwind', 'React Router'],
    links: [
      'https://github.com/aburaihan8715/asgmt9_multi_vendor_e_commerce_ui',
      'https://asgmt9-multi-vendor-e-commerce.netlify.app',
      'https://github.com/aburaihan8715/asgmt9_multi_vendor_e_commerce_api',
    ],
  },
  {
    id: 2,
    name: 'GardenSage',
    type: 'A Gardening Tips and Advices Platform',
    coverImage: project2,
    overview:
      'GardenSage provides valuable insights, practical tips, and expert guidance for gardening enthusiasts of all levels. It covers topics like plant care, seasonal gardening, pest control, and landscaping ideas to help users create thriving gardens. The platform fosters a community of gardeners through articles, tutorials, and interactive forums.',
    techTack: ['Next', 'TypeScript', 'Tailwind', 'Redux', 'Query'],
    links: [
      'https://github.com/aburaihan8715/asgmt6_gardening_tips_and_advice_client',
      'https://asgmt6-gardening-tips-and-advice-client.vercel.app',
      'https://github.com/aburaihan8715/asgmt6_gardening_tips_and_advice_api',
    ],
  },
  {
    id: 3,
    name: 'MeetMe',
    type: 'A Meeting Room Booking Platform',
    coverImage: project3,
    overview:
      'MeetMe simplifies the process of reserving meeting spaces for businesses and individuals. It allows users to search, book, and manage meeting rooms based on location, availability, and amenities. The platform offers features like real-time availability, secure payments, and detailed booking summaries for a seamless experience.',
    techTack: ['React', 'TypeScript', 'Redux', 'Express', 'MongoDB'],
    links: [
      'https://github.com/aburaihan8715/asgmt5_meeting_room_booking_client',
      'https://meeting-room-booking-client.netlify.app',
      'https://github.com/aburaihan8715/asgmt3_meeting_room_booking_api',
    ],
  },
];
