import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {

    const [active,setActive] = React.useState(false);

    const data = useSelector((state) => state.userData)

    const dispatch = useDispatch();

    console.log("data is:",data)

    const setState = (active)={
    
    }
  return (
  <>

  <h1>user dashboard</h1>

  {
    !active ? <button onClick={()=> setState(active)}> offline</button> : <button onClick={()=> setState(active)}> online</button>
  }

  <br />


  <span>{data.user[0]}</span>



 








  
  </>
  )
}

export default Dashboard