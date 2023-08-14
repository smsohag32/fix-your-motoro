import Contact from '@/components/PagesSection/Contact/Contact/Contact';
import ContactFrom from '@/components/PagesSection/Contact/ContactFrom/ContactFrom';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 ">
                <Contact />
                <ContactFrom />
            </div>
        </div>
    );
};

export default ContactPage;