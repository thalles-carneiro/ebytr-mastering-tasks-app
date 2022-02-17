import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import TaskList from '../pages/TaskList';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <TaskList /> } />
    </Routes>
  </Router>
);

export default AppRoutes;
