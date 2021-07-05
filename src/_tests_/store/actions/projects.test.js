import { 
  receiveProjects, 
  receiveProject,
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT
 } from '../../../store/actions/projects';

test('receiveProjects', () => {
  const data = [{
      name: 'Hamburg Tower',
      location: 'Hamburg'
    }, {
      name: 'Linus Portfolio',
      location: 'London'
  }];

expect(receiveProjects(data)).toEqual({ data, type: RECEIVE_PROJECTS })
});

test('receiveProject', () => {
  const project = {
      name: 'Hamburg Tower',
      location: 'Hamburg'
    };

expect(receiveProject(project)).toEqual({ project, type: RECEIVE_PROJECT })
});