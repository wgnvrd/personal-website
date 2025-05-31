import Image from "next/image";
import { Hero } from '@/components/ui/Hero';

export default function Home() {
  return (
    <div>
      <Hero 
        title="Izzy Wagenvoord"
        subtitle="Incoming CS Paraprofessional @ Colorado College"
        align="center"
      />
    </div>
  );
}
