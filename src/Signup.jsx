





import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup(){
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function FetchData(){
        if(name.trim() === "" || email.trim() === "" || password.trim() === ""){
            alert("Enter the credentials")
            return
        }

        const formData = {
            myName: name,
            myEmail: email,
            myPassword: password
        }

        try {
            const result = await fetch("https://685b813489952852c2d9c4ae.mockapi.io/info/hello", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if(result.ok){
                alert("Account Created")
                setName("")
                setEmail("")
                setPassword("")
                navigate("/Login")
            } else {
                alert("Account creation failed")
            }
        } catch (error) {
            console.error("Error creating account:", error)
            alert("Something went wrong")
        }
    }

    return(
        <div className="signup-container">
            <div className="signup-card">
                <h2>Create Account</h2>
                
                <label>Enter the Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />

                <label>Enter the Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />

                <label>Enter the Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />

                <button onClick={FetchData}>Signup</button>
            </div>
        </div>
    )
}

export default Signup
