import { combineReducers } from 'redux';

import projects from './projects';

const mainReducer = combineReducers({
  projects
});

export default mainReducer;