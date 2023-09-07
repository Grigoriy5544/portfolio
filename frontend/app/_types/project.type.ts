import {ISkill} from "@/app/_types/skill.types";

export interface IProject {
    id: number
    name: string
    img: string
    bigImg: string
    skills: ISkill[]
}