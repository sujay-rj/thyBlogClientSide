import Banner from "../banner/Banner";
import Header from "../header/Header";
import Categories from "./Categories";
import CreateBlog from "./CreateBlog";
import Posts from "./Posts";
import Footer from '../header/Footer.jsx'
// import './Home.css'

const Home = () =>{
    return(
        <>
        <Header />
        <Banner />
        <Categories />
        <CreateBlog />
        <Posts id="BlogsOnClick"/>
        <Footer />
        </>
    )
} 

export default Home;