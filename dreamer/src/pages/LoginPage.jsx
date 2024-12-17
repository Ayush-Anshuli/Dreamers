// import React from 'react'
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from '../firebase/firebase';
// import { getAuth } from "firebase/auth";

// function LoginPage() {

//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();

//     const handleLogin = () => {
//         signInWithPopup(auth,provider).then((result) => {
//             const user = result.user

//         }).catch((error) => {
//             const credential = GoogleAuthProvider.credentialFromError(error)
//         });
        
//     }

//   return (
//     <div className='h-screen w-full flex items-center justify-center'>
//         <button className='bg-blue px-8 py-2 text-white ' onClick={handleLogin}>Login</button>
//     </div>
//   )
// }

// export default LoginPage