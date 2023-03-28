import './Categories.css';
import { useRef } from 'react';
import Carousel from 'react-elastic-carousel';

import { category } from '../data/data';



const Categories = () => {


let items=0;
category.map(c =>{
    items++;
    return items;
})


const itemsPerPage = 1
const carouselRef = useRef(null);
const totalPages = Math.ceil(items/ itemsPerPage)
let resetTimeout;

    return (
        <>

            <div className='trendingBox'>
                <p className='trendingTopics' >TRENDING TOPICS</p>
            </div>

            <Carousel 
            ref={carouselRef}
            enableAutoPlay
            autoPlaySpeed={1500}
            onNextEnd={({index}) =>{
                clearTimeout(resetTimeout)
                if(index+1 === totalPages){
                    resetTimeout = setTimeout(() =>{
                        carouselRef.current.goTo(0)
                    }, 1500)
                }
            }}
        itemsToShow={itemsPerPage}
        

            >
              
                {
                    category.map(cate => (
                        <div className="category-container">
                            <div className="content">
                                <div className="category-card">
                                    <div className="card-content">
                                        <div className="category-image">
                                            {cate.image}
                                        </div>

                                        <div className="category-name">
                                            {/* <Link to={`/?category=${cate.type}`}>{cate.type}</Link> */}
                                            <p className='categoryTypeToView'>{cate.type}</p>
                                        </div >


                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </Carousel>

        </>

    )
}

export default Categories;