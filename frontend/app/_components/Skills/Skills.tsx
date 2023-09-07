'use client'

import React from 'react';
import styles from "./Skills.module.scss";
import SectionTitle from "@/app/_components/SeactionTitle/SectionTitle";
import Image from "next/image";
import {useGetSkillsQuery} from "@/app/_store/api/skills";

const Skills = () => {

    const {data, isLoading, isError, isSuccess} = useGetSkillsQuery(null)

    return (
        <section className={styles.skills}>
            <div className={"container " + styles.container}>
                <SectionTitle btnText="Skills"
                              text="Навыки, инструменты и технологии, в которых я действительно хорош:"/>
                <div className={styles.skillsList}>
                    {isSuccess ? (
                        data.map(skill =>
                            <div key={skill.name} className={styles.skill}>
                                <Image className={styles.icon} src={process.env.NEXT_PUBLIC_API_URL + skill.img}
                                       alt={skill.name} width={64} height={64}/>
                                <p>{skill.name}</p>
                            </div>
                        )
                    ) : isLoading ? (
                            <h1>Skill is loading</h1>
                        ) :
                        isError && <h1>Error</h1>
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;