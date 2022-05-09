import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className='blog-section text-white'>
                <p>
                    Javascript is a client side programming language, which run in browser.
                    Nodejs is a server site language which run Javascript.
                </p>
            </div>
            <div className='blog-section text-white'>
                <p>
                    Nodejs is used when we have to do multiple operation continusly.
                    Mongodb is used when data keep as a collection rather than table.
                </p>
            </div>
            <div className='blog-section text-white'>
                <p>
                    SQL db are table-based, while NoSQL databases are document-based. SQL databases are better for data structered and query selection, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
        </div>
    );
};

export default Blog;