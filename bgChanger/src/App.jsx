import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('#C30E59');

  const changeColor = (value) => {
    setBgColor(value);
  }

  return (
    <>
      <div className='h-screen font-bold text-4xl flex flex-col items-center justify-center' 
      style={{backgroundColor: bgColor}}
      >
        hello 

        <button className='bg-black text-white' onClick={() => changeColor('#C62300')}> red </button>
        <button className='bg-black text-white' onClick={() => changeColor('#3D3D3D')}> black </button>

        <button className='bg-black text-white' onClick={() => changeColor('#578E7E')}> green </button>
        <button className='bg-black text-white' onClick={() => changeColor('#F5ECD5')}> white </button>

      </div>
    </>
  )
}

export default App
