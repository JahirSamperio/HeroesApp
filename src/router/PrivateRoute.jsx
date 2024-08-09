import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => { //El children es para que se le pueda anidar un hijo en el appRouter (HeroesRouter)

    const { logged } = useContext(AuthContext); //Busca si esta logeado o no en el context
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    

    return (logged) //Si esta logeado
        ? children  //Carga el componente que se le indique (HeroesRouter)
        : <Navigate to='/login' /> // Si no, lo redirecciona al login
}
