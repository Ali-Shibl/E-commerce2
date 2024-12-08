import React, {  useRef, useState } from 'react'
import Loading from '../Loading/Loading';
import './Categories.css'
import useFetchData from '../../Hook/useFetchData';
import { Link } from 'react-router-dom';

export default function Categories() {

let {data,isLoading}=useFetchData('https://fakestoreapi.in/api/products/category')
console.log(data);

    const ref = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlider = () => {
        const totalSlides = ref.current.children.length;
        if (currentSlide >= totalSlides - 1) return;

        setCurrentSlide(currentSlide + 1);
    };

    const prevSlider = () => {
        if (currentSlide <= 0) return;

        setCurrentSlide(currentSlide - 1);
    };


    const sliderStyle = {
        transform: `translateX(-${currentSlide * 100}%)`,
    };





    return (
        <>
            <p className='Featured position-relative  mt-5 mb-4 text-orange'>Categories</p>
            <div className='d-flex flex-column flex-md-row gap-3 gap-md-0 justify-content-md-between align-items-md-center'>
                <h2 className='mb-0 h1 header-category'> Browse By Category</h2>

                <div className="d-flex align-items-center gap-3">

                    <div className="arrow-next curser d-flex justify-content-center align-items-center" onClick={prevSlider} >
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>

                    <div className="arrow-prev curser d-flex justify-content-center align-items-center" onClick={nextSlider}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>

                </div>

            </div>

            {isLoading ? <Loading /> : <div className="sliderCategory py-4" ref={ref} >
                {data.categories?.map((category,index) => (
                    
                    
                    <Link to={`/category/${category}`} key={index} className="itemcategory nav-link" style={sliderStyle}>
                    <div className="category py-3 curser overflow-hidden rounded-2 d-flex justify-content-center align-items-center p-2 border border-1 border-black border-opacity-10">
                       
                            <p className='text-center h5 mb-0'>{category}</p>
                       
                    </div>
                </Link>
                ))}

            </div>

            }
                  <div className='w-100 border border-1 border-black border-opacity-10 my-3 my-lg-5'></div>





        </>
    )
}
