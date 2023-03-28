import React from 'react'
import './Footer.css'
import instagram from '../images/ig.webp'
import facebook from '../images/fb.png'
import email from '../images/gmail_logo.png'
import FooterImage from '../images/f04.jpg'

const Footer = () => {
    return <>
        <div className="footer">
            <img src={FooterImage} alt="Footer" />
            <div className="footerData">
                <div className="startFooter">
                    <span>thyBlogs</span>
                    <p className='oneLiner'>Tell us your Story...</p>
                </div>
                <div className="midAndEndFooter">
                    <div className="midFooter">
                        <p>Read stances of World...</p>
                        <div className="stancesCate">
                            <div>
                                <span>Science</span>
                                <span>Politics</span>
                                <span>Cricket</span>
                                <span>Music</span>
                                <span>Tech</span>
                                <span>Sprituality</span>
                            </div>
                            <div>
                                <span>Books/Novels</span>
                                <span>Movies/web series</span>
                                {/* <span>Personal development</span> */}
                                <span>Life Guidance</span>
                                <span>Liquor</span>
                                <span>Stories/Poems</span>
                            </div>
                        </div>
                    </div>
                    <div className="endFooter">
                        <p>Connect with us@</p>
                        <div>
                            <a href="https://www.instagram.com/thyblog_/"><img src={instagram} alt="" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100090286993785"><img src={facebook} alt="" /></a>
                            
                            <a href="mailto:ranjansujay9@mail.com"><img src={email} alt="" style={{ width: "33px" }} /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer
