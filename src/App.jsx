import { React } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home';
import TimeTable from './components/timeTable';
import SetTimeTable from './components/setTimeTable';
import './App.css'  



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/time-table/:url" element={<TimeTable />} />
        <Route path="/" element={<Home />} />
        <Route path="/set-timetable/" element={<SetTimeTable />} />
      </Routes>

    </Router>
  );
};

export default App;