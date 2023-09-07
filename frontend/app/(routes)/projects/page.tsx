'use client'

import styles from './Projects.module.scss'
import {useGetProjectsQuery} from "@/app/_store/api/projects";
import ProjectItem from "@/app/_components/ProjectItem/ProjectItem";

export async function generateMetadata({ params, searchParams }: any) {
    return {
        title: 'Проекты',
        description: 'Grigoriy Kotsenko projects',
    }
}

export default function Projects() {
    const {data, isSuccess, isLoading} = useGetProjectsQuery(null)

    return (
        <div className={"container " + styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projects}>
                {isSuccess &&
                    data?.map(i => (
                        <>
                            <ProjectItem key={i.id} project={i}/>
                            <ProjectItem key={i.id} project={i}/>
                            <ProjectItem key={i.id} project={i}/>
                        </>
                    ))}
            </div>
        </div>
    )
}
