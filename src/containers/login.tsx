import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.scss'
import swal from 'sweetalert';

const Login = (props) => {

    const [currName, setCurrName] = useState("")
    let navigate = useNavigate()

    async function verifyUser(userId: string){
        const url = "https://trebas-project-one.herokuapp.com/users/find-by-name?name=" + userId
        const response = await fetch(url, {method: 'GET'})
        if (response.status == 404){
          props.setUser("")
          openUserError()
          return
        }
        props.setUser(userId)
        navigate("/chat")
    }

    function openUserError(){
        swal({
          title: "No User Found",
          text: "Try again with a different user name",
          icon: "warning",
          dangerMode: true,
        })
      }

    return (
        <div className="main-container">
            <div className="content-container">
                <div className="banner-container">
                    <h1>ChatApp</h1>
                </div>
                <div className="credential-container_general">
                    <div className="credential-container">
                        <div className="input-container">

                            <label 
                                htmlFor="user_name" 
                                className='credential-label'
                            >Account Id</label>

                            <input 
                                type="text" 
                                name="user_name" 
                                id="user_name" 
                                className="credential-input" 
                                onChange={event => setCurrName(event.target.value)} 
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Login" 
                            className="credential-submit" 
                            onClick={() => { verifyUser(currName) }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login