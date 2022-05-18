import './RunningLine.css';
import useWindowDimensions from './useWindowDimensions';

export default function RunningLine() {
  const { height, width } = useWindowDimensions();

  console.log({ height, width });

  return (
    <div className='runningLine'>
      {width >= '800' && (
        <div className='runningLineInner black'>
          <p className='line'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
          <p className='line'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
        </div>
      )}
      <div className='runningLineInner white'>
        <p className='lineR'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
        <p className='lineR'>Apotek &nbsp; &nbsp; &nbsp; &nbsp; Apotek</p>
      </div>
    </div>
  );
}
