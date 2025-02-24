import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { addToCart } from '../../redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';

export default function BookCard({ book }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems); // Access cartItems from Redux

    // Check if the book is already in the cart
    const isInCart = cartItems.some(item => item._id === book._id);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="rounded-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
                <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt=""
                            className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                            {book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-5">{book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}</p>
                    <p className="font-medium mb-5">
                        ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
                    </p>

                    {/* Conditionally change button text */}
                    <button
                        onClick={() => handleAddToCart(book)}
                        className={`bg-primary px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer px-6 space-x-1 flex items-center gap-1 ${isInCart ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                        disabled={isInCart} // Disable button if item is in the cart
                    >
                        <FiShoppingCart className="" />
                        <span>{isInCart ? 'Already in Cart' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
