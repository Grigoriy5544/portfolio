import {api} from "@/app/_store/api/api";
import {IProject} from "@/app/_types/project.type";

const projectsApi = api.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query<IProject[], null>({
            query: () => ({
                url : 'projects',
                providesTags: ['Projects']
            })
        }),
        getProject: builder.query<IProject, number>({
            query: id => ({
                url : `projects/${id}`,
            })
        })
    })
})

export const {useGetProjectsQuery, useGetProjectQuery} = projectsApi