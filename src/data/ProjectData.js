export const projects = [
{
  "title": "Shopia Store Admin Dashboard",
  "desc": "Exclusive admin panel for managing Shopia Storee online shop with product CRUD, categories, and store information management.",
  "images": [
    "/homess.png",
    "/produkss.png",
    "/loginss.png",
    "/aboutss.png"
  ],
  "tech": ["React", "Node.js", "PostgreSQL", "Redux", "Multer", "JWT", "Express"],
  "features": [
    "Complete product management (CRUD operations)",
    "Product categories organization",
    "Store information management page",
    "Image upload handling with Multer",
    "JWT authentication for secure admin access",
    "Responsive admin interface"
  ],
  "challenges": [
    "Implemented efficient image handling with Multer",
    "Migrated from MongoDB to PostgreSQL for data storage",
    "Developed complex product-category relationships",
    "Managed file uploads and storage for product images",
    "Created responsive admin UI for all devices"
  ],
  "githubLink": "https://github.com/sopiah/ecommerce",
  "vercelLink": "https://ecommerce-sopiah.vercel.app"
},
  {
    title: "Piam Booking",
    desc: "An online hotel booking system that allows users to reserve rooms and pay directly at the hotel during check-in.",
    images: [
      "/home-booking.jpg",
      "/login-hotel.jpg",
      "/about-piam-booking.jpg",
      "/hotel.jpg"
    ],
    tech: ["React", "Styled Components", "JavaScript"],
    features: [
      "User registration and login system",
      "Homepage with popular hotel listings and recommendations",
      "Hotel search with filters by name, location, rating, facilities, and price",
      "Detailed hotel pages with descriptions, available rooms, and amenities",
      "Room booking with check-in and check-out date selection",
      "Pay at the hotel without any upfront payment",
      "My Orders page to view, edit, cancel, or add new bookings"
    ],
    challenges: [
      "Built real-time room availability checking algorithms",
      "Designed a fully responsive layout using only Styled Components",
      "Optimized search performance and filtering system",
      "Simulated offline payment logic without external payment gateways"
    ],
    githubLink: "https://github.com/sopiahpasaribu/piam-booking",
    vercelLink: "https://piam-booking.vercel.app/"
  },
  {
    title: "Wizarding World",
    desc: "A magical-themed application where users can explore potions, wizarding books, and films from the world of magic.",
    images: [
      "/home-ww.jpg",
      "/discover-ww.jpg",
      "/about-ww.jpg",
      "/potion-ww.jpg",
      "/book-ww.jpg"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Explore a variety of magical potions with their ingredients and effects",
      "Browse through a collection of wizarding books with detailed descriptions",
      "Discover wizarding-themed films with summaries and ratings",
      "Save favorite potions, books, and films to local storage",
      "Responsive interface optimized for both desktop and mobile screens"
    ],
    challenges: [
      "Integrated multiple data sources for potions, books, and films",
      "Maintained consistent design across different content types",
      "Handled dynamic UI updates without using frontend frameworks",
      "Crafted an immersive magical user experience using pure HTML, CSS, and JavaScript"
    ],
    githubLink: "https://github.com/sopiahpasaribu/SOPIAH_PSB",
    vercelLink: "https://wizarding-world-one.vercel.app/"
  },
{
  title: "🐾 PetCare",
  desc: "PetCare is a pet care service application that allows users to easily book services with a 'Book Now, Pay Later' feature. The app supports two types of users: User and Admin.",
  images: [
    "/login-petcare.jpg",
    "/home-petcare.jpg",
    "/pet-petcare.jpg",
    "/service-petcare.jpg",
    "/booking-petcare.jpg",
    "/about-petcare.jpg",
    "/admin-petcare.jpg",
    "/admin-booking-petcare.jpg"
  ],
  tech: [ "Spring Boot", "PostgreSQL", "JWT", "React", "Tailwind CSS" ],
  features: [
    "Add pets to receive services",
    "Choose services such as grooming, health consultation, vaccination, and pet boarding",
    "Book Now, Pay Later with booking status flow (PENDING → CONFIRMED → PAID)",
    "Edit user profile (name, phone number)",
    "Admin can add and manage services",
    "Admin can monitor, confirm, and update booking status (PENDING → CONFIRMED → COMPLETE → REJECT)",
    "Search & Sort feature to quickly find bookings or services"
  ],
  challenges: [
    "Implemented the 'Book Now, Pay Later' booking flow",
    "Handled role-based authentication for Users and Admins using JWT",
    "Designed a responsive UI optimized for both desktop and mobile",
    "Built a backend system that manages bookings with dynamic status updates including COMPLETE and REJECT"
  ],
  githubLink: "https://github.com/sopiahpasaribu/PETCARE"
},
{
  "title": "🏦 Cooperative System",
  "desc": "Cooperative System is a PHP and MySQL-based application with a Bootstrap interface, running on XAMPP. It is designed to help manage cooperative data such as members, savings, loans, and installments through an admin dashboard.",
  "images": [
    "/login-coop.jpg",
    "/dashboard-coop.jpg",
    "/members-coop.jpg",
    "/add-coop.jpg",
    "/kelola-coop.jpg",
    "/form-angs-coop.jpg",
     "/riwayat-angs-coop.jpg"

  ],
  "tech": ["PHP", "MySQL", "Bootstrap", "XAMPP"],
  "features": [
    "👨‍💼 Admin: Log in as admin, view admin account details, manage members, savings, loans, and installments",
    "👥 Members: Add new member data (required before savings/loans)",
    "💰 Savings: Admin can add member savings data, display savings history",
    "📄 Loans: Admin can add member loans (only for registered members)",
    "💳 Installments: Manage loan installment payments, display installment details"
  ],
  "challenges": [
    "Implementing relationships between members, savings, loans, and installments",
    "Validation so only registered members can make savings/loans",
    "Designing loan repayment flows with installment history",
    "Building a simple yet informative UI with Bootstrap"
  ],
  "githubLink": "https://github.com/sopiahpasaribu/Project-Koperasi-Kelompok5"
}


];
