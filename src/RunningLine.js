import './RunningLine.css';

export default function RunningLine() {
  return (
    <div className='wrapper'>
      <div className='wrapperInner black'>
        <p className='line'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
        <p className='line'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
      </div>
      <div className='wrapperInner white'>
        <p className='lineR'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
        <p className='lineR'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
      </div>
    </div>
  );
}
