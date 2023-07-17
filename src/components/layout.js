import {NavLink, Outlet} from 'react-router-dom'
function Layout(){
    return (
        <>
            <nav className={'navbar'}>
                <span><NavLink className="link" to={'/main/home'}>Home</NavLink></span>
                <span><NavLink className="link" to={'/main/educators'}>Educators</NavLink></span>
                <span><NavLink className="link" to={'/main/quiz'}>Quiz</NavLink></span>
                <span><NavLink className="link" to={'/main/about'}>About</NavLink></span>
                <span><NavLink className="link" to={'/login'}>Log out</NavLink></span>  
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout