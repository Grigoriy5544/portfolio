'use client'

import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss'
import type {RootState} from "@/app/_store/store";
import {FiSun} from "react-icons/fi";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {useTypedSelector} from "@/app/_hooks/useTypedSelector";
import {useActions} from "@/app/_hooks/useActions";
import {ETheme} from "@/app/_types/theme.types";
import Link from "next/link";

const Header = () => {
    const {theme} = useTypedSelector((state: RootState) => state.themeReducer)
    const {toggleTheme, refreshTheme} = useActions()

    useEffect(() => {
        refreshTheme()
    })

    return (
        <header className={"container " + styles.header}>
            <Link href="/" className={styles.logo}><h1>Grigoriy</h1></Link>
            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link href="/projects">Проекты</Link>
                    </li>
                </ul>
                <div className={styles.navLine}></div>
                <div onClick={() => toggleTheme()} className={styles.themeIcon}>
                    {theme === 'dark' ? <BsFillMoonStarsFill/> : <FiSun/>}
                </div>
            </nav>
        </header>
    );
};

export default Header;