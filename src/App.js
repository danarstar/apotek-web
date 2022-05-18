import './App.css';
import RunningLine from './RunningLine';
import Social from './Social';

function App() {
  return (
    <div className='wrapper'>
      <section className='runner'>
        <RunningLine />
      </section>
      <section className='content'>
        <div className='text'>
          <p>We believe in ...</p>
        </div>
        <div className='form'></div>
        <div className='socials'>
          <Social />
        </div>
      </section>
    </div>
  );
}

export default App;
