import Footer from "../header/Footer"
import Header from "../header/Header"
import './About.css'


const About = () =>{
    return(
        <>
        <Header />
        <p className="blogHeading">thyBlog</p>
        <p className="firstHeading">A Blogging Website</p>
<p>This is a Blogging website designed by Er. Sujay Ranjan.
    Here You can Create a blog or read anything. You can also discuss anything of your intrest.

</p>
<p>Need your support and love</p>
<p>For any query or complaint please contact us</p>
        <Footer />
        </>
    )
}

export default About