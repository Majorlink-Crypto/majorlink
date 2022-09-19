import React, { useEffect } from 'react'
import tobi from '../../Assets/tobi.jpg'
import Aos from 'aos'
import {IonIcon} from "react-ion-icon";
import "aos/dist/aos.css"
import Carousel from 'better-react-carousel'

const Testimonials = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, []);
  return (
      //Container
    <div className='md:pt-2 pt-20 pb-3 bg-herosection'>
        {/* div */}
             <div className='flex flex-col md:p-10 p-4 text-center items-center justify-center'>
                 {/*Header*/}
                     <h2 className='md:text-4xl text-2xl'>What people say about us</h2>
                     <h2 className='text-border font-gilroy text-sm'>Our review rate is amazing !</h2>
                  {/*Header*/}


             </div>
                  <Carousel cols={3} rows={1} gap={10} loop hideArrow={false} showDots={false} autoplay={20000}>
      <Carousel.Item>
       {/*Card*/}
       <div className='mt-10 bg-white p-3' data-aos="fade-up">
                        <section className='flex'>
                           <span className='text-start'>
                           <h2>Tobi Olumelo</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist and song writter</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[90%] text-start mt-4'> "The easy access to trade with majorlink is what i enjoy so much, everything is done so easily and swift" </p>
                       <span className='flex text-yellow-400 mt-3'>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <h2 className='text-black ml-2'>5</h2>
                       </span>
                     </div>
                  {/*Card*/}
      </Carousel.Item>
      <Carousel.Item>
       {/*Card*/}
       <div className='mt-10 bg-white p-3' data-aos="fade-up">
                        <section className='flex'>
                           <span className='text-start'>
                           <h2>Hassan Adamu</h2>
                           <h6 className='text-sm font-gilroysemibold'>Lawyer</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[90%] text-start mt-4'> "Very Favourable Rates" </p>
                       <span className='flex text-yellow-400 mt-3'>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <h2 className='text-black ml-2'>4.5</h2>
                       </span>
                     </div>
                  {/*Card*/}
      </Carousel.Item>
      <Carousel.Item>
       {/*Card*/}
       <div className='mt-10 bg-white p-3' data-aos="fade-up">
                        <section className='flex'>
                           <span className='text-start'>
                           <h2>Esther Mokanji</h2>
                           <h6 className='text-sm font-gilroysemibold'>Business Owner</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[90%] text-start mt-4'> "Finding a trusted platform to trade ecurrencies at large quantities for me as a business owner has been challenging but then i came across majorlink two months ago and all my troubles and fear have gone away." </p>
                       <span className='flex text-yellow-400 mt-3'>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <h2 className='text-black ml-2'>4</h2>
                       </span>
                     </div>
                  {/*Card*/}
      </Carousel.Item>
      <Carousel.Item>
       {/*Card*/}
       <div className='mt-10 bg-white p-3' data-aos="fade-up">
                        <section className='flex'>
                           <span className='text-start'>
                           <h2>Mehmet Drupal</h2>
                           <h6 className='text-sm font-gilroysemibold'>Crypto Trader</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[90%] text-start mt-4'> "I am a professional Trader and i depend on a reliable exchanger to convert from FIAT to Crypt and vice versa and Majorlink always come through for me." </p>
                       <span className='flex text-yellow-400 mt-3'>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <h2 className='text-black ml-2'>4.5</h2>
                       </span>
                     </div>
                  {/*Card*/}
      </Carousel.Item>
      <Carousel.Item>
       {/*Card*/}
       <div className='mt-10 bg-white p-3' data-aos="fade-up">
                        <section className='flex'>
                           <span className='text-start'>
                           <h2>Naomi</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[90%] text-start mt-4'> "I like how they allow me to trade little amounts when i need to" </p>
                       <span className='flex text-yellow-400 mt-3'>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <h2 className='text-black ml-2'>4.5</h2>
                       </span>
                     </div>
                  {/*Card*/}
      </Carousel.Item>
      <Carousel.Item>
       {/*Card*/}
       <div className='mt-10 bg-white p-3' data-aos="fade-up">
                        <section className='flex'>
                           <span className='text-start'>
                           <h2>Gauis Raymond</h2>
                           <h6 className='text-sm font-gilroysemibold'>Blockchain Engineer</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[90%] text-start mt-4'> "As a Blockchain Engineer i constantly need resources like crypto while testing out processes i am building and majorlink is my go to plug." </p>
                       <span className='flex text-yellow-400 mt-3'>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <IonIcon name='star'/>
                       <h2 className='text-black ml-2'>4.5</h2>
                       </span>
                     </div>
                  {/*Card*/}
      </Carousel.Item>
                 </Carousel>
         {/* div */}
    </div>
     //Container
  )
}

export default Testimonials