import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Routes from '@/components/Routes';
import Prices from '@/components/Prices';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Routes />
        <Prices />
        <About />
        <Gallery />
        <Reviews />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
