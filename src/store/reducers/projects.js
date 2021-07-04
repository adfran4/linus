import { RECEIVE_PROJECTS } from '../actions/projects';

const projects = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return {
        collection: [...action.data.projects]
      }
    default:
      return state;
  }
};

export default projects;