import Stars from './stars';
import ReactDOM from 'react-dom';
import React from 'react';
import Kanban from './kanban';
import Files from './files';

const App = () => {
  if (window.location.pathname.includes('star')) return <Stars />;
  if (window.location.pathname.includes('kanban')) return <Kanban />;
  return <Files />
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 
