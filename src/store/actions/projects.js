import { LOAD_PROJECTS, REMOVE_PROJECT } from '../actionTypes';

/* Action creators */
export const loadProjects = projects => ({
  type: LOAD_PROJECTS,
  projects
});


export const removeProject = name => ({
    type: REMOVE_PROJECT,
    name
});


/* Thunk */
export const fetchProjects = () => {
    return dispatch => {
        return dispatch(loadProjects(projects))
    }
};

export const deleteProject  = (project_name) => {
    return dispatch => {
        return dispatch(removeProject(project_name))
    }
};


const projects = [
    {
        name: 'Pay n Go',
        team: {
            product: [ { name: 'Anna', role: 'PM - FrontEnd'}, { name: 'John', role: 'PM - BackEnd'} ],
            qa: [ { name: 'Dan', role: 'FE tester'}, { name: 'Melany', role: 'BE tester'} ],
            dev: [ { name: 'Kath', role: 'FE dev'}, { name: 'Colt', role: 'BE dev'} ],
            design: [ {name: 'Norman', role: 'UX/UI'} ]
        }
    },
    {
        name: 'Comm',
        team: {
            product: [ { name: 'Sam', role: 'PM'} ],
            qa: [ { name: 'Justin', role: 'FE tester'}, { name: 'Tom', role: 'BE tester'} ],
            dev: [ { name: 'Sarah', role: 'FE dev'}, { name: 'Naama', role: 'BE dev'} ],
            design: [ {name: 'Ron', role: 'UX/UI'} ]
        }
    }

];