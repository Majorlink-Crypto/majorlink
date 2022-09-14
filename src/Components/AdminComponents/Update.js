import React from 'react'
import Select from 'react-select'

const Update = () => {

  //const [dataa, setDataa] = useState([])

  {/*
  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/contacts", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setDataa(resultsender.data)
     }

  }, [])
  */}

  //const colorOptions = dataa
  const colorOptions = [
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'usdt', label: 'USDT' },
    { value: 'ethereum', label: 'Ethereum' }
  ]
  

    // handle selection
  {/*
    const handleChanged = (e) => {
      getContact(Array.isArray(e) ? e.map(x => x.id) : [])
    }
  */}

  return (
      //Main Container
    <div className='m-4 md:mt-10'>

    <h2 className='md:px-16 text-2xl pt-16'>Quick Update Tab</h2>
    

      <div className='md:flex md:px-16 pt-5'>

          {/* Update rate Card */}
          <div className='font-gilroysemibold text-sm text-black rounded-md p-4 bg-green-500 md:mr-10 md:w-[86%]'>
             <h2 className='text-xl text-white '> Buy Rates</h2>
             <p className='mb-1 text-white '>Update your buy rates for all currency</p>
             <Select
              //onChange={handleChanged}
              isClearable={false}
              //theme={selectThemeColors}
              //isMulti
              /* eslint-disable */
             // getOptionLabel={e => e.firstname + ' ' + e.lastname}
              /* eslint-enable */
              
             // getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
             <input className='rounded-md p-3 text-black mt-3 md:w-[60%]' type='number'/>
             <button className='bg-primary text-white p-3 ml-2 rounded-md'>Update 🚀</button>
         </div>
          {/* Update rate Card */}

          {/* Update rate Card */}
          <div className='font-gilroysemibold text-sm text-black rounded-md p-4 bg-red-500 md:w-[86%] md:mt-0 mt-8'>
          <h2 className='text-xl text-white '> Sell Rates</h2>
             <p className='mb-1 text-white '>Update your sell rates for all currency</p>
             <Select
              //onChange={handleChanged}
              isClearable={false}
              //theme={selectThemeColors}
              //isMulti
              /* eslint-disable */
             // getOptionLabel={e => e.firstname + ' ' + e.lastname}
              /* eslint-enable */
              
             // getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
             <input className='rounded-md p-3 text-black mt-3 md:w-[60%]' type='number'/>
             <button className='bg-primary text-white p-3 ml-2 rounded-md'>Update 🚀</button>
         </div>
          {/* Update rate Card */}

      </div>
    </div>
    //Main Container
  )
}

export default Update