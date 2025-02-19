import Team1 from "../team1.jpg";
import Team2 from "../team2.jpg";
import Team3 from "../team3.jpg";
import Team4 from "../team4.jpg";
import Team5 from "../team5.jpg";
import Team6 from "../team6.jpg";
import Testimonial1 from "../testimonial1.jpg";
import Testimonial2 from "../testimonial2.jpg";
import Testimonial3 from "../testimonial3.jpg";
import Blog1 from '../blog1.jpg'
import Blog3 from '../blog3.jpg'
import Blog2 from '../blog2.jpg'

import {
  faCalendarCheck,
  faStethoscope,
  faSyringe,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
export const serviceData = [
  {
    id: 1,
    name: "Wellness Checkups",
    icon: "fa fa-heartbeat",
    doctors: 30,
  },
  {
    id: 2,
    name: "Emergency Care",
    icon: "fa fa-ambulance",
    doctors: 20,
  },
  {
    id: 3,
    name: "Vaccination Services",
    icon: "fa fa-syringe",
    doctors: 25,
  },
  {
    id: 4,
    name: "Dental Care",
    icon: "fa fa-tooth",
    doctors: 19,
  },
  {
    id: 5,
    name: "Grooming and Bathing",
    icon: "fa fa-paw",
    doctors: 21,
  },
  {
    id: 6,
    name: "Pet Nutrition Consultations",
    icon: "fa fa-apple-alt",
    doctors: 15,
  },
  {
    id: 7,
    name: "Spaying and Neutering",
    icon: "fa fa-genderless",
    doctors: 12,
  },
  {
    id: 8,
    name: "X-Ray and Diagnostics",
    icon: "fa fa-x-ray",
    doctors: 20,
  },
];

// veterinaryData.js

export const veterinaryDetails = [
    {
      id: 1,
      name: "Dr. Emily Parker",
      photo: Team1, // Replace with real photo URL
      specialty: "Veterinary Surgeon",
      bio: "Dr. Emily Parker is an experienced veterinary surgeon specializing in complex surgeries and treatments for pets.",
      experience: "10 years",
      fee: "$120 per consultation",
    },
    {
      id: 2,
      name: "Dr. John Smith",
      photo: Team2, // Replace with real photo URL
      specialty: "Pet Dermatology",
      bio: "Dr. John Smith is a skilled pet dermatologist focusing on skin diseases and allergies in pets.",
      experience: "8 years",
      fee: "$100 per consultation",
    },
    {
      id: 3,
      name: "Dr. Olivia Brown",
      photo: Team3, // Replace with real photo URL
      specialty: "Emergency Care",
      bio: "Dr. Olivia Brown provides emergency medical care for pets in critical conditions.",
      experience: "5 years",
      fee: "$150 per consultation",
    },
    {
      id: 4,
      name: "Dr. Daniel White",
      photo: Team4, // Replace with real photo URL
      specialty: "Animal Dentistry",
      bio: "Dr. Daniel White is an expert in animal dentistry, offering treatments for dental health and hygiene.",
      experience: "7 years",
      fee: "$90 per consultation",
    },
    {
      id: 5,
      name: "Dr. Sarah Johnson",
      photo: Team5, // Replace with real photo URL
      specialty: "Internal Medicine",
      bio: "Dr. Sarah Johnson specializes in internal medicine, focusing on diagnosing and treating internal conditions of pets.",
      experience: "12 years",
      fee: "$110 per consultation",
    },
    {
      id: 6,
      name: "Dr. Robert Lee",
      photo: Team6, // Replace with real photo URL
      specialty: "Orthopedics",
      bio: "Dr. Robert Lee is an orthopedic specialist who treats bone and joint issues in animals.",
      experience: "9 years",
      fee: "$130 per consultation",
    },
    // {
    //   id: 7,
    //   name: 'Dr. Ava Miller',
    //   photo: 'https://via.placeholder.com/150', // Replace with real photo URL
    //   specialty: 'Veterinary Ophthalmology',
    //   bio: 'Dr. Ava Miller specializes in eye care for animals, including surgeries and treatments for vision-related problems.',
    //   experience: '6 years',
    //   fee: '$140 per consultation',
    // },
    // {
    //   id: 8,
    //   name: 'Dr. James Taylor',
    //   photo: 'https://via.placeholder.com/150', // Replace with real photo URL
    //   specialty: 'Internal Medicine',
    //   bio: 'Dr. James Taylor is a highly skilled internal medicine vet with a focus on chronic illnesses and treatments.',
    //   experience: '15 years',
    //   fee: '$125 per consultation',
    // },
    // {
    //   id: 9,
    //   name: 'Dr. Laura Martinez',
    //   photo: 'https://via.placeholder.com/150', // Replace with real photo URL
    //   specialty: 'Exotic Pet Care',
    //   bio: 'Dr. Laura Martinez specializes in the care of exotic pets, including reptiles, birds, and small mammals.',
    //   experience: '4 years',
    //   fee: '$100 per consultation',
    // },
    // {
    //   id: 10,
    //   name: 'Dr. William Harris',
    //   photo: 'https://via.placeholder.com/150', // Replace with real photo URL
    //   specialty: 'Surgery',
    //   bio: 'Dr. William Harris is a surgical specialist who performs a variety of complex surgeries for pets.',
    //   experience: '11 years',
    //   fee: '$150 per consultation',
    // },
  ];
  

export const workProcess = [
  {
    id: 1,
    title: "Appointment Booking",
    description:
      "Schedule an appointment online or via phone for your pet’s checkup.",
    icon: faCalendarCheck, // Using FontAwesome imported icons
  },
  {
    id: 2,
    title: "Initial Examination",
    description:
      "A vet conducts a thorough examination to diagnose any health concerns.",
    icon: faStethoscope,
  },
  {
    id: 3,
    title: "Treatment & Care",
    description:
      "Necessary treatments, vaccinations, or procedures are administered.",
    icon: faSyringe,
  },
  {
    id: 4,
    title: "Follow-up & Advice",
    description:
      "Receive post-care instructions and schedule follow-up visits if needed.",
    icon: faNotesMedical,
  },
];
export const vetFAQs = [
  {
    question: "What should I bring to my pet’s first appointment?",
    answer:
      "For your pet’s first visit, it's helpful to bring their medical history, including vaccination records and any current medications. If possible, bring a stool sample for a parasite check. Also, feel free to ask any questions about your pet’s health, behavior, or diet so that we can provide the best advice.",
  },
  {
    question: "How can I tell if my pet is sick?",
    answer:
      "Pets often hide their symptoms, but some common signs that your pet may be unwell include changes in appetite, unusual lethargy, vomiting, diarrhea, difficulty breathing, or sudden behavioral changes. If you notice any of these signs, it's best to schedule a visit to the vet for an evaluation.",
  },
  {
    question: "Do I need to vaccinate my pet every year?",
    answer:
      "Annual vaccinations are recommended for most pets to protect them from contagious diseases. Some vaccines may require boosters more frequently, while others can be administered every few years. Our vets can provide personalized vaccination schedules based on your pet’s health, age, and lifestyle.",
  },
];

export const testimonials = [
  {
    id: 1,
    rating: 5,
    comment:
      "I had a wonderful experience at the clinic! The staff was so friendly, and my pet received excellent care. Highly recommended!",
    photo: Testimonial1, // Example photo URL
    name: "John Doe",
    location: "New York, USA",
  },
  {
    id: 2,
    rating: 4,
    comment:
      "The vet was very knowledgeable and thorough during the consultation. My dog is feeling much better now!",
    photo: Testimonial2, // Example photo URL
    name: "Jane Smith",
    location: "Los Angeles, USA",
  },
  {
    id: 3,
    rating: 5,
    comment:
      "Excellent care and attention! The team here went above and beyond to help my cat, and the follow-up was great too.",
    photo: Testimonial3, // Example photo URL
    name: "David Lee",
    location: "San Francisco, USA",
  },
  {
    id: 4,
    rating: 4,
    comment:
      "Great service! The staff was kind, and the clinic was clean and well-organized. Would definitely recommend to other pet owners.",
    photo: Testimonial1, // Example photo URL
    name: "Emily White",
    location: "Chicago, USA",
  },
  {
    id: 5,
    rating: 5,
    comment:
      "Amazing experience! The vet took extra time to explain everything and make sure my pet felt comfortable. The team is fantastic!",
    photo: Testimonial2, // Example photo URL
    name: "Michael Brown",
    location: "Austin, USA",
  },
  {
    id: 6,
    rating: 5,
    comment:
      "This clinic is top-notch! They treated my pet like family, and the service was fast and efficient. I’ll be back for future visits.",
    photo: Testimonial3, // Example photo URL
    name: "Sarah Wilson",
    location: "Miami, USA",
  },
];

export const blogData = [
  {
    id: 1,
    title: "The Importance of Regular Vet Checkups",
    author: "Dr. Emily Watson",
    date: "February 15, 2025",
    image: Blog1, // Replace with actual image URL
  },
  {
    id: 2,
    title: "How to Keep Your Pet Healthy and Happy",
    author: "John Doe",
    date: "January 28, 2025",
    image: Blog3
  },
  {
    id: 3,
    title: "Top 5 Dog Breeds for Families",
    author: "Sarah Johnson",
    date: "March 5, 2025",
    image: Blog2,
  },
  // {
  //   id: 4,
  //   title: "Understanding Your Cat's Behavior",
  //   author: "Michael Brown",
  //   date: "December 20, 2024",
  //   image: Blog1,
  // },
];
