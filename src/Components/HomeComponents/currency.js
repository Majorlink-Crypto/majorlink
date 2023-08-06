<div className='md:flex items-center justify-between w-[90%] font-gilroy mt-2'>

{services.length && (
     services.map((service, id) => {
          if (service.active) {
               return (<section key={id} className='bg-[#fafafa] p-3 pr-6 rounded-lg text-[#2c3288] md:w-[100%] md:mr-5 md:mt-0 mt-5'>

                    {/*Top section containing nametage, icon and rate*/}
                    <span className='flex justify-between mt-2'>

                         {/*Top section containing nametage and icon*/}
                         <span className='flex items-center space-x-3'>
                              {(service.name).toLowerCase() === 'bitcoin' && <img
                                   className=''
                                   src={Bitcoin}
                                   alt='icon'
                              />}

                              {(service.name).toLowerCase() === 'ethereum' && <img
                                   className=''
                                   src={Ethereum}
                                   alt='icon'
                              />}

                              {(service.name).toLowerCase() === 'usdt' && <img
                                   className=''
                                   src={Tether}
                                   alt='icon'
                              />}

                              <h2 className='font-aeonik'>{service.name}</h2>
                         </span>
                         {/*Top section containing nametage and icon*/}

                         {/*Top section containing rate*/}
                         <h4 className='animate-pulse'>{service.buy}/$</h4>
                         {/*Top section containing rate*/}

                    </span>
                    {/*Top section containing nametage, icon and rate*/}

                    {/*Down section containing trade span and date*/}
                    <span className='flex justify-between ml-10 items-center'>
                         <div>
                              <h2 className='text-sm font-aeonik'>{devDate(service.updated_at)}</h2>
                              <p className='text-green-800 font-aeonik'>Active</p>
                         </div>

                         {/*Trade Button*/}
                         <span className='bg-[#111031] px-6 py-1 rounded-lg cursor-pointer items-center justify-center flex'>
                              <Link to={'/checkout'} className='text-white'> Trade</Link>
                         </span>
                         {/*Trade Button*/}


                    </span>
                    {/*Down section containing trade span and date*/}

               </section>)
          } else {
               return null;
          }
     })
)}


</div>