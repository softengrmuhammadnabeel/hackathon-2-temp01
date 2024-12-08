import React, { useState } from 'react';
import Product1 from "@/assets/images/pic3.png";
import Product2 from "@/assets/images/pic13.png";
import Product3 from "@/assets/images/pic2.png";
import PriceTag from "@/assets/images/priceTag.png";
import DeleteIcon from "@/assets/images/deleteIcon.png";
import Arrow from "@/assets/images/arrow-down-bold 1.png";
import Image from 'next/image';
import FilterMenu from '../common/FilteredMenu';

const CartMain = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            image: Product1,
            name: 'Gradient Graphic T-shirt',
            size: 'Large',
            color: 'White',
            price: 145,
            quantity: 1,
        },
        {
            id: 2,
            image: Product2,
            name: 'Checkered Shirt',
            size: 'Medium',
            color: 'Red',
            price: 180,
            quantity: 1,
        },
        {
            id: 3,
            image: Product3,
            name: 'Skinny Fit Jeans',
            size: 'Large',
            color: 'Blue',
            price: 240,
            quantity: 1,
        },
    ]);

    const [discount] = useState(20);
    const [deliveryFee] = useState(15);

    const handleQuantityChange = (itemId: number, newQuantity: number) => {
        if (newQuantity >= 1) {
            setItems(
                items.map((item) =>
                    item.id === itemId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const handleDelete = (itemId: number) => {
        setItems(items.filter((item) => item.id !== itemId));
    };

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount + deliveryFee;

    return (
        <div className="container mx-auto px-4 my-8">
            <h1 className="text-5xl mb-6 font-integralCF tracking-tighter font-extrabold">Your Cart</h1>
            <div>
            <FilterMenu/>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 bg-white rounded-2xl shadow-lg border p-4 ">
                    {items.map((item) => (
                        <div key={item.id} className="relative border-b-2  flex items-center gap-4 mb-6 px-0 py-3">
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            >
                                <Image src={DeleteIcon} alt="Delete" width={20} height={20} />
                            </button>

                            <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-500">Size: {item.size} | Color: {item.color}</p>
                                <p className="font-bold text-xl mt-2">${item.price.toFixed(2)}</p>
                            </div>

                            <div className="absolute bg-[#F0F0F0] rounded-full bottom-2 right-2 flex items-center gap-2">
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="px-2 py-1.5 bg-[#F0F0F0] rounded-l-full hover:bg-[#F0F0F0]"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    className="w-12 text-center bg-[#F0F0F0] p-1 border rounded-none outline-none"
                                    min="1"
                                />
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="px-2 py-1.5 bg-[#F0F0F0] rounded-r-full hover:bg-[#F0F0F0]"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full lg:max-w-[500px] bg-white font-satoshi font-bold shadow-lg border rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span className='font-normal font-satoshi'>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className='font-normal font-satoshi'>Discount ({discount}%)</span>
                        <span className='text-red-400'>-${discountAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className='font-normal font-satoshi'>Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span className='font-normal font-satoshi'>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="mt-4 w-full flex flex-row">
                        {/* Promo Code Input */}
                        <div className="flex w-full flex-row bg-[#F0F0F0] rounded-full items-center">
                            <Image
                                src={PriceTag}
                                alt="price-tag"
                                width={25}
                                height={25}
                                className="ml-3"
                            />
                            <input
                                type="text"
                                placeholder="Promo code"
                                className="w-full pl-4 py-2 bg-[#F0F0F0] rounded-full focus:outline-none"
                            />
                        </div>
                        {/* Apply Button */}
                        <button className="w-full md:w-1/3 bg-black text-white py-2 ml-3 rounded-full hover:bg-gray-800">
                            Apply
                        </button>
                    </div>

                    <button className="w-full flex justify-center items-center bg-black text-white py-3 rounded-full mt-4 hover:bg-black">
                        Go to Checkout <span><Image src={Arrow} alt='arrow' width={25} height={25}/></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartMain;
