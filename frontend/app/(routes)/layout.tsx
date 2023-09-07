import '../globals.scss'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import Header from "@/app/_components/Header/Header";
import {Providers} from "@/app/_store/provider";
import {ReactNode} from "react";

const montserrat = Montserrat({subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
    title: 'Grigoriy Kotsenko',
    description: 'Портфолио fullstack разработчика Григория Коценко',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <Providers>
            <Header/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
