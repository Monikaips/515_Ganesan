import Entrance from './Entrance.jsx';
import Heartbeat from '../../components/Heartbeat/Heartbeat.jsx';
import Hero from './sections/Hero.jsx';
import Why515 from './sections/Why515.jsx';
import TheBeginning from './sections/TheBeginning.jsx';
import TheAmbassador from './sections/TheAmbassador.jsx';
import LifeOfService from './sections/LifeOfService.jsx';
import Impact from './sections/Impact.jsx';
import PlacesMap from './sections/PlacesMap.jsx';
import TimelinePreview from './sections/TimelinePreview.jsx';
import DisasterStory from './sections/DisasterStory.jsx';
import HelpTheHelper from './sections/HelpTheHelper.jsx';
import HowYouCanHelp from './sections/HowYouCanHelp.jsx';
import Voices from './sections/Voices.jsx';
import DoctorateHighlight from './sections/DoctorateHighlight.jsx';
import RecognitionPreview from './sections/RecognitionPreview.jsx';
import WhenTheWorldNoticed from './sections/WhenTheWorldNoticed.jsx';
import ArchivePreview from './sections/ArchivePreview.jsx';
import HisVoice from './sections/HisVoice.jsx';
import Family from './sections/Family.jsx';
import Legacy from './sections/Legacy.jsx';
import ContactCTA from './sections/ContactCTA.jsx';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <Entrance />
      <Hero />
      <TheBeginning />
      <Why515 />
      <Impact />
      <PlacesMap />
      <div className="home-section home-section--surface" aria-hidden="true">
        <div className="home-container">
          <Heartbeat />
        </div>
      </div>
      <LifeOfService />
      <TheAmbassador />
      <DisasterStory />
      <HelpTheHelper />
      <TimelinePreview />
      <DoctorateHighlight />
      <RecognitionPreview />
      <WhenTheWorldNoticed />
      <ArchivePreview />
      <HisVoice />
      <Voices />
      <Family />
      <HowYouCanHelp />
      <Legacy />
      <ContactCTA />
    </div>
  );
}
