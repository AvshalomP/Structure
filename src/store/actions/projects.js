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
            product: [ { name: 'Anna', role: 'PM - FrontEnd', email: 'anna@ap.com'},
                { name: 'John', role: 'PM - BackEnd', email: 'john@ap.com'} ],
            qa: [ { name: 'Dan', role: 'FE tester', email: 'dan@ap.com'},
                { name: 'Melany', role: 'BE tester', email: 'melany@ap.com'} ],
            dev: [ { name: 'Kath', role: 'FE dev', email: 'kath@ap.com'},
                { name: 'Colt', role: 'BE dev', email: 'colt@ap.com'} ],
            design: [ {name: 'Norman', role: 'UX/UI', email: 'norman@ap.com'} ]
        }
    },
    {
        name: 'Comm',
        team: {
            product: [ { name: 'Sam', role: 'PM', email: 'sam@ap.com'} ],
            qa: [ { name: 'Justin', role: 'FE tester', email: 'justin@ap.com'},
                { name: 'Tom', role: 'BE tester', email: 'tom@ap.com'} ],
            dev: [ { name: 'kath', role: 'FE dev', email: 'kath@ap.com'},
                { name: 'Naama', role: 'BE dev', email: 'naama@ap.com'} ],
            design: [ {name: 'Ron', role: 'UX/UI', email: 'ron@ap.com'} ]
        }
    }

];