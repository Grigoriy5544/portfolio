'use client'

import {Provider} from "react-redux";
import {store} from './store'
import {ReactNode, useEffect, useState} from "react";
import LoaderSpinner from "@/app/_components/LoaderSpinner/LoaderSpinner";

export function Providers({children}: { children: ReactNode }) {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(false)
    })

    if (loading)
        return (<LoaderSpinner/>)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}