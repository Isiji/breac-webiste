import aviation from "../assets/images/aviation.jpg";
import cargoImg from "../assets/images/cargoImg.jpg";
import eventprop from "../assets/images/event-prop.jpeg";

const services = [
    { 
        id: "aviation-consultancy", 
        title: "Aviation Consultancy", 
        image: aviation, 
        description: [
            "Landing and Overflight Permits",
            "Registration of aircraft and private landing aerodromes",
            "Business research and market analysis for new and existing airlines in Kenya",
            "Coordinating charter flights for ad-hoc carriers in Kenya",
            "Sourcing for ground handling and general sales agency for new and existing carriers",
            "VIP/Private jet sourcing and handling within Africa and Europe"
        ]
    },
    { 
        id: "cargo-forwarding", 
        title: "Cargo Clearing & Forwarding", 
        image: cargoImg, 
        description: [
            "Handling both air and sea cargo clearing and forwarding",
            "Live animal transportation (Horses, Pets, and lab research animals)",
            "Complete import and export logistics from source to doorstep"
        ]
    },
    { 
        id: "events-deco", 
        title: "Events Deco Branding", 
        image: eventprop, 
        description: [
            "Special event branding of vehicles, textile materials, and venues",
            "Provision of props through our trusted industry partners",
            "Printing of event materials, gifts, giveaways, and stationery"
        ]
    }
];

export default services;
