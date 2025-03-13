import aviationConsultancy from "../assets/images/aviationconsultancy.webp";
import cargoHandling from "../assets/images/cargoImg.jpg";
import charterFlights from "../assets/images/charter-flight.jpg";

const services = [
    { 
        id: "aviation-consultancy", 
        title: "Aviation Consultancy", 
        image: aviationConsultancy, 
        description: [
            "Landing and Overflight Permits",
            "Aircraft registration and licensing",
            "Market analysis for new airlines",
            "VIP and private jet handling"
        ]
    },
    { 
        id: "cargo-handling", 
        title: "Cargo Handling & Forwarding", 
        image: cargoHandling, 
        description: [
            "Air cargo clearance and logistics",
            "Live animal transportation",
            "Complete import/export handling"
        ]
    },
    { 
        id: "charter-flights", 
        title: "Charter Flight Coordination", 
        image: charterFlights, 
        description: [
            "Sourcing and coordinating charters",
            "Ground handling support",
            "Ad-hoc flight management"
        ]
    }
];

export default services;
