import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Padmanabhanagar</p>
                            <p>Bengaluru</p>

                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            8197579935</h4>
                    </div>

                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            amith.sharma3@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p>I am Amith B N. Innovative and logically rigorous individual with a significant React and NodeJS knowledge and
                        Computer Science teaching experience to bring on the table.</p>
                    <div className="social">
                        <div className="" fb>
                            <a href="https://www.facebook.com/amith.sharma.370">
                                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                            </a>
                        </div>

                        <div className="" fb>
                            <a href="https://www.instagram.com/i_amithsharma/">
                                <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                            </a>
                        </div>

                        <div className="" fb>
                            <a href="hwww.linkedin.com/in/amith-b-n">
                                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer