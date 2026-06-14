const projects = [
{
  title: "888 Market",
  src: "888.png",
  role: "Full-Stack Developer",
  desc: "One of Dubai's major e-commerce platforms with a complete admin side; I developed the full-stack using Supabase and React.",
  description: `
    <p><strong>888 Market</strong> is one of Dubai's largest e-commerce platforms, designed to provide a smooth shopping experience for customers while offering powerful management tools for administrators. As a Full-Stack Developer, I worked on both the customer-facing platform and the admin side to ensure scalability, performance, and usability.</p>
    <p><strong>Using 888 Market, users can:</strong></p>
    <ol>
      <li>Browse and filter thousands of products with advanced search tools.</li>
      <li>Create secure accounts and manage their shopping history.</li>
      <li>Track orders in real-time with instant status updates.</li>
      <li>Make secure payments integrated through APIs.</li>
      <li>Receive personalized recommendations and deals.</li>
    </ol>
    <p><strong>Admins can:</strong></p>
    <ul>
      <li>Manage products, categories, and inventory in real-time.</li>
      <li>Track and process customer orders efficiently.</li>
      <li>Oversee user accounts, roles, and permissions.</li>
      <li>View sales analytics and performance metrics.</li>
    </ul>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Built the frontend with <strong>React</strong> and integrated Supabase for authentication and database management.</li>
      <li>Developed the <strong>admin dashboard</strong> for product, order, and user management.</li>
      <li>Implemented secure API integrations for payments and logistics.</li>
      <li>Optimized UI/UX for responsive shopping across desktop and mobile devices.</li>
      <li>Collaborated with a team to ensure scalability and clean architecture.</li>
    </ol>
  `,
  color: "#0B2C61",
  tech: "React, Supabase, Tailwind CSS, React Query, shadcn/ui",
  slug: "888",
  url: "https://eth-market-dev.vercel.app/",
},
{
  title: "Emawas",
  src: "emawa.png",
  role: "Full-Stack Developer",
  desc: "One of Ethiopia's largest online shopping platforms with warehouse management; I developed the responsive web frontend and mobile features.",
  description: `
    <p><strong>Emawas</strong> is one of Ethiopia's biggest online shopping platforms, connecting thousands of customers with a wide range of products. It also includes a powerful admin side for warehouse and order management.</p>
    <p><strong>For customers, the platform offers:</strong></p>
    <ol>
      <li>Easy browsing and product discovery with advanced filters.</li>
      <li>Secure account management and order tracking.</li>
      <li>Responsive design for shopping on any device.</li>
      <li>Fast-loading pages to ensure a smooth experience.</li>
    </ol>
    <p><strong>For admins:</strong></p>
    <ul>
      <li>Warehouse and inventory management dashboards.</li>
      <li>Order management and tracking tools.</li>
      <li>Real-time product updates through API integration.</li>
      <li>Data-driven insights to improve operations.</li>
    </ul>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Developed and maintained complex mobile features for a high-traffic e-commerce platform.</li>
      <li>Architected scalable product browsing systems and multi-layered filtering mechanisms.</li>
      <li>Implemented end-to-end order management workflows.</li>
      <li>Collaborated with backend engineers and product managers within Agile sprint cycles.</li>
    </ol>
  `,
  color: "#B02020",
  tech: "React, React Native, Tailwind CSS, Redux, React Query",
  slug: "emawa",
  url: "https://emawas.com/",
},
{
  title: "Eth Delivery",
  src: "eth.png",
  role: "Frontend Developer",
  desc: "A leading Dubai online store and delivery platform; I built the frontend for both admin and user dashboards.",
  description: `
    <p><strong>Eth Delivery</strong> is one of Dubai's largest e-commerce and delivery service platforms, offering customers the ability to shop online while also ensuring reliable delivery management for businesses.</p>
    <p><strong>Customer Features:</strong></p>
    <ol>
      <li>Shop from a large catalog with intuitive search and filters.</li>
      <li>Track orders in real-time with live delivery status updates.</li>
      <li>Access personalized dashboards for managing profiles and orders.</li>
      <li>Secure checkout and payment options integrated via APIs.</li>
    </ol>
    <p><strong>Admin Features:</strong></p>
    <ul>
      <li>Comprehensive dashboard for managing orders and deliveries.</li>
      <li>Tools to oversee inventory, shipping, and customer accounts.</li>
      <li>Real-time analytics for sales and logistics performance.</li>
      <li>Multi-role support for admin and delivery staff.</li>
    </ul>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Developed the frontend for both customer and admin interfaces using <strong>React</strong>.</li>
      <li>Created responsive layouts optimized for all devices.</li>
      <li>Integrated real-time API connections for order tracking.</li>
      <li>Improved the shopping and delivery flow for better usability.</li>
      <li>Ensured scalability with reusable, modular components.</li>
    </ol>
  `,
  color: "#0A3D62",
  tech: "React, Tailwind CSS, API Integration",
  slug: "eth",
  url: "https://www.ethdelivery.net/",
},
{
  title: "Selam School",
  src: "selam.png",
  role: "Frontend Developer",
  desc: "An e-learning platform teaching programming to students; I developed interactive and responsive student and admin interfaces.",
  description: `
    <p><strong>Selam School</strong> is a modern e-learning platform designed to teach programming to students through interactive courses, assignments, and real-time progress tracking.</p>
    <p><strong>Student Features:</strong></p>
    <ol>
      <li>Interactive dashboards with courses, lessons, and assignments.</li>
      <li>Progress tracking with real-time updates and analytics.</li>
      <li>Responsive learning environment accessible on all devices.</li>
      <li>Engaging UI/UX for a smooth learning experience.</li>
    </ol>
    <p><strong>Admin Features:</strong></p>
    <ul>
      <li>Course management system for adding and editing lessons.</li>
      <li>Student management with performance tracking tools.</li>
      <li>Analytics dashboards to monitor learning outcomes.</li>
      <li>Integration with backend APIs for data synchronization.</li>
    </ul>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Built the frontend with <strong>React.js</strong> and <strong>Next.js</strong>.</li>
      <li>Implemented state management with React Query/Redux Toolkit.</li>
      <li>Created interactive UI components using Tailwind CSS.</li>
      <li>Integrated APIs for courses, lessons, and student progress.</li>
      <li>Optimized the platform for accessibility and smooth performance.</li>
    </ol>
  `,
  color: "#A68BC1",
  tech: "Next.js, React.js, Tailwind CSS, React Query",
  slug: "selam",
  url: "https://selamschool.com/",
},
{
  title: "Smart Beacon Advertisement",
  src: "beacon.png",
  role: "Frontend Developer",
  desc: "A proximity-based advertising solution leveraging beacon technology to deliver targeted ads to nearby users.",
  description: `
    <p><strong>Smart Beacon Advertisement</strong> is a proximity-based advertising platform that allows businesses to deliver targeted promotions to customers within a certain range using beacon devices. The platform combines real-time location tracking and user-friendly dashboards for advertisers to manage campaigns efficiently.</p>
    <p><strong>Key Features for Users:</strong></p>
    <ol>
      <li>Receive targeted notifications when near a beacon-enabled location.</li>
      <li>Interact with promotional content in real-time.</li>
      <li>View campaign details and offers seamlessly.</li>
    </ol>
    <p><strong>Key Features for Admins:</strong></p>
    <ul>
      <li>Create, schedule, and manage proximity-based ad campaigns.</li>
      <li>Monitor campaign performance through analytics dashboards.</li>
      <li>Manage beacons and associated locations effectively.</li>
    </ul>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Frontend development with <strong>React</strong>, <strong>Redux</strong>, and <strong>Tailwind CSS</strong>.</li>
      <li>Designing responsive dashboards for both users and admins.</li>
      <li>Integrating APIs for real-time data and notifications.</li>
      <li>Ensuring accessibility, usability, and performance optimization.</li>
      <li>Collaborating with backend developers to support beacon data management.</li>
    </ol>
  `,
  color: "#1E3A8A",
  tech: "React, Redux, Tailwind CSS, WebSocket",
  slug: "beacon",
  url: "https://beacon-admin-zeta.vercel.app/",
},
{
  title: "Boingo AI",
  src: "boingo.png",
  role: "Senior Frontend Developer",
  desc: "An AI-powered real estate platform hosting over 44,000 property listings; I spearheaded frontend development for responsive, high-performance UI components.",
  description: `
    <p><strong>Boingo AI</strong> is a sophisticated AI-powered real estate platform that hosts over 44,000 property listings. The platform leverages artificial intelligence to enhance property discovery and streamline the real estate experience.</p>
    <p><strong>Key Features:</strong></p>
    <ol>
      <li>AI-powered property search and intelligent recommendations.</li>
      <li>Responsive, high-performance UI for efficient property discovery.</li>
      <li>Seamless listing management and improved navigation.</li>
      <li>Intelligent listing validation for data accuracy.</li>
    </ol>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Spearheaded the development of core frontend features ensuring a smooth, visually appealing interface.</li>
      <li>Engineered responsive, high-performance UI components for property discovery and listing management.</li>
      <li>Collaborated with AI and backend teams to implement intelligent listing validation systems.</li>
      <li>Optimized performance across large datasets for both web and mobile platforms.</li>
    </ol>
  `,
  color: "#0F766E",
  tech: "React, Next.js, React Native, Tailwind CSS, TypeScript",
  slug: "boingo",
  url: "",
},
{
  title: "BrainBite",
  src: "brain.png",
  role: "Full-Stack Developer",
  desc: "An AI-powered personalized learning platform with 1K–2K+ users and 50+ AI mentor personas; built fullstack features for adaptive tutoring.",
  description: `
    <p><strong>BrainBite</strong> is an AI-powered edtech platform that delivers personalized learning experiences. With 1,000–2,000+ total users and ~800–1,200 monthly active users, the platform achieved 100%+ MoM growth through innovative features.</p>
    <p><strong>Key Features:</strong></p>
    <ol>
      <li>AI-powered personalized learning paths tailored to each student.</li>
      <li>1:1 conversational AI tutoring with 50+ AI mentor personas.</li>
      <li>Real-time adaptive learning reducing student drop-off.</li>
      <li>Scalable SaaS architecture serving a global team across 4 continents.</li>
    </ol>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Built and scaled AI-powered personalized learning features for an edtech platform.</li>
      <li>Developed fullstack systems for 1:1 conversational AI tutoring and 50+ AI mentor personas.</li>
      <li>Improved student engagement by ~30–40% through real-time adaptive learning.</li>
      <li>Engineered scalable SaaS architecture, improving performance by ~40%.</li>
    </ol>
  `,
  color: "#7C3AED",
  tech: "Node.js, Express.js, NestJS, PostgreSQL, MongoDB, Docker, AWS",
  slug: "brainbite",
  url: "",
},
{
  title: "Hulucar",
  src: "hulucar.png",
  role: "Full-Stack Developer",
  desc: "A car platform delivering seamless vehicle management and user experiences.",
  description: `
    <p><strong>Hulucar</strong> is a platform designed to streamline vehicle management and provide users with a seamless experience for car-related services.</p>
    <p><strong>Key Features:</strong></p>
    <ol>
      <li>Intuitive vehicle listing and discovery tools.</li>
      <li>User-friendly dashboards for managing listings and inquiries.</li>
      <li>Real-time updates and notifications.</li>
      <li>Responsive design for all devices.</li>
    </ol>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Developed fullstack features for the platform.</li>
      <li>Built responsive and performant frontend components.</li>
      <li>Integrated backend APIs for data management.</li>
      <li>Ensured scalability and clean architecture.</li>
    </ol>
  `,
  color: "#DC2626",
  tech: "React, Node.js, PostgreSQL, Tailwind CSS",
  slug: "hulucar",
  url: "",
},
{
  title: "Sunshine",
  src: "sunshine.png",
  role: "Full-Stack Developer",
  desc: "A digital platform designed to streamline services and enhance user engagement.",
  description: `
    <p><strong>Sunshine</strong> is a digital platform built to streamline services and deliver an engaging user experience.</p>
    <p><strong>Key Features:</strong></p>
    <ol>
      <li>Modern, responsive interface for all users.</li>
      <li>Efficient service management and workflow automation.</li>
      <li>Real-time updates and analytics.</li>
      <li>Secure authentication and data management.</li>
    </ol>
    <p><strong>My Role & Contributions:</strong></p>
    <ol>
      <li>Developed the fullstack application from the ground up.</li>
      <li>Built responsive UI components with modern frameworks.</li>
      <li>Designed and implemented backend APIs.</li>
      <li>Deployed and managed infrastructure for production.</li>
    </ol>
  `,
  color: "#F59E0B",
  tech: "React, Node.js, MongoDB, Docker",
  slug: "sunshine",
  url: "",
},
];

export default projects;
