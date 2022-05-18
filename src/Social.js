import './Social.css';

export default function Social() {
  return (
    <div className='social'>
      <a href='google.com' className='icon' target={'_blank'} rel='noopener noreferrer'>
        <i class='fa-brands fa-soundcloud'></i>
      </a>
      <a href='google.com' className='icon' target={'_blank'} rel='noopener noreferrer'>
        <i class='fa-brands fa-instagram'></i>
      </a>
      <a href='google.com' className='icon' target={'_blank'} rel='noopener noreferrer'>
        <i class='fa-brands fa-youtube'></i>
      </a>
    </div>
  );
}
