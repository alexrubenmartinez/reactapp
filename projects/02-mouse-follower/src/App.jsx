import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse=()=>{
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({x:0,y:0})

    useEffect(()=>{
      console.log('effect',{enabled})

      const handleMove = (event) =>{
       const {clientX, clientY} = event
       console.log('handleMove', {clientX,clientY})
       setPosition({x:clientX,y:clientY})
      }

      if (enabled){
        window.addEventListener('pointermove',handleMove)
      }
      return () =>{
        window.removeEventListener('pointermove',handleMove)
      }
    },[enabled])
  return(
    <>
    <div style={{
      position:'absolute',
      backgroundColor:'rgba(0,0,0,0.5)',
      borderRadius:'50%',
      border: '3px solid #fff',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px,${position.y}px)`
    }}>

    </div>
    <button onClick={()=>setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {

  return (
    <main>
      <FollowMouse></FollowMouse>
    </main>
  )
}

export default App
