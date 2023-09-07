import styles from './ProjectItem.module.scss'
import {IProject} from "@/app/_types/project.type";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
    project: IProject
}

const ProjectItem = ({project}: ItemProps) => {
    return (
        <Link className={styles.item} href={'/projects/' + project.id}>
            <h3 className={styles.title}>{project.name}</h3>
            <Image className={styles.img} width={370} height={278} src={process.env.NEXT_PUBLIC_API_URL + project.img} alt={project.name}/>
        </Link>
    );
};

export default ProjectItem;