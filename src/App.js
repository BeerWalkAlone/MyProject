import React, {useState} from 'react'
// import Home from './components/Home'
// import Contrat from './components/contrat'
import Test from './test'

export default function App() {
  // const [name, setname] = useState("beer")
  // const [num, setnum] = useState(10)
  const [data, setdata] = useState([1,2,3,4,5,6])

  const [personal, setpersonal] = useState ([
    {name : 'jack', age: 27},
    {name : 'beer', age: 25},
    {name : 'dy', age: 20},
    {name : 'xai', age: 20},
  ])
  return (
    <div>
      
      {/* <Home beer={name} setname={setname} />
      
      <Contrat number = {num} setnum={setnum}/> */}
      {/* {data.map(array => <h1>{array}</h1>)} 

      {personal.map (setdata =>
        <div>
          <h1>{setdata.name}</h1>
          <h2>{setdata.age}</h2>
        </div>
        )}     */}

        <Test data ={data} personal = {personal}/>
    </div>
  )
}
