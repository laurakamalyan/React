import React from "react";
import {useParams} from "react-router";

function Contact() {
    const {id} = useParams();
    return (
        <div>
            <h1>Contact Us</h1>
            <p>id: {id}</p>
        </div>
    )
}

export default Contact;