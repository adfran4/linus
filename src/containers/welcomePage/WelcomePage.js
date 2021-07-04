import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from 'lodash';

import { fetchProjects } from '../../store/actions/projects'
import { Project } from '../../components';

const WelcomePage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.collection);

  useEffect(() => { 
    dispatch(fetchProjects()); 
  }, [dispatch]);

  return (
    !isEmpty(projects)
      ? projects.map(project => 
          <Project key={project.id} 
                   project={project}
          />)
      : 'No projects available'
  );
}

export default WelcomePage;
