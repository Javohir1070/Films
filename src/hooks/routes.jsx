import React from 'react'
import { NowPlaying, Popular, TopRated, UpComing } from "../pages";
import { PATH } from "./path";

export const PageRoutes = [
    {
        id:1,
        path:PATH.nowPlaying,
        element:<NowPlaying/>
    },
    {
        id:2,
        path:PATH.popular,
        element:<Popular/>
    },
    {
        id:3,
        path:PATH.topRated,
        element:<TopRated/>
    },
    {
        id:4,
        path:PATH.upComing,
        element:<UpComing/>
    }
]

export const NavbarListMenu = [
    {
        id:1,
        path:PATH.nowPlaying,
        title:"Now Playing"
    },
    {
        id:2,
        path:PATH.popular,
        title:"Popular"
    },
    {
        id:3,
        path:PATH.topRated,
        title:"Top Rated"
    },
    {
        id:4,
        path:PATH.upComing,
        title:"Up Coming"
    }
]