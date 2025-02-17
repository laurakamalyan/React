import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUserReduce} from "../slice/loginSlice.js"

function Login() {
    const users = [
        { email: "ann@mail.ru", password: "pass" },
        { email: "john@mail.ru", password: "pass" },
        { email: "tom@mail.ru", password: "pass" },
    ];

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const loginUser = useSelector(state => state.login.user);

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    }, [user]);

    const handleLogin = (e) => {
        e.preventDefault();

        const isUserFound = users.some(u => u.email === user.email && u.password === user.password);
        if (isUserFound) {
            dispatch(loginUserReduce(user));
        } else {
            console.log("User don't found!");
        }
    };

    useEffect(() => {
        if (loginUser) {
            console.log(loginUser);
        }
    }, [loginUser])

    return (
        <form>
            <input type="email" name="email" placeholder="Email" onChange={handleChange}/> <br/>
            <input type="password" name="password" placeholder="Password" onChange={handleChange}/> <br/>
            <button onClick={handleLogin}>Log In</button>
        </form>
    );
}

export default Login;