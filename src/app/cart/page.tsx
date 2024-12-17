"use client"
import BreadcrumbCart from '@/components/cart-page/BreadcrumbCart';
import CartMain from '@/components/cart-page/CartMain';
import { div } from 'framer-motion/client';
import React from 'react';

const page = () => {
   
    return (
        <div className="container mx-auto my-8">
            <div>
                <BreadcrumbCart/>
            </div>
            <div>
                <CartMain/>
            </div>
            
        </div>
    );
};

export default page;