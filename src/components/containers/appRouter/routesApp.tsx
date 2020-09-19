import React from "react"
import { IRoute, IProps } from "./"
import { Route } from "react-router-dom";

export default function RoutesApp(props: IProps): any {
    return props.routes.map((route: IRoute) => <Route key={route.name} {...route} />);
}