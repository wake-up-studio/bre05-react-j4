import {useState} from 'react';

const Login = (props)=>{
    const [login, setLogin] = useState({
        status: false,
        email: "",
        password: "",
    });
    
    function isOnline(){
        if(login.status===false && login.email!=="" && login.password!==""){
            let beTrue = Object.assign({}, login, {status: true});
            setLogin(beTrue);
        }
        console.log(login);
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        setLogin(event.target.email.value);
        setLogin(event.target.password.value);
    };
    
    const handleChangeEmail = (event) =>{
        let changeEmail = Object.assign({}, login, {email : event.target.value});
        setLogin(changeEmail);
        console.log(login);
    };
    
    const handleChangePassword = (event) =>{
        let changePassword = Object.assign({}, login, {password : event.target.value});
        setLogin(changePassword);
        console.log(login);
    };
    
    if(login.status===true){
        return(
            <p>Vous êtes connectés</p>
        );
    }
    else{
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChangeEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChangePassword}
                    />
                </div>
                <button type="submit" onClick={isOnline}>Connexion</button>
            </form>
        );
    }
    
};

export default Login;