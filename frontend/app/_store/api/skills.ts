import {api} from "@/app/_store/api/api";
import {ISkill} from "@/app/_types/skill.types";

const skillsApi = api.injectEndpoints({
    endpoints: builder => ({
        getSkills: builder.query<ISkill[], null>({
            query: () => ({
                url : 'skills',
            }),
            providesTags: ['Skills']
        })
    })
})

export const {useGetSkillsQuery} = skillsApi