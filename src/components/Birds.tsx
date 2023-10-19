import BIRDS from 'vanta/dist/vanta.birds.min'
import { useRef, useEffect, useState } from 'preact/hooks'

export function Birds() {
  const myRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState()

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          backgroundColor: '#fff',
          backgroundAlpha: 0,
          color2: '#008aff',
          color1: '#09262a',
          quantity: 4,
          birdSize: 1,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef} className='w-full h-full max-h-screen'>
      {' '}
    </div>
  )
}
