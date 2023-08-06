import React, { useEffect, useState } from 'react'
import transact from '../../Assets/transact.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from 'axios'

const Sectionthree = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [services, setServices] = useState([]);

    useEffect(() => {
        Aos.init({ duration: 1000 });

        const init = async () => {
            axios.defaults.baseURL = "https://main.majorlink.co/api"

            const res = await axios.get('/services/list', {
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json"
                }
            });

            setServices(res.data);

        }

        init();

    }, []);
    return (
        //Section Container
        <div className='md:m-20 md:mt-0 mt-10' data-aos="fade-up">

            {/*Div and contents*/}
            <div className='md:flex'>

                {/*Left Image*/}
                <div data-aos="fade-up" className='md:mx-0 mx-16'>
                    <img
                        className=''
                        src={transact}
                        alt='img'
                    />
                </div>
                {/*Left Image*/}

                {/*Right Content*/}
                <div className='md:p-20 p-6 mt-20' data-aos="fade-up">

                    {/*Header*/}
                    <span>
                        <h2 className='text-3xl'>
                            Transaction made easy
                        </h2>
                    </span>
                    {/*Header*/}

                    <p className='font-poppins font-light'>
                        Buy and sell popular digital currencies, quickly without intermediaries.
                    </p>

                </div>
                {/*Right Content*/}

            </div>
            {/*Div and contents*/}

        </div>
        //Section Container
    )
}

export default Sectionthree