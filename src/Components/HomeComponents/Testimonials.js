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
                  <Carousel cols={3} rows={1} gap={10} loop hideArrow={false} showDots={true} autoplay={20000}>
      <Carousel.Item>
       {/*Card*/}
       <div className='mt-10 bg-white p-3' data-aos="fade-up">
                        <section className='flex'>
                            <img
                            className='rounded-3xl w-[10%] mr-3'
                            src={tobi}
                            alt=''
                            />
                           <span className='text-start'>
                           <h2>Tobi Olumelo</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist and song writter</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[70%] text-start mt-4'> "The easy access to trade with majorlink is what i enjoy so much, everything is done so easily and swift" </p>
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
                            <img
                            className='rounded-3xl w-[10%] mr-3'
                            src={tobi}
                            alt=''
                            />
                           <span className='text-start'>
                           <h2>Tobi Olumelo</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist and song writter</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[70%] text-start mt-4'> "The easy access to trade with majorlink is what i enjoy so much, everything is done so easily and swift" </p>
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
                            <img
                            className='rounded-3xl w-[10%] mr-3'
                            src={tobi}
                            alt=''
                            />
                           <span className='text-start'>
                           <h2>Tobi Olumelo</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist and song writter</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[70%] text-start mt-4'> "The easy access to trade with majorlink is what i enjoy so much, everything is done so easily and swift" </p>
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
                            <img
                            className='rounded-3xl w-[10%] mr-3'
                            src={tobi}
                            alt=''
                            />
                           <span className='text-start'>
                           <h2>Tobi Olumelo</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist and song writter</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[70%] text-start mt-4'> "The easy access to trade with majorlink is what i enjoy so much, everything is done so easily and swift" </p>
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
                            <img
                            className='rounded-3xl w-[10%] mr-3'
                            src={tobi}
                            alt=''
                            />
                           <span className='text-start'>
                           <h2>Tobi Olumelo</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist and song writter</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[70%] text-start mt-4'> "The easy access to trade with majorlink is what i enjoy so much, everything is done so easily and swift" </p>
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
                            <img
                            className='rounded-3xl w-[10%] mr-3'
                            src={tobi}
                            alt=''
                            />
                           <span className='text-start'>
                           <h2>Tobi Olumelo</h2>
                           <h6 className='text-sm font-gilroysemibold'>Artist and song writter</h6>
                           </span>
                        </section>
                        <p className='text-sm font-gilroysemibold text-gray-600 w-[70%] text-start mt-4'> "The easy access to trade with majorlink is what i enjoy so much, everything is done so easily and swift" </p>
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