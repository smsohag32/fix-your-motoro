const workshops = [
    {
      id: 1,
      name: "Driveline Auto ",
      image: "https://i.ibb.co/0J1B3QN/image.png",
      address: "Khulna",
      email: "info@Driveline.com",
      phone: "123-456-7890",
      description: "Driveline Auto is your go-to destination for motor servicing expertise. Our team's passion for engines translates into reliable repairs and maintenance that extend the life of your vehicle.",
      
      services: [ 
        { 
        
        title: "Engine Tune-Up",
        description: "Enhance your vehicle's performance with a thorough engine tune-up. Our skilled technicians optimize fuel efficiency and power.",
        rate: "$99.99",
        rating: 4.8,
        technicianName: "Amelia Taylor",
        t_image: "https://i.ibb.co/mHFd03V/image.png"
      },
      {
        title: "Brake System Inspection",
        description: "Ensure your safety on the road by getting your brake system inspected. Our expert technicians identify issues and provide effective solutions.",
        rate: "$49.99",
      rating: 4.6,
        technicianName: "Elijah Martinez",
        t_image: "https://i.ibb.co/8bgG5Sm/image.png"
      }],
      products: [
        {
          title: "Spark Plugs",
          description: "Premium spark plugs for efficient combustion and engine power.",
          rate: "$12.99",
          image: "https://i.ibb.co/Xpqdg3f/image.png"
        },
        {
          title: "Oil Filters",
          description: "Effective oil filters to keep the engine oil clean and free from debris.",
          rate: "$8.99",
          image: "https://i.ibb.co/VYDKrh5/image.png"
        },
        // Add more products as needed...
      ],
      workshopCode: "TE2023",
      rating: 4.5
    },
    {
      id: 2,
      name: "GearPro Vehicle Clinic",
      image: "https://i.ibb.co/mC9xHF1/image.png",
      address: "Dhaka",
      email: "info@GearPro.com",
      phone: "987-654-3210",
      description: "Precision Drive Services is dedicated to maintaining the precision of your vehicle's performance. From meticulous inspections to efficient repairs, we deliver excellence with every service.",
  
      services: [ {
        title: "Engine Tune-Up",
        description: "Enhance your vehicle's performance with a thorough engine tune-up. Our skilled technicians optimize fuel efficiency and power.",
        rate: "$99.99",
        rating: 4.8,
        technicianName: " Charlotte Garcia",
        t_image: "https://i.ibb.co/yy4YCV6/image.png"
      },
      {
        title: "Brake System Inspection",
        description: "Ensure your safety on the road by getting your brake system inspected. Our expert technicians identify issues and provide effective solutions.",
        rate: "$49.99",
      rating: 4.6,
        technicianName: " James Wilson",
        t_image: "https://i.ibb.co/KjdsqfY/image.png"
      }],
      products: [
        {
          title: "Spark Plugs",
          description: "Premium spark plugs for efficient combustion and engine power.",
          rate: "$12.99",
          image: "https://i.ibb.co/Xpqdg3f/image.png"
        },
        {
          title: "Oil Filters",
          description: "Effective oil filters to keep the engine oil clean and free from debris.",
          rate: "$8.99",
          image: "https://i.ibb.co/VYDKrh5/image.png"
        },
        // Add more products as needed...
      ],
      workshopCode: "ACF2023",
      rating: 4.2
    },
    {
      id: 3,
      name: "EngineRev ",
      image: "https://i.ibb.co/8cKzjny/image.png",
      address: "Chittagong",
      email: "info@EngineRev.com",
      phone: "555-123-4567",
      description: "At GearShift Garage, we specialize in providing expert motor servicing and repairs. Our technicians understand the intricacies of every engine, offering reliable solutions for a smooth ride.",
      services: [ {
        title: "Engine Tune-Up",
        description: "Enhance your vehicle's performance with a thorough engine tune-up. Our skilled technicians optimize fuel efficiency and power.",
        rate: "$99.99",
        rating: 4.8,
        technicianName: "Isabella Lee",
        t_image: "https://i.ibb.co/HPmpK8j/image.png"
      },
      {
        title: "Brake System Inspection",
        description: "Ensure your safety on the road by getting your brake system inspected. Our expert technicians identify issues and provide effective solutions.",
        rate: "$49.99",
      rating: 4.6,
        technicianName: "Aiden Anderson",
        t_image: "https://i.ibb.co/GFYjnbh/image.png"
      }],
      products: [
        {
          title: "Spark Plugs",
          description: "Premium spark plugs for efficient combustion and engine power.",
          rate: "$12.99",
          image: "https://i.ibb.co/Xpqdg3f/image.png"
        },
        {
          title: "Oil Filters",
          description: "Effective oil filters to keep the engine oil clean and free from debris.",
          rate: "$8.99",
          image: "https://i.ibb.co/VYDKrh5/image.png"
        },
        // Add more products as needed...
      ],
      workshopCode: "CMC2023",
      rating: 4.8
    },
    {
      id: 4,
      name: "Precision Motors Workshop",
      image: "https://i.ibb.co/0r70Nmx/image.png",
      address: "Sylhet",
      email: "info@Precision.com",
      phone: "777-888-9999",
      description: " Experience top-notch motor servicing and tune-up services with TurboTune Motors. From engine diagnostics to oil changes, we're committed to keeping your vehicle in peak condition.",
    
      services: [
        {
          title: "Engine Tune-Up",
          description: "Enhance your vehicle's performance with a thorough engine tune-up. Our skilled technicians optimize fuel efficiency and power.",
          rate: "$99.99",
          rating: 4.8,
          technicianName: "Mia Harris",
          t_image: "https://i.ibb.co/0nG8YrC/image.png   "
        },
        {
          title: "Brake System Inspection",
          description: "Ensure your safety on the road by getting your brake system inspected. Our expert technicians identify issues and provide effective solutions.",
          rate: "$49.99",
        rating: 4.6,
          technicianName: "Noah Clark",
          t_image: "https://i.ibb.co/Fhd12tp/image.png"
        }
      ],
      products:  [
        {
          title: "Synthetic Engine Oil",
          description: "High-quality synthetic engine oil for better performance and protection.",
          rate: "$39.99",
          image: "https://i.ibb.co/s2LmWNR/image.png"
        },
        {
          title: "Air Filters",
          description: "Replacement air filters to maintain clean air intake for engines.",
          rate: "$19.99",
          image: "https://i.ibb.co/VYDKrh5/image.png"
        },
     
      ],
      workshopCode: "FW2023",
      rating: 4.6
    },
    {
      id: 5,
      name: "AutoCare",
      image: "https://i.ibb.co/D1nspVF/image.png",
      address: "Barishal",
      email: "info@AutoCare.com",
      phone: "222-333-4444",
      description: "Your trusted partner for comprehensive motor servicing and maintenance solutions. With a team of skilled technicians and cutting-edge equipment, we ensure your vehicle runs at its best.",
      services: [ 
        {
        title: "Engine Tune-Up",
        description: "Enhance your vehicle's performance with a thorough engine tune-up. Our skilled technicians optimize fuel efficiency and power.",
        rate: "$99.99",
        rating: 4.8,
        technicianName: "Alex Johnson",
        t_image: "https://i.ibb.co/djf6hGP/image.png"
      },
      {
        title: "Brake System Inspection",
        description: "Ensure your safety on the road by getting your brake system inspected. Our expert technicians identify issues and provide effective solutions.",
        rate: "$49.99",
      rating: 4.6,
        technicianName: "Emily Davis",
        t_image: "https://i.ibb.co/1rHCkt9/image.png"
      }
    ],
      products: [
        {
          title: "Spark Plugs",
          description: "Premium spark plugs for efficient combustion and engine power.",
          rate: "$12.99",
          image: "https://i.ibb.co/Xpqdg3f/image.png"
        },
        {
          title: "Oil Filters",
          description: "Effective oil filters to keep the engine oil clean and free from debris.",
          rate: "$8.99",
          image: "https://i.ibb.co/VYDKrh5/image.png"
        },
        {
          title: "Fuel Additives",
          description: "Fuel additives to improve fuel efficiency and engine performance.",
          rate: "$9.99",
          image: "https://i.ibb.co/cvrPQ4M/image.png"
        }
        // Add more products as needed...
      ],
      workshopCode: "PS2023",
      rating: 4.4
    }
  ];
  