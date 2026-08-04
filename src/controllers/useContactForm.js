// CONTROLLER: Handles the business logic for the consultation/contact form.
// Keeping this separate from the View (JSX) means the component only
// worries about rendering, and this file only worries about "what happens"
// when the user interacts with the form.
import { useState } from "react";

export function useContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agreedToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleConsultationSubmit = (e) => {
        e.preventDefault();
        // TODO: replace with real API call (fetch/axios) to your backend
        alert("Consultation request submitted successfully madam!");
    };

    return { formData, handleChange, handleConsultationSubmit };
}
