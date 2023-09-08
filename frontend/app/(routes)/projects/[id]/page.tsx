'use client'

import styles from './Project.module.scss'
import {useGetProjectQuery} from "@/app/_store/api/projects";
import Image from "next/image";
import React from "react";

interface PageProps {
    params: {
        id: number
    }
}

const Page = ({params}: PageProps) => {
    const {data: project, isLoading, error} = useGetProjectQuery(params.id)


    if (isLoading)
        return <h1>Загрузка...</h1>

    type ErrorDataType = {
        message: string;
        errorObject: Object;
        in: string;
        info: string;
    }


    type CustomerError = {
        data: ErrorDataType;
        status: number;
    };


    if (error) {
        const err = error as CustomerError;
        return <h1>{err.data.message}</h1>;
    }

    return (
        <div className={"container " + styles.container}>
            <div className={styles.card}>
                {project && (
                    <>
                     <h1>{project.name}</h1>
                        <Image className={styles.img} height={576} width={768}
                            src={process.env.NEXT_PUBLIC_API_URL + project.bigImg} alt={project.name}/>
                        <div className={styles.skills}>
                            {project.skills.map(skill =>
                                <div key={skill.name} className={styles.skill}>
                                    <Image className={styles.icon} src={process.env.NEXT_PUBLIC_API_URL + skill.img} alt={skill.name} width={64}
                                        height={64}/>
                                    <p>{skill.name}</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Page