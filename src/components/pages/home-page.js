import React from 'react';
import BookList from '../book-list';
import ShoppingCart from '../shopping-cart';

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCart />
        </div>
    )
}

export default HomePage;