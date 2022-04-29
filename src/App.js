import './App.css';
import RunningLine from './RunningLine';

function App() {
  return (
    <div className='wrapper'>
      <section className='runningLine'>
        <RunningLine />
      </section>
      <section className='content'>
        <div className='text'></div>
        <div className='form'></div>
        <div className='socials'></div>
      </section>
    </div>
  );
}

export default App;
