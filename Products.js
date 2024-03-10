import React from "react";
import { Carousel } from "react-bootstrap";
function Products() {

    return (
        <>
            <header>
                <div className=" flex">
                    <div className="w-1/2">
                        <img src="https://www.rentper.org/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Frentper.org%2Fdev%2Fapp%2Fmedia%2FNone_x1.png&w=1920&q=75" />
                        <br />

                       <ul className="w-96 flex">
                        <li><img className="h-auto max-w-full rounded-lg" src="https://www.rentper.org/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Frentper.org%2Fdev%2Fapp%2Fmedia%2F2809_thumbail_19ee5bb4-3381-4f51-9040-0bce0884c1a3.jpg&w=384&q=75"/></li>

                        <li><img className="h-auto max-w-full rounded-lg" src="https://www.rentper.org/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Frentper.org%2Fdev%2Fapp%2Fmedia%2F2810_thumbail_32e13c93-e9b0-425d-b4a8-050e919a6b24.jpg&w=384&q=75"/></li>
                       
                       <li><img className="h-auto max-w-full rounded-lg" src="https://www.rentper.org/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Frentper.org%2Fdev%2Fapp%2Fmedia%2F2811_thumbail_3506d607-5108-4589-8877-b81a7a4702ee.jpg&w=384&q=75"/></li>
                       </ul>
                        <a href="/" className="pl-3"><button className="w-32 h-10 mr-10 mt-4  bg-orange-500 hover:bg-orange-300 border-color: rgb(255 255 255) rounded-md text-xl text-white">Add Cart</button></a>
                        <a href="/"><button className="w-32 h-10 mt-4 bg-orange-500 hover:bg-orange-300 border-color: rgb(255 255 255) rounded-md text-xl text-white ">Buy Now</button></a>
                    </div>

                    <div className="w-full">
                        <h2 className="text-black-400">BLUEWUD Mallium Engineered Wood Study Table  (Free Standing, Finish Color - Wenge, DIY(Do-It-Yourself))</h2>
                         <a href="/"><button type="text" className="bg-orange-300">3.8*</button></a>
                        <span className="text-orange">332Ratings & 47 reviews </span>  <br/>
                        <a href="/"><button type="text" className="mt-4 bg-orange-300">Extra ₹1193 off </button></a> <br/>
                          <a href="/"><button type="Prise" className="font-bold">₹4,259</button></a>                      ₹6,299 32% off
                        <p className="font-bold">Available offers</p>
                        <span>Special PriceGet extra ₹1193 off (price inclusive of cashback/coupon)T&C </span><br />
                        <span>Bank Offer10% off on Axis Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C</span>

                        <div >
                            <div className="">
                                <form autocomplete="off" class=""> Delivery:
                                    <input class="text-underline-offset: 8px;" placeholder="Enter Delivery Pincode" type="text"  maxlength="6" id="pincodeInputId" value="" fdprocessedid="eq9c" /></form>


                                <div class="flex"><div class="ju">Highlights:</div>
                                    <div class="_2418kt">
                                        <ul className="List-style-type:disc">
                                            <li class="">Material: Particle Board</li>
                                            <li class="">Configuration: Straight</li>
                                            <li class="">Height x Width: 72.5 cm x 40 cm (2 ft 4 in x 1 ft 3 in)</li>
                                            <li class="">Storage Included</li>
                                            <li class="">DIY - Basic assembly to be done with simple tools by the customer, comes with instructions.</li>
                                        </ul>
                                    </div>
                                    <div class="">
                                        <div class="flex">
                                            <span class="">Easy Payment Options</span>
                                            <span class=""><ul><li class="_1Ma4bX">EMI starting from ₹150/month</li><li class="_1Ma4bX">Cash on Delivery</li>
                                                <li class="">Net banking &amp; Credit/ Debit/ ATM card</li>
                                            </ul>
                                                <span class="">View Details</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </header >
        </>
    )
}
export default Products;