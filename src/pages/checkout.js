import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from "react-currency-formatter"
import { useSession} from "next-auth/client"

const Checkout = () => {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const naira = total * 600;
    const [session] = useSession()
    return (
        <div className="bg-gray-100">
            <Header/>
                <main className="lg:flex max-w-screen-2xl mx-auto">
                    {/* left section */}
                        <div className="flex-grow m-5 shadow-sm ">
                            <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />


                            <div className="flex flex-col  p-3 space-y-10 bg-white shadow-md rounded-md">
                            <h1 className="text-4xl font-semibold items-center mt-2  pb-4 ">{items?.length === 0? "Your Basket is Empty." : "Shopping Basket"}</h1>
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
                            <div className="flex flex-col bg-white p-10 shadow-md">
                                <h1 className="  text-3xl text-gray-700 font-semibold pb-8">Summary</h1>
                                {items.length > 0 && (
                                    <>
                                        <h2 className="whitespace-nowrap">
                                            Subtotal ({items.length} items) : {""}
                                            <span className="font-bold">
                                                <Currency quantity={naira}  currency="NGN" />
                                            </span>
                                        
                                        
                                        </h2>

                                        <button disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "} `}>
                                            {session? "Proceed to checkout" : "Sign In to Checkout"}
                                        </button>
                                    </>
                                )}
                            </div>
                </main>
        </div>
    )
}

export default Checkout
