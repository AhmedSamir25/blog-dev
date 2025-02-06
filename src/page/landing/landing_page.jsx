import Header from '../../components/header';
import BodyLanding from './body_landing';

function LandingPage() {
  return (
    <div className='min-h-screen flex flex-col w-full'>
      <Header/>
      <BodyLanding/>
    </div>
  );
}

export default LandingPage;