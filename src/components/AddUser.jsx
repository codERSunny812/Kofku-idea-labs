import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../store/Slice';

const AddUser = () => {
    const [email,setEmail] = useState("");

    const data = useSelector((state) => state.userData )


    console.log("user data",data)

    const navigate = useNavigate()

    const dispatch = useDispatch();


    const handleClick  = (e)=> {
        e.preventDefault();

        try {
            if(!email || email === null){
                alert("email is important");
            }

            const isMailPerferct = email.includes("@");
             
            if(!isMailPerferct){
                alert("mail is not valid")
            }

            dispatch(addUser(email,"online"))

           navigate('/home')

       

        } catch (error) {
            console.log("error",error)
        }

    }


  return (
   <>
   <h1>add  user</h1>
   <input type="text"
   value={email}
   onChange={(e)=> setEmail(e.target.value)}
/>

<button onClick={(e)=> handleClick(e)}> submit</button>
   </>
  )
}

export default AddUser