import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"


const CheckoutProduct = ({id, title, price, description, category, image, hasPrime, rating}) => {
    const naira = price * 600
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            {/* middle section */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>

                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-400"  />
                    ))
                    
                    }
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>

                <Currency quantity={naira} currency="NGN"  />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                            <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                            <p className="text-xs text-gray-500">Free Next Day Delivery</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
