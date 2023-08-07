

import React from 'react';

function SiteFooter() {
    return (
        <footer>
            <div className="contact-section">
                <h2>Contact</h2>
                <ul className="contact-methods">
                    <li><a href="mailto:tylerjaywood@gmail.com">Email</a></li>
                    <li><a href="https://www.linkedin.com/in/tyler-wood-a2256b54/">LinkedIn</a></li>
                    <li><a href="https://www.twitter.com/tylerjaywood/">Twitter</a></li>
                    {/* More contact methods go here */}
                </ul>
            </div>
        </footer>
    );
}

export default SiteFooter;
