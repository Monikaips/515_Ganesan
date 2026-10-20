import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer.jsx';
import StickyContact from './StickyContact/StickyContact.jsx';
import Heartbeat from './Heartbeat/Heartbeat.jsx';
import PageTransition from './PageTransition.jsx';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="layout-heartbeat" aria-hidden="true">
        <Heartbeat />
      </div>
      <main>
        <PageTransition />
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
