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


const projects = [{
    name: 'Z',
    team: {
        product: [ { name: 'Anastasia', role: 'PM - FrontEnd'}, { name: 'Matt', role: 'PM - BackEnd'} ],
        qa: [ { name: 'Ankita', role: 'FE tester'}, { name: 'Michael', role: 'BE tester'} ],
        dev: [ { name: 'Cameron', role: 'FE dev'}, { name: 'Ed', role: 'BE dev'} ],
        design: [ {name: 'Jodie', role: 'UX/UI'} ]
    }
},
    {
        name: 'Fast Lane',
        team: {
            product: [ { name: 'Anastasia', role: 'PM - FrontEnd'}, { name: 'Matt', role: 'PM - BackEnd'} ],
            qa: [ { name: 'Ankita', role: 'FE tester'}, { name: 'Michael', role: 'BE tester'} ],
            dev: [ { name: 'Cameron', role: 'FE dev'}, { name: 'Ed', role: 'BE dev'} ],
            design: [ {name: 'Jodie', role: 'UX/UI'} ]
        }
    }
];