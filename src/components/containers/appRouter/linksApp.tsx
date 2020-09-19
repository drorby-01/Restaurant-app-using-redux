import React from "react"
import { IRoute, IProps } from "./"
import { Link } from "react-router-dom";


export default function LinksApp(props: IProps): any {
    return props.routes.sort((r1, r2) => r1.order - r2.order).filter((route: IRoute) => route.isVisible).map((route: IRoute) => {
        const { path, name } = route;
        return <Link key={name} to={path}> {name} </Link>
    })
}