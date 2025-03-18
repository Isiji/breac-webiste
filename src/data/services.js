import outsourcedProduction from "../assets/images/outsourced-production.avif";
import aviationConsultancy from "../assets/images/aviationconsultancy.webp";
import cargoHandling from "../assets/images/cargoImg.jpg";
import marketingPR from "../assets/images/marketingPR.avif";
import transitPermits from "../assets/images/transit-permits.jpg";
import airlineRepresentation from "../assets/images/airline_representation.jpg";

const services = [
    { 
        id: "aviation-consultancy", 
        title: "Aviation Research Analysis & Consultancy", 
        image: aviationConsultancy, 
        description: [
            "Market analysis and research for airlines",
            "General sales Agents for cargo and passenger charters.",
            "Operations support for ad-hoc carriers.",
            "Strategic consultation for new airline operations"
        ]
    },
    { 
        id: "airline-representation", 
        title: "Airlines Local Representation", 
        image: airlineRepresentation, 
        description: [
            "Acting as local agents for international airlines",
            "Handling ground operations and airline services",
            "Ensuring compliance with local aviation authorities"
        ]
    },
    { 
        id: "cargo-handling", 
        title: "Cargo Clearing & Forwarding", 
        image: cargoHandling, 
        description: [
            "Efficient air and sea cargo clearance",
            "Live animal and sensitive cargo handling",
            "Complete logistics and freight management"
        ]
    },

    { 
        id: "transit-permits", 
        title: "Airline Landing & Special Transit Permits", 
        image: transitPermits, 
        description: [
            "Facilitating airline landing rights and clearances",
            "Handling overflight and special transit permits",
            "Ensuring regulatory compliance for airline operations"
        ]
    },

    { 
        id: "pr-marketing", 
        title: "PR & Marketing Consultancy", 
        image: marketingPR, 
        description: [
            "Strategic branding and public relations",
            "Corporate event planning and promotions",
            "Marketing strategies for aviation businesses"
        ]
    },
    { 
        id: "outsourced-productions", 
        title: "Outsourced Productions & General Supplies", 
        image: outsourcedProduction, 
        description: [
            "Providing high-quality production solutions",
            "Supplying essential goods for various industries",
            "Reliable procurement and logistics support"
        ]
    }
];

export default services;
