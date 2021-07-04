import axios from 'axios';

export const RECEIVE_PROJECTS = 'linus/RECEIVE_PROJECTS';

export const receiveProjects = data => ({
    type: RECEIVE_PROJECTS,
    data
});

export const fetchProjects = () => dispatch => {
    axios('https://fullstack.linus-capital.com/projects')
        .then(({ data }) => dispatch(receiveProjects(data)))};