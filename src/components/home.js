
function Home()
{
    let data = sessionStorage.getItem('credentials')
    data = JSON.parse(data)
    return (
        <div className="home">
            <img src={data.image} className={'image'} alt="avatar"/>
            <h1 className="heading">Welcome back! {data.username}</h1>
        </div>
    )
}

export default Home