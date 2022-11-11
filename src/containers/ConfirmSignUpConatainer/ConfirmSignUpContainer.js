import React, { useState } from "react";
import { Auth, Hub } from "aws-amplify";

const SignUpConfirm = () => {
    const [code, setCode] = useState('');
    const [username, setUsername] = useState('ranulnavoijith@gmail.com')

    async function confirmSignUp() {
        try {
            console.log("hello verify")
          await Auth.confirmSignUp(username, code);
          window.location.href = "/seeker-dashboard";
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    function listenToAutoSignInEvent() {
        Hub.listen('auth', ({ payload }) => {
            const { event } = payload;
            if (event === 'autoSignIn') {
                const user = payload.data;
                // assign user
            } else if (event === 'autoSignIn_failure') {
                // redirect to sign in page
            }
        })
    }

    return(
        <div className="container">
            <div className="row vh-100 p-5 align-items center justify-content-center ">
                <label className="form-label text-start">Confirmation Code</label>
                <input type="text" className="form-control" placeholder="Confirmation Code" onChange={ e => setCode(e.target.value)} />
                 <div className="mb-3 text-start">
                    <button className="btn btn-primary" onClick={ _ => confirmSignUp()}>Verify</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpConfirm;