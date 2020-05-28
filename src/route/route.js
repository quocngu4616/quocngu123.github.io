import React from "react";
import Admin from '../Screens/Admin'
import Home from '../Screens/Home'
import Detail from '../Screens/Detail'
import CourseDetail from '../Screens/DetaiItem'
import CartDetail from '../Screens/DetailCart'
import Login from '../Screens/Login'
import Signin from '../Screens/Signin'
import Info from '../Screens/Info'
export const routes = [
    {
        path: '/',
        exact: true,
        main: ({ history }) => <Home history={history} />
    },
    {
        path: '/detail',
        exact: true,
        main: ({ history, match }) => <Detail history={history} math={match} />
    },
    {
        path: '/courses/:id',
        exact: true,
        main: ({ match }) => <CourseDetail math={match} />
    },
    {
        path: '/cart',
        exact: false,
        main: ({ match }) => <CartDetail math={match} />
    },
    {
        path: '/login',
        exact: false,
        main: ({ history }) => <Login history={history} />
    },
    {
        path: '/signin',
        exact: false,
        main: ({ history }) => <Signin history={history} />
    },
    {
        path: "/admin",
        exact: false,
        main: () => <Admin />
    },
    {
        path: '/info',
        exact: false,
        main: ({ history }) => <Info history={history} />
    },
]