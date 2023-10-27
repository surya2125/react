import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  const changeColor=(ele)=>{
    setColor(ele.target.name)
console.log(ele.target.name);
  }

 return (
<div className={`w-full h-screen duration-200`} style={{
  backgroundColor:color
}}>
<div className='absolute flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl'>
  <button name='red' className='outline-none px-4 py-1 shadow-lg rounded-full text-black bg-red-600' onClick={changeColor}>Red</button>
  <button name='blue' className='outline-none px-4 py-1 shadow-lg rounded-full text-black bg-blue-500' onClick={changeColor}>Blue</button>
  <button name='green' className='outline-none px-4 py-1 shadow-lg rounded-full text-black bg-green-500' onClick={changeColor}>Green</button>
  <button name='purple' className='outline-none px-4 py-1 shadow-lg rounded-full text-black bg-purple-500' onClick={changeColor}>Purple</button>

</div>
</div>
</div>
  )
}

export default App
