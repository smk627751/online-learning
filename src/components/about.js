function About()
{
    return (
        <>
            <div className={"about"}>
                <div className={"content"}>
                    <h1 className={"heading"}>About us</h1>
                    <p>
                        Our goal is to train the students with experts and help the to move up in their career.
                        There are many expertize staff available to teach the concepts and hands on training for students.
                        We have pipelined many companies and train accordingly. So that students can learn things and also
                        they can get a job opportunity.
                    </p>
                </div>
                <form className={'form contact'}>
                    <span className = {'heading'}>Contact Us</span>
                    <label>Name</label>
                    <input className = {'input'} type="text" id ="username" name="user" required/>
                    <label>Email</label>
                    <input className = {'input'} type="email" name="email" required/>
                    <label>Message</label>
                    <textarea className={"input"} name="message"/>
                    <input className = {'submit'} type ="submit" value="Send"/>
                </form>
            </div>
        </>
    )
}

export default About