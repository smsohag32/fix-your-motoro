"use client";
import ContactMain from '@/components/PagesSection/Contact/ContactMain/ContactMain';
import React from 'react';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
    return (
        <div>
            <Helmet>
                <title>FYM | Contact</title>
            </Helmet>
            <ContactMain />
        </div>
    );
};

export default ContactPage;