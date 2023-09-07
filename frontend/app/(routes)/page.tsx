import Image from 'next/image'
import styles from './page.module.scss'
import photo from '../../public/programmer.png'
import {FiMapPin} from "react-icons/fi";
import {AiFillGithub} from "react-icons/ai";
import {SlSocialVkontakte} from "react-icons/sl";
import Link from "next/link";
import Skills from "@/app/_components/Skills/Skills";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={"container " + styles.container}>
                    <div className={styles.heroWrapper}>
                        <div>
                            <h1 className={styles.title}>Привет, я Григорий👋</h1>
                            <p className={styles.description}>Я full stack разработчик (React.js & Node.js)</p>
                        </div>
                        <div className={styles.location}>
                            <FiMapPin/><p>Самара, Россия</p>
                        </div>
                        <div className={styles.socials}>
                            <Link href='https://github.com/Grigoriy5544' target='_blank'><AiFillGithub/></Link>
                            <Link href='https://vk.com/grigoriy5544' target='_blank'><SlSocialVkontakte/></Link>
                        </div>
                    </div>
                    <Image className={styles.img} src={photo} alt="photo"/>
                </div>
            </section>
            <Skills/>
        </main>
    )
}
