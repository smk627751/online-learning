import {useRef, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Login()
{
    const user = useRef()
    const pass = useRef()
    const url = "http://127.0.0.1:5000/login"
    const navigate = useNavigate()
    const [showPass,setShow] = useState("Show")
    const login = (e)=>{
        e.preventDefault()
        const data = {
        username:user.current.value,
        password:pass.current.value
        }
        axios.post(url,data).then(res => {
            console.log(res.data)
            if(res.data.status === "Success")
            {
                sessionStorage.setItem('credentials',JSON.stringify(res.data))
                navigate('/main/home')
            }
        })
    }
    const show = () => {
        setShow(prev => {
        return (prev === "Show"? prev = "Hide" : prev = "Show")
        })
        pass.current.type === 'password' ? pass.current.type = 'text' : pass.current.type = 'password'
    }
    return (
        <>
        <form className={'form'} onSubmit={login}>
            <span className = {'heading'}>Login</span>
            <label>Username</label>
            <input className = {'input'} type="text" id="username" ref={user} required/>
            <label>Password</label>
            <input className = {'input'} type="password" id="password" ref={pass} required/>
            <span className = {'show'} onClick={() => show()}>{showPass}</span>
            <input className = {'submit'} type ="submit" value="Login"/>
            <span className={'signup'} >Dont have an account? <Link to={'/signup'}>Sign up</Link></span>
        </form>
        </>
    )
}

export default Login