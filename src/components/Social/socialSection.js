import React from 'react';
import {
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";


const Social = () => {
    return (
        <div className="FooterSocialContainer">
            <div className="FooterSocialText">Copyright by Coders Lab</div>
            <div className="SocialIcons">
                <FaFacebook/>
                <FaInstagram/>
            </div>
        </div>
    );
};

export default Social;