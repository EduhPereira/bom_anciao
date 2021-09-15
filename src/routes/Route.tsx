import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useLogin } from "../Providers/Login-Voluntaries";

interface Props extends RouteProps{
    isPrivate?: boolean,
    component: ComponentType
}

export const Route = ({isPrivate = false, component: Component, ...rest}: Props) => {
    const {userToken} = useLogin()
    return(
        <ReactRoute {...rest} render={() => isPrivate === !!userToken ? <Component/> : <Redirect to={isPrivate ? '/login-voluntary': '/my-events'}/>}/>
    )
}