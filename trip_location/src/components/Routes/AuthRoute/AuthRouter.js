import React, {useEffect} from 'react';
import {useRecoilState} from "recoil";
import {authenticatedState} from "../../../atoms/Auth/AuthAtoms";
import {useQuery} from "react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AuthRouter = ({ path, element }) => {
    const navigate = useNavigate();
    const [authState, setAuthState] = useRecoilState(authenticatedState);

    const authenticated = useQuery(["authenticated"], async () => {
        const option = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        return await axios.get('http://localhost:8080/api/v1/auth/authenticated', option)
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                if(response.data) {
                    setAuthState(true);
                }
            }
        }
    });


    useEffect(() => {
        const authenticatedPaths = ["/user" ,"/"];
        const authPath = "/auth";
        if(authState && path.startsWith(authPath)) {
            navigate("/");
        }

        if(!authState && authenticatedPaths.filter(authenticatedPath => path.startsWith(authenticatedPath)).length > 0) {
            navigate("/auth/login")
        }
    },[authState, path, navigate]);

    if (authenticated.isLoading) {
        return (<div>loading...</div>);
    }

    return element;


};

export default AuthRouter;