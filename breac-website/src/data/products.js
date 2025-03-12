import healthcare from "../assets/images/healthcare.jpg";
import facialtissues from "../assets/images/facial-tissues.jpg";
import toiletpaper from "../assets/images/toilet-paper.jpg";

const products = [
    { 
        id: "healthcare-equipment", 
        name: "Healthcare Equipment", 
        image: healthcare, 
        description: [
            "Manufacturing and supplying toiletries.",
            "Production of sanitary pads for ladies.",
            "Providing adult diapers for the elderly, sick, and disabled.",
            "Commitment to improving community health and well-being."
        ]
    },
    { 
        id: "facial-tissues", 
        name: "Facial Tissues", 
        image: facialtissues, 
        description: [
            "Produced from carefully selected and sterilized Virgin Pulp material.",
            "Sourced from the best producers in Brazil and India.",
            "High-quality tissues leading to long-term exclusive contracts with major companies."
        ]
    },
    { 
        id: "toilet-paper", 
        name: "Toilet Paper", 
        image: toiletpaper, 
        description: [
            "High-quality toilet paper made from virgin pulp.",
            "Acquired 'Doit' toilet paper production entity in 2018.",
            "Supplying premium toilet paper to the Kenyan market.",
            "Producing for major corporate clients and toiletries companies."
        ]
    }
];

export default products;
