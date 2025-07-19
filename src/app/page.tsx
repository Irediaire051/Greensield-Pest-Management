import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceCategories from '@/components/ServiceCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import LatestNews from '@/components/LatestNews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ServiceCategories />
      <WhyChooseUs />
      <Testimonials />
      <LatestNews />
      <Footer />
    </main>
  );
}