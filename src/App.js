import './App.css';
import LandingCard from './components/Landing Card';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';



function App() {
  return (
    <div>
    <LandingCard></LandingCard>
    <div className='h-[90vh]'></div>
    <WorkExperience></WorkExperience>
    <Projects></Projects>
    </div>
  );
}

export default App;
