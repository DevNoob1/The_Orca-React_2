import React from 'react';
import '../style/footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h4>Contact Information</h4>
                    <p>1st street, Culcutta</p>
                    <p>Phone: (123) 456-7890</p>
                    <p> Email: <a href=""
                        style={{
                            cursor: "pointer",
                            color: "white"
                        }}
                    >info@FISHY.com</a></p>
                </div>
                <div className="footer-center">
                    <h4>Opening Hours</h4>
                    <p>Monday - Friday: 9am - 10pm</p>
                    <p>Saturday - Sunday: 10am - 11pm</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} FISHY All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
