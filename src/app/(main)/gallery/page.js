"use client"
import React from 'react';
import GallerySection from '@/components/PagesSection/Gallery/GallerySection/GallerySection';
import { Helmet } from 'react-helmet';

const GalleryPage = () => {
    return (
        <div>
             <Helmet>
                <title>FYM | Gallery</title>
            </Helmet>
            <GallerySection/>
        </div>
    );
};

export default GalleryPage;