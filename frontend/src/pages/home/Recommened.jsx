import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import BookCard from '../books/BookCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { getImgUrl } from '../../utils/getImgUrl';
import getBaseUrl from '../../utils/baseURL';

export default function Recommened() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${getBaseUrl()}api/books`)
            .then(res => res.json())
            .then((data) => setBooks(data))
    }, [])


    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>Recommened for you</h2>

            <Swiper navigation={true}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    books.length > 0 && books.slice(3, 13).map((book, index) =>
                        <SwiperSlide key={index} >
                            <BookCard book={book} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}
