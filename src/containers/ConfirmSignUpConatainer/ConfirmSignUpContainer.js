import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavbarComponent/NavbarComponent";
import { useAuth } from "../../contexts/AuthContext";
import { ConfirmSignUp } from "../../services/AuthService";

const SignUpConfirm = () => {
    const [code, setCode] = useState('');
    // const [username, setUsername] = useState('ranulnavoijith+04@gmail.com')
    const { currentUser, handleUser } = useAuth()
    const navigate = useNavigate()
    const { company } = useAuth()

    async function confirmSignUp() {
        try {
            const res = await ConfirmSignUp(currentUser.username, code)

            const userData = {
                ...currentUser,
                confirmed: true
            }
            
            handleUser(userData,company)
            if(currentUser.isSeeker){
                navigate('/seeker-dashboard')
            }else{
                navigate('/company-dashboard')
            }
            
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    //listener for auth
    // function listenToAutoSignInEvent() {
    //     Hub.listen('auth', ({ payload }) => {
    //         const { event } = payload;
    //         if (event === 'autoSignIn') {
    //             const user = payload.data;
    //             // assign user
    //         } else if (event === 'autoSignIn_failure') {
    //             // redirect to sign in page
    //         }
    //     })
    // }

    return(
        <div>

            <Navbar />
            <div className="container">
                <div className="row h-100 p-5 align-items center justify-content-center ">
                    <label className="form-label text-start">Confirmation Code</label>
                    <input type="text" className="form-control" placeholder="Confirmation Code" onChange={ e => setCode(e.target.value)} />
                    <div className="mb-3 text-start">
                        <button className="btn btn-primary" onClick={ _ => confirmSignUp()}>Verify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpConfirm;