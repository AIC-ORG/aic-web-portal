'use client';
import Footer from '@/components/website/shared/footer';
import HomeBio from '@/components/website/biography/homeBio';
import AboutHer from '@/components/website/biography/aboutHer';
import Pictures from '@/components/website/biography/pictures';
// import MidNav from '@/components/website/shared/mid-nav';
import HomeBioTwo from '@/components/website/biography/HomeBioTwo';
import TriangleDiv from '@/components/website/biography/TriangleDiv';

const Bio = () => {
  return (
    <div className="bg-black">
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
