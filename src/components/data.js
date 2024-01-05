import GroundFloorImage from '../assets/ground floor.png';
import FirstFloorImage from '../assets/first floor.png';
import SecondFloorImage from '../assets/second floor.png';

import EastSideStreetView from '../assets/001.jpg'
import EastSideFrontView from '../assets/002.jpg'
import WestSideStreetView from '../assets/003.jpg'
import SymmetrycalView from '../assets/004.jpg'
import TopView from '../assets/005.jpg'
import AerialView from '../assets/006.jpg'

import Mondelez from '../assets/business/1.png'
import Hero from '../assets/business/2.png'
import Isuzu from '../assets/business/3.png'
import Colgate from '../assets/business/4.png'


export const faqData = [
    {
        question: "Is that revenue generating property?",
        answer: "Yes, having homes will give assurance for rental.",
    },
    {
        question: "How about property management?",
        answer: "Having homes will take care of your property and ensure your rental.Inspection monitoring all property management service will be taken care",
    },
    {
        question: "Nearby accessibility?",
        answer: "You have a good connectivity",
    },
    {
        question: "What amenities are available in the vicinity?",
        answer: "The property is surrounded by various amenities such as parks, schools, and shopping centers, providing a convenient and comfortable lifestyle.",
    },
    {
        question: "What security measures are in place for the property?",
        answer: "The property is equipped with state-of-the-art security systems, including surveillance cameras, secure access points, and on-site security personnel, ensuring the safety of residents.",
    },
];

export const StreetViewData = [
    {
        id: 0,
        image: EastSideStreetView,
        name: 'East Side View'
    },
    {
        id: 1,
        image: EastSideFrontView,
        name: 'East Side Front View'
    },
    {
        id: 2,
        image: WestSideStreetView,
        name: 'West Side Street View'
    },
    {
        id: 3,
        image: SymmetrycalView,
        name: 'Symmetrycal View'
    },
    {
        id: 4,
        image: TopView,
        name: 'Top View'
    },
    {
        id: 0,
        image: AerialView,
        name: 'Aerial View'
    },
];

export const Aminites = [
    {
        id: 0,
        name: " In-house Gym",
    },
    {
        id: 1,
        name: "Buddha small temple",
    },
    {
        id: 2,
        name: "Green Landscape",
    },
    {
        id: 3,
        name: "Kids zone",
    },
    {
        id: 4,
        name: "Advanced Security 24/7",
    },
    {
        id: 5,
        name: "Solar Energy for Street Lighting",
    },
];

export const KeyFeatures = [
    {
        id: 0,
        image: EastSideStreetView,
        feature: "A PROPERTY IN TADA LIKE NO OTHER",
    },
    {
        id: 1,
        image: EastSideStreetView,
        feature: "ISRO SPACE STATION LAUNCH PAD VISIBLE FROM OUR SITE.",
    },
    {
        id: 2,
        image: EastSideStreetView,
        feature: "18 LUXURY VILLAS",
    },
    {
        id: 3,
        image: EastSideStreetView,
        feature: "SPANNING 21 ACRES LARGEST GATED COMMUNITY IN SRICITY TADA",
    },
    {
        id: 4,
        image: EastSideStreetView,
        feature: "RENTAL PROPERTY INCOME",
    },
    {
        id: 5,
        image: EastSideStreetView,
        feature: "EXCELLENT RETURN ON INVESTMENT",
    },
    {
        id: 6,
        image: EastSideStreetView,
        feature: "OPPOSITE SRICITY ENTRANCE",
    },
    {
        id: 7,
        image: EastSideStreetView,
        feature: "150+ COMPANIES WITHIN 5 MINS",
    },
    {
        id: 8,
        image: EastSideStreetView,
        feature: "ACCESS TO THE BEST SCHOOLS AND INSTITUTIONS",
    },
    {
        id: 9,
        image: EastSideStreetView,
        feature: "3 BHK & 4 BHK",
    },
    {
        id: 10,
        image: EastSideStreetView,
        feature: "NATURE'S BOUNTY",
    },
    {
        id: 11,
        image: EastSideStreetView,
        feature: "EXPERT PROPERTY MANAGEMENT",
    },
    {
        id: 12,
        image: EastSideStreetView,
        feature: "ACCESS TO TOURIST ATTRACTIONS",
    },
];

export const businessCard = [
    {
        id: 0,
        image: Mondelez,
    },
    {
        id: 1,
        image:Hero,
    },
    {
        id: 2,
        image:Isuzu
    },
    {
        id: 3,
        image:Colgate
    },
];

export const FloorImages = [
    {
        id: 0,
        image: GroundFloorImage,
        name: 'Ground Floor'
    },
    {
        id: 1,
        image: FirstFloorImage,
        name: 'First Floor'
    },
    {
        id: 2,
        image: SecondFloorImage,
        name: 'Second Floor'
    }
];

