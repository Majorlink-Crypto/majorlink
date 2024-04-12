import axios from 'axios'
import React from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify';

const Update = () => {

  axios.defaults.baseURL = 'https://main.majorlink.co/api';

  const [data, setData] = React.useState([])
  
  const [sell, setSell] = React.useState();
  const [buy, setBuy] = React.useState();  


  const [options, setOption] = React.useState([]);

  const [update, setUpdate] = React.useState(false);

  React.useEffect(() => {

    const init = async () => {

      const { data: dx } = await axios.get("/services/list", {
        headers: {
          "Content-Type": "application/json"
        }
      })

      setData(dx)

      const opx = dx.map(({ name, id }, idx) => ({idx , id, value: name, label: name }));

      setOption(opx)
    
    }

    init();

  }, [update]);
  
  const [buyOption, setBuyOption] = React.useState();
  const [sellOption, setSellOption] = React.useState();

  const handleChanged = (e, type = 'buy') => {

      const { sell, buy } = data[e.idx]   

      if (type === 'sell') {
          setSell(sell);   
          setSellOption(e)
      }else{
          setBuy(buy);
          setBuyOption(e);
      }

  }


  const updateRate = async (type = 'buy') => {

      const newx = {};

      const { token } = JSON.parse(localStorage.getItem('user'));
      let selected;
      if (type === 'buy') {
          newx['buy'] = buy;
          selected = buyOption;
      }else if (type === 'sell') {
          newx['sell'] = sell;
          selected = sellOption;
        }

    try {
    await axios.patch(`/admin/services/${selected.id}`, newx, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    });
    
    setUpdate(newx);

    toast.success(`${type} rate updated successfully`);
    
  }catch (err) {
    if(err.response){
      toast.error("something went wrong, please try again later");
    }  
  }
 }

    // handle selection

  return (
      //Main Container
    <div className='m-4 md:mt-10'>

    <h2 className='md:px-16 text-2xl pt-16'>Quick Update Tab</h2>
    

      <div className='md:flex md:px-16 pt-5'>

          <div className='font-gilroysemibold text-sm text-black rounded-md p-4 bg-green-500 md:mr-10 md:w-[86%]'>
             <h2 className='text-xl text-white'> Buy Rates</h2>
             <p className='mb-1 text-white '>Update your buy rates for all currency</p>
             <Select
              onChange={(e) => handleChanged(e)}
              isClearable={false}              
              value={buyOption}
              name='colors'
              options={options}
              className='react-select'
              classNamePrefix='select'
            />
          <div className="flex mt-3 items-center">
            <input step={"any"} onChange={(w) => setBuy(w.target.value)} value={buy} className='rounded-md p-3 text-black w-full' type='number'/>
            <button onClick={() => updateRate()} className='bg-primary text-white min-w-[130px] p-3 ml-2 rounded-md'>Update 🚀</button>
         </div></div>
          {/* Update rate Card */}

          {/* Update rate Card */}
          <div className='font-gilroysemibold text-sm text-black rounded-md p-4 bg-red-500 md:w-[86%] md:mt-0 mt-8'>
          <h2 className='text-xl text-white '> Sell Rates</h2>
             <p className='mb-1 text-white '>Update your sell rates for all currency</p>
             <Select
              onChange={(e) => handleChanged(e, 'sell')}
              isClearable={false}
              name='colors'
              value={sellOption}
              options={options}
              className='react-select'
              classNamePrefix='select'
            />
          <div className="flex mt-3 items-center">
            <input step={"any"} onChange={(w) => setSell(w.target.value)} value={sell} className='rounded-md p-3 text-black w-full' type='number' />
            <button onClick={() => updateRate('sell')} className='bg-primary text-white min-w-[130px] p-3 ml-2 rounded-md'>Update 🚀</button>
          </div>
         </div>
          {/* Update rate Card */}

      </div>
    </div>
    //Main Container
  )
}

export default Update