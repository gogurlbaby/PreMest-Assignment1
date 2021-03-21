function  Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function onUpdateUsername(e){
        setUsername(e.target.value);
    }

    function onUpdateEmail(e){
        setEmail(e.target.value);
    }

    function onUpdatePassword(e){
        setPassword(e.target.value)
    }

    function submit(){

    }

    return(

        <form>
          <div>
              <h1>Login Here</h1>
          </div>

        
            <div className="form-group">
                <label> Enter Username</label>
                <input type="text" onChange={onUpdateUsername} className="form-control"/>
            </div>

            <div className="form-group">
                <label> Enter Email</label>
                <input type="text" onChange={onUpdateEmail} className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={onUpdatePassword}  className="form-control"/>
            </div>
            <button className="login" onClick={submit}>Login</button>
        </form>
    )
}


export default Login;