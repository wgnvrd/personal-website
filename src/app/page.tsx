import { Header } from "@/components/ui/Header";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TimelineEntry } from "@/components/ui/TimelineEntry";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/ui/Hero";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="mx-auto lg:w-4xl relative z-100">
      <nav className="flex justify-between items-center align-center backdrop-blur-sm bg-background/75 rounded-xl border-5 border-foreground/90 py-2 px-4 my-2 sticky top-2 right-0 -left-5 z-10">
        <Header className="text-xl lg:text-3xl h-1/4 !m-0">Izzy Wagenvoord</Header>
        <Button href="/cv.pdf" className="max-w-30">Resume</Button>
      </nav>
      <section className="my-4">
        <Hero 
          title="Izzy Wagenvoord"
          subtitle="Incoming CS Paraprofessional @ Colorado College"
        />
      </section>
      <section className="flex flex-col justify-center items-start gap-2 my-4">
        <Header>PROJECTS</Header>
        <ProjectCard
          image={{
            src: "/chongqing.jpg",
            alt: "Chongqing, China"
          }}
          title="Senior Vocal Recital"
          description="30 minute vocal performance with turnout of 25+ people consisting of classical, opera, and broadway pieces."
          tags={['Singing', 'Performance']}
        />

      </section>
      <section className="flex mx-3 flex-col justify-center items-start gap-2 my-4">
        <Header>EXPERIENCE</Header>
        <TimelineEntry
          date="AUGUST 2025 — MAY 2026"
          title="CS Paraprofessional"
          location="Colorado College"
          description="Hold office hours for introductory and some upper level CS courses, assist faculty, organize social events, and fulfill administrative duties."
          tags={['Office Hours', 'Administration', 'Event Planning']}
        />
        <TimelineEntry
          date="JANUARY 2025 — MAY 2025"
          title="Quantitative Reasoning Center Tutor"
          location="Colorado College"
          description="Hold office hours for Theory of Computation and Computer Science II and work weekly shifts during drop-in hours at quantitative reasoning center to answer homework questions."
          tags={['Tutoring', 'Java', 'Python']}
        />
        <TimelineEntry
          date="MAY 2024 — AUGUST 2024"
          title="Research Intern"
          location="Michigan State University"
          description="Fine-tuned pre-trained 3D SwinUNETR (Swin transformers and U-Net architectures) computer vision machine learning model using lab dataset of 56 clinically annotated post-surgery MRI images of brain tumor patients."
          tags={['Python', 'PyTorch', 'Medical Image Analysis']}
        />
        <TimelineEntry
          date="MAY 2023 — AUGUST 2023"
          title="Research Intern"
          location="University of North Texas"
          description="Fine-tuned pre-trained 3D SwinUNETR (Swin transformers and U-Net architectures) computer vision machine learning model using lab dataset of 56 clinically annotated post-surgery MRI images of brain tumor patients."
          tags={['Python', 'PyTorch', 'Medical Image Analysis']}
        />
      </section>
      <section className="flex flex-col justify-center items-start my-4">
        <Header className="mb-2">CONTACT</Header>
        <div className="grid grid-flow-row mx-auto lg:mx-0 lg:grid-cols-[1fr_1fr]">
          <p className="text-center lg:text-left">Reach out to me via email or LinkedIn :) </p>
          <div className="flex items-center justify-center mx-auto gap-2">
            <Button href="mailto:isabellewagenvoord@gmail.com">
              Email
            </Button>
            <Button href="https://www.linkedin.com/in/iwagenvoord/">
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
