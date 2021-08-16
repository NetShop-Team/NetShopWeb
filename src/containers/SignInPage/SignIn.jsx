import React, { useState } from 'react';
import SignInForm from './SignInForm';
import s from './SignIn.module.css';

function SignIn( ){
    


    return(
        <div >
             <div>
             <SignInForm SignIn={SignIn} />
                </div>
        
        </div>
    )
}

export default SignIn;