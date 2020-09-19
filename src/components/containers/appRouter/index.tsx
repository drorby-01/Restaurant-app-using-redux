import React from "react"
import { Switch } from "react-router-dom";
import RoutesApp from "./routesApp"
import { routesConfiguration } from "./config";

export interface IRoute {
    component: any,
    path: string,
    name?: string,
    exact?: boolean,
    isVisible: boolean,
    order: number
}

export interface IProps {
    routes: Array<IRoute>
}



export default function AppRouter() {
    return <Switch>
        <RoutesApp routes={routesConfiguration} />
    </Switch>
}