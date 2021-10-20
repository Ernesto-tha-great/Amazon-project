import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'

const Checkout = () => {
    const items = useSelector(selectItems)
    return (
        <div className="bg-gray-100">
            <Header/>
                <main className="lg:flex max-w-screen-2xl mx-auto">
                    {/* left section */}
                        <div className="flex-grow m-5 shadow-sm ">
                            <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />


                            <div className="flex flex-col p-5 space-y-10 bg-white">
                            <h1 className="text-3xl border-b pb-4">{items?.length === 0? "Your Basket is Empty." : "Shopping Basket"}</h1>
                              </div>

                             {items.map(({id, title, price, description, category, image, hasPrime, rating}, index) => (
                                 <CheckoutProduct key={index}
                                    id={id}
                                    title={title}
                                    price={price}
                                    description={description}
                                    category={category}
                                    image={image}
                                    hasPrime={hasPrime}
                                    rating={rating}
                                 
                                 />
                             ))}

                        </div>

                       

                    {/* right  */}
                            <div></div>
                </main>
        </div>
    )
}

export default Checkout
