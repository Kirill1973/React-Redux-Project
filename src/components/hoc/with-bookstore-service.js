import React from 'react';
import {BookStoreServiceConsumer} from '../bookstore-service-context';

const withBookStoreService = () => (Wrapper) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookStoreService) => {
                        return <Wrapper {...props} bookStoreService={bookStoreService} />
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

export default withBookStoreService;