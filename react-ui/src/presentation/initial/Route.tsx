import { ReactElement } from "react"
import MainPage from "../page/MainPage"

export enum Route {
    Main = "/"
}

export var routes: { path: string, element: ReactElement }[] = [
    { path: Route.Main, element: <MainPage/> }
]