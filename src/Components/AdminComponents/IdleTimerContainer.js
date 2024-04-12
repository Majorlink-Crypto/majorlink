import {React, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import { toast } from 'react-toastify'
// ** React Imports
import { useNavigate } from 'react-router-dom'


function IdleTimerContainer() {
  
  const navigate = useNavigate()

  const logout = () => {
    navigate('/adminye')
    localStorage.clear()
  }


    const idleTimerRef = useRef(null)
    const onIdle = () => {
        toast.warning('Session Timeout')
        logout()
    }
  return (
    <div>
      {/*The time calculation is */}
        <IdleTimer ref={idleTimerRef} timeout={40 * 1000 } onIdle={onIdle}></IdleTimer>
    </div>
  )
}

export default IdleTimerContainer