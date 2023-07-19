import {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { googleSignIn, uploadToCloud } from './firebase'
function Signup()
{
    const [image,setImg] = useState()
    const user = useRef()
    const email = useRef()
    const pass = useRef()
    const cpass = useRef()
    const [role,setRole] = useState()
    const navigate = useNavigate()
    const url = "http://127.0.0.1:5000/register"
    const [showPass,setShow] = useState("Show")
    const [cshowPass,setCShow] = useState("Show")
    
    const register = (e)=>{
        e.preventDefault()
        const data = {
        image:image,
        username:user.current.value,
        email:email.current.value,
        password:pass.current.value,
        role:role
        }
        axios.post(url,data).then(res => {
            if(res.status === 200)
            {
                navigate('/login')
            }
        })
    }

    const uploadImage = (e) => {
        // console.log(e.target.files[0])
        const file = e.target.files[0]
        const reader = new FileReader(file)
        reader.readAsDataURL(file)
        reader.onload = () => {
            const image = document.createElement('img')
            image.src = reader.result
            const width = 200
            image.onload = () => {
                const canvas = document.createElement('canvas')
                const ratio = width/image.width
                canvas.width = width
                canvas.height = image.height * ratio
                const context = canvas.getContext('2d')
                context.drawImage(image,0,0,canvas.width,canvas.height)
                const new_url = context.canvas.toDataURL("image/jpeg",80)
                // console.log(new_url)
                uploadToCloud(user.current.value,new_url).then(imageURL => setImg(imageURL))
            }
        }
    }

    const show = (pass,setShow) => {
        setShow(prev => {
        return (prev === "Show"? prev = "Hide" : prev = "Show")
        })
        pass.current.type === 'password' ? pass.current.type = 'text' : pass.current.type = 'password'
    }
    return (
        <>
        <form className={'form'} onSubmit={register}>
            <span className = {'heading'}>Sign Up</span>
            <img src={image} className={'image'} alt='avatar'/>
            <input type='file' accept='.jpg, .png' onChange={uploadImage}/>
            <label>Username</label>
            <input className = {'input'} type="text" id ="username" ref={user} required/>
            <label>Email</label>
            <input className = {'input'} type="email" ref={email} required/>
            <label>Role</label>
            <div className={'role'} >
                <input type='radio' name='role' value={'Student'} onChange={e => setRole(e.target.value)}/>
                <label>Student</label>
                <input type='radio' name='role' value={'Teacher'} onChange={e => setRole(e.target.value)}/>
                <label>Teacher</label>
            </div>
            <label>Password</label>
            <input className = {'input'} type="password" ref={pass} required/>
            <span className = {'show'} onClick={() => show(pass,setShow)}>{showPass}</span>
            <label>Confirm Password</label>
            <input className = {'input'} type="password" ref={cpass} required/>
            <span className = {'show'} onClick={() => show(cpass,setCShow)}>{cshowPass}</span>
            <input className = {'submit'} type ="submit" value="Register"/>
            <input className={'submit'} type="button" onClick={() => googleSignIn(setImg,user,email)} value="continue with google"/>
            <span className={'signup'} >Already have an account? <Link to={'/login'}>Sign in</Link></span>
        </form>
        </>
    )
}

export default Signup