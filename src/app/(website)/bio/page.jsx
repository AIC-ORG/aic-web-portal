import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import Home from '@/components/shared/navbar';
import HomeBio from '@/components/biography/homeBio';
import AboutHer from '@/components/biography/aboutHer';
import Pictures from '@/components/biography/pictures';
import MidNav from '@/components/shared/mid-nav';
import HomeBioTwo from '@/components/biography/HomeBioTwo';
import TriangleDiv from '@/components/biography/TriangleDiv';

const Bio = () => {
  return (
    <div className="bg-black">
      <Home />
      <MidNav />
      <TriangleDiv />
      <HomeBio />
      <AboutHer />
      <HomeBioTwo />
      <Pictures />
      <Footer />
    </div>
  );
};

export default Bio;
