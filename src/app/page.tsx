import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WaveBackground from '@/components/WaveBackground';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <WaveBackground />
      <Navbar />
      <Hero />
      <ChatWidget />
    </main>
  );
}
