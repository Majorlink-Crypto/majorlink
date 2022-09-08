import React from 'react'
import MLCOriginal from '../../Assets/MLCOriginal.png'

const Footer = () => {
  return (
      //Main Container
    <div className='font-gilroy'>
       {/* Footer Content */}
         <div className='flex'>
            
            {/* Logo and social media icons */}
                <div>
                     {/* Logo  */}
                    <section className='flex'>
                        <img
                        className=''
                        alt=''
                        src={MLCOriginal}
                        />
                        <h2>MAJORLINK</h2>
                    </section>
                     {/* Logo */}

                     
                </div>
              {/* Logo and social media icons */}
         </div>
         {/* Footer Content */}
    </div>
     //Main Container
  )
}

export default Footer