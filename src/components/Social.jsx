import React, { useState } from "react";
import "./Social.css";  
import { FaFacebook, FaInstagram } from "react-icons/fa"; 
import { SiTiktok } from "react-icons/si";

function Social() {
    return (
        <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <SiTiktok />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
    );
}

export default Social;