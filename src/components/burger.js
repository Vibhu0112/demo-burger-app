import React, { useState } from 'react'
import "../App.css"
import { createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut , signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebase-config"


function Burger() {

    const [count ,setCount] = useState(0);
    const [qty ,setQty] = useState(1);
    const [price,setPrice] = useState(20)
    const [aalu,setAalu] = useState(0);
    var aaluPrice = 10
    const [paneer,setPaneer] = useState(0);
    const [tomato,setTomato] = useState(0);
    var paneerPrice = 15
    const [cheese,setCheese] = useState(0);
    var cheesePrice =20

    const item1 = Array.from({ length: aalu }, (_, i) => (
        <div key={i}> 
            {/* <img className='aalu'
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHbbMm3rzedgj_q1Y7EyZoOashyjGk6_IOoCBHYWhZtMhp4toR8_1up3GkNzzsqz2kew&usqp=CAU" 
             alt="" /> */}
        

        <svg width="125" height="8">
         <rect height="12" className='aalutikki' />
      </svg>
        
       
        </div>
      ));

      const item2 = Array.from({ length: paneer }, (_, j) => (
        <div key={j}>
            {/* <img className='paneer'
            src="https://tiimg.tistatic.com/fp/2/007/729/1-kilograms-soft-and-spongy-rich-in-protien-pure-and-fresh-raw-paneer-078.jpg" 
            alt="" /> */}

     <svg width="125" height="8">
         <rect height="12" className='paneerslice' />
      </svg>
        </div>
      ));

      const item3 = Array.from({ length: cheese }, (_, i) => (
        <div key={i}> 
        {/* <img className='cheese'
        src="https://www.baskethunt.com/wp-content/uploads/2021/06/go-processed-plain-cheese-slices-750-g-pouch-2-20210324.jpg" 
        alt="" /> */}


     <svg width="125" height="8">
         <rect height="12" className='cheeseslice' />
      </svg>
        </div>
      ));
     

      const item4 = Array.from({length: tomato},(_,i) => (
        <div key={i}>
           {/* <img  className='cheese'
            src="https://media.istockphoto.com/id/92185667/photo/fresh-tomato-slices.jpg?b=1&s=170667a&w=0&k=20&c=l9zL0SEktAaXNrAkJvQeUHRpcR97me0VPZpvSf6v_qo=" 
           alt="" /> */}

     <svg width="125" height="8">
         <rect height="12" className='tomatoslice' />
      </svg>
        </div>
      ))

    function inQty(){
       setQty(qty+1)
       console.log(qty);
       console.log(price);
    }


    function deQty(){
        if(qty>1)
        setQty(qty-1)
     }
    function incrementAalu(){
        setAalu(aalu+1);
        setPrice(price+aaluPrice)
    }

    function decrementAalu(){
     if(aalu>0){
        setAalu(aalu-1)
        setPrice(price-aaluPrice)}
        else 
        return null
    }
    function incrementPaneer(){
        setPaneer(paneer+1);
        setPrice(price+paneerPrice)
    }

    function decrementPaneer(){
        if(paneer>0){
           setPaneer(paneer-1)
           setPrice(price-paneerPrice)}
           else 
            return null
       }

       function incrementTomato(){
        setTomato(tomato+1);
        setPrice(price)
    }

    function decrementTomato(){
        if(tomato>0){
           setTomato(tomato-1)
           setPrice(price)}
           else 
            return null
       }

       function incrementCheese(){
        setCheese(cheese+1);
        setPrice(price+cheesePrice)
    }

    function decrementCheese(){
     if(cheese>0){
        setCheese(cheese-1)
        setPrice(price-cheesePrice)
    }
    else
      return null
}  


// const [registerEmail,setRegisterEmail] = useState("")
// const [registerPassword,setRegisterPassword] = useState("")
// const [loginEmail,setLoginEmail] = useState("")
// const [loginPassword,setLoginPassword] = useState("")
// const [ user ,setUser] = useState({})

// onAuthStateChanged(auth , (currentUser) => {
//     setUser(currentUser)
// })

// const register = async() =>{
//     try{
//   const user =await createUserWithEmailAndPassword(auth , registerEmail , registerPassword)
//   console.log(user);
// } catch(error){
//     console.log(error.message);
// }
// }

// const login = async() =>{
//     try{
//         const user =await signInWithEmailAndPassword(auth , loginEmail , loginPassword)
//         console.log(user);
//       } catch(error){
//           console.log(error.message);
//       }
// }


// const logout = async() => {
//   await signOut(auth)
// }
  return (

    <div className='main'><h1 className='h1'>burger ordering site</h1>
 {/* <h4 className='user'> {user?.email}</h4>
     <div className=' register'>
        <div>
        <h2>Register User</h2>
        <input className='input' placeholder='Email...' onChange={(e) => {setRegisterEmail(e.target.value)}}/>
        <input className='input' type='password' placeholder='Password...' onChange={(e) => {setRegisterPassword(e.target.value)}}/>

        <button className='input' onClick={register}>Register</button>
     </div>


     <div>
        <h2>Login User</h2>
        <input className='input' placeholder='Email...' onChange={(e) => {setLoginEmail(e.target.value)}}/>
        <input className='input' placeholder='Password...' onChange={(e) => {setLoginPassword(e.target.value)}}/>

        <button onClick={login}>Login</button>

       


        <button onClick={logout}>Logout</button>

     </div>
     </div> */}




     <button className=''>Previous orders</button>

        <div className='container'>
        <div className='burger'>
        {/* <img className='bun'
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiAbA05_F7VNtEkh6ZRoCwvGHOru-1lL5vQ&usqp=CAU" alt="" /> */}

         <div className='trapezoidA'></div>
        <p>{item1}</p>
        <p>{item2}</p>
        <p>{item4}</p>
        <p>{item3}</p>

       
        {/* <img className='bun' 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRiElRGm3HcC4ivZKOoPDbdW856A9bUETeQ&usqp=CAU" alt="" /> */}
          <div className='trapezoidRe'></div>

        </div> 

        <div className='tasks'>
            
            <p> Price : {price}</p>
            <div className='buttons'>

            <div className='tasks'>
            <button className='button' onClick={incrementAalu}>Add</button>
            <h4 className='slice'>Aalu Tikki</h4>
            <button className='button' onClick={decrementAalu}>Remove</button>
            </div>

            <div className='tasks'>
            <button className='button' onClick={incrementPaneer}>Add</button>
            <h4 className='slice'>Paneer</h4>
            <button className='button' onClick={decrementPaneer}>Remove</button>
            </div>
            <div className='tasks'>
            <button className='button' onClick={incrementTomato}>Add</button>
            <h4 className='slice'>tomato</h4>
            <button className='button' onClick={decrementTomato}>Remove</button>
            </div>

            <div className='tasks'>
            <button className='button' onClick={incrementCheese}>Add</button>
            <h4 className='slice'> Cheese </h4>
            <button className='button' onClick={decrementCheese}>Remove</button>
            </div>
            </div>
        </div>
        </div>
   <div className='qty'>
   <div className='tasks'>  
<button className='button' onClick={inQty}>+</button>
<h4 className='slice'>Qty : {qty}</h4>
<button className='button'  onClick={deQty}>-</button>

</div>
</div>

<div>
    <h2 className='total'>Total Payable : {qty*price}</h2>
</div>

<button className='orderbutton'>Place Order</button>
<div>Terms and Conditions</div>

    </div>
  )
}

export default Burger