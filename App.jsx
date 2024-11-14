import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)
  let username= {
    name : 'Puma Shoes',
    price : '$99'
  }
  let newArr= [1,2,3,4,5]

  return (
    <>
    <div className=" h-auto  max-w-full ">
      {/* <h1 className="bg-green-600 p-5 rounded-3xl border-yellow-300 border-4 border-dashed mb-5">Hello There!</h1> */}
      <Card username={username.name}  price={username.price}></Card>
      <Card price={newArr[2]}></Card>
      <Card></Card>
    </div>
    </>
  )
}

export default App