export const LocationData = {
    '0-2KM': {
        'JAPAN INDUSTRIAL CLUSTER': ['Isuzu Motors', 'Kobelco Cranes', 'NHK Springs', 'IMOP', 'Nippon Seiki'],
        'FOOD JOINTS': ['Coffeday', 'The Kitchen Family Restaurant', 'Big Stay Restaurant', 'Swathi Residency', 'Chaitanya Mess'],
        'HOTEL/SERVICE APARTMENTS': ['HavinHomes - Stay', 'Big Stay Restaurant', 'Comfort Stay', 'HavinHomes - Elite Villas', 'Mangi Garden Hotel']
    },
    '2-4KM': {
        'INDUSTRIAL CLUSTER': ['Cadbury-Mondelez', 'Colgate Palmolive', 'Foxconn Mobiles', 'Unicharm - Mamy Poko', 'Lavazza India Pvt Ltd', 'VRV Italy', 'Hunter Douglas', 'TATA Trao', 'Nittan India Tech', 'Bergin Pipes India'],
        'MEDICAL FACILITIES': ['Kanchi Kamakoti Child trust Hospital', 'Shankara Nethralaya', 'Kaveri Hospital'],
        'EDUCATIONAL INSTITUTIONS': ['IIIT - Indian Institute of Information and Technology', 'Kreya International University', 'Accord International School', 'Chinnmaya Vidya Mandir - CBSE', 'Padmavathi CBSE School']
    },
    '4-6KM': {
        'INDUSTRIAL CLUSTER': ['Kellogg’s', 'Alstom Metro Rail Pvt Ltd', 'Bluestar Air Conditioning', 'Amber Enterprises', 'Kikuwa', 'KCL', 'Paques Swiz Cleaning', 'Be Rollex', 'Indo Space', 'NGC Transmission'],
        'CONNECTIVITY': ['Tada Railway Station', 'Tada Bus Stand', 'Sullurpeta Railway Station'],
        'ENTERTAINMENT': ['V Epiq Multiplex - 3D Multiplex', 'N.V.R Movie Theatre']
    },
    '7 KM+': {
        'INDUSTRIAL CLUSTER & FTWZ': ['Daikin Air condition', 'Hero Motocorp', 'Apollo Tyres', 'Linde / Praxair', 'PepsiCo India', 'West Pharma', 'Rockworth Furniture', 'Siddhartha FTWZ', 'TVS Brakes India', 'Sricity Business Center'],
        'TEMPLES': ['Chengalamma Parameswari temple', 'Oneness Temple', 'Sri Kasi Visveshwara Temple - Mambattu'],
        'ICONIC & TOURIST PLACES TO VISIT': ['ISRO Rocket Launch center', 'Pullicat Lake - Fishing & Boating', 'Tada Waterfalls - for trekking', 'Nelapattu Bird Sanctuary', 'One Ness - Kalki Golden Temple', 'Sri Kalahasthi Temple']
    }
};

export const cardData = [
    {
        id: 1,
        title: 'PAINTING',
        description: 'Apply putty over primer, followed by two coats of Asian Paints Royale emulsion for internal walls. For Sal doors, use wood primer and two coats of Asian Paints Enamel paint. For external walls, apply primer and two coats of Asian Ultima, using Ultima for textured surfaces on the front elevation.',
    },
    {
        id: 2,
        title: 'ELECTRICAL FIXTURES',
        description: 'Use BESSCOM-approved ISI Mark top brands like Finolex or V Guard for lighting and heating circuits with ISI-branded PVC conduits. Install BESSCOM-approved ISI Mark modular switches from reputed brands like Legrand or Crabtree. Provide AC points in all bedrooms and living areas.',
    },
    {
        id: 3,
        title: 'LANDSCAPING',
        description: 'Professionally planned landscape with appropriate lighting.',
    },
    {
        id: 4,
        title: 'KITCHEN',
        description: 'Use 20 mm thick Engineered Quartz Granite for kitchen countertops and provide stainless steel sinks with drain boards.',
    },
    {
        id: 5,
        title: 'STRUCTURE',
        description: '8-inch AAC/Solid Block for structure, with 4-inch inside.',
    },
    {
        id: 6,
        title: 'FLOORING',
        description: 'Use EXXARO Brand or equivalent Digital Vitrified Tiles for living areas and bedrooms. Install laminated wooden flooring for the master bedroom.',
    },
    {
        id: 7,
        title: 'STAIRCASE',
        description: 'Use 20 mm thick high-quality granite for the staircase with wood railings and glass & SS brackets.',
    },
    {
        id: 8,
        title: 'DADOING',
        description: 'Use high-quality glazed ceramic tiles for kitchen dadoing and bathrooms.',
    },
    {
        id: 9,
        title: 'DOORS',
        description: 'Main door: Teak wood frame with teak shutter. Other doors: Good quality Sal wood frame with solid door shutters.',
    },
    {
        id: 10,
        title: 'WINDOWS',
        description: 'Three-track high-quality UPVC frames with mosquito mesh shutters.',
    },
    {
        id: 11,
        title: 'VENTILATORS',
        description: 'High-quality UPVC frames with glass louvers.',
    },
    {
        id: 12,
        title: 'SANITARY FITTINGS',
        description: 'Use high-quality sanitary fittings like KOHLER Brand or equivalent for bathrooms.',
    },
    {
        id: 13,
        title: 'SECURITY NETWORK',
        description: 'Install CCTV cameras in identified common areas and the clubhouse, with monitoring and recording from the security/maintenance office.',
    },
];

