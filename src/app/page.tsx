import { Header } from "@/components/ui/Header";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TimelineEntry } from "@/components/ui/TimelineEntry";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/ui/Hero";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="mx-auto lg:w-4xl relative z-100">
      {/* <nav className="flex justify-between items-center align-center border-foreground/90 py-2 px-4 my-2 top-2 right-0 -left-5 z-10">
        <Header className="text-xl lg:text-2xl h-1/4 !m-0">Izzy Wagenvoord</Header>
        <Button href="/cv.pdf" className="max-w-30">Resume</Button>
      </nav> */}
      <section className="my-4">
        <Hero 
          title="Isabelle (Izzy) Wagenvoord"
          // subtitle="CS Paraprofessional @ Colorado College"
          description="I am a computer science paraprofessional at the Mathematics and Computer Science department at Colorado College,
          where I hold office hours for all core introductory and advanced CS courses, and assist with administrative duties and communications.
          Last May, I received the Stephen Janke Prize from Colorado College for the top graduating senior in computer science. I have completed 3 NSF-funded summer research internships 
          on remote sensing, time series analysis, vector representations, and machine learning for medical image analysis. My research interests
          are primarily in computer vision and machine learning."
        />
      </section>
      <section className="flex flex-col justify-center items-start gap-2 my-4">
        <Header>publications</Header>
        {/* <ProjectCard
          image={{
            src: "/chongqing.jpg",
            alt: "Chongqing, China"
          }}
          title="Senior Vocal Recital"
          description="30 minute vocal performance with turnout of 25+ people consisting of classical, opera, and broadway pieces."
          tags={['Singing', 'Performance']}
        /> */}
        <ProjectCard title="Census2Vec: Enhancing Socioeconomic
Predictive Models with Geo-Embedded Data"
          description={
            <>
              Intelligent Systems Conference (IntelliSys 2024)
              <br />
              <a
                href="https://doi.org/10.1007/978-3-031-66431-1_44"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-accent"
              >
                [Paper]
              </a>
              <span> </span>
              <a
                href="/census2vec.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-accent"
              >
                [PDF]
              </a>
            </>
          }
          tags={["Autoencoders", "Embeddings"]} 
          />
        <ProjectCard title="Understanding Nationwide Power Outage and Restoration for Future Prediction" 
        description={<>
        Smoky Mountains Computational Sciences and Engineering Conference Data
Challenge (SMCDC 2023)
          <br/>
          <a
                href="https://doi.org/10.17605/OSF.IO/KTV9U"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-accent"
              >
                [Paper]
              </a>
              <span> </span>
              <a
                href="/power-outage.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-accent"
              >
                [PDF]
              </a>
          </>}
          tags={['Time Series Analysis']}
        />

      </section>
      <section className="flex mx-3 flex-col justify-center items-start gap-2 my-4">
        <Header>experience</Header>
        <TimelineEntry
          date="AUGUST 2025 — MAY 2026"
          title="Computer Science Paraprofessional"
          location="Colorado College"
          description="Hold office hours for all core introductory and upper level CS courses, assist faculty, communicate and organize department events, and fulfill administrative duties."
          tags={['Teaching', 'Administration', 'Event Planning']}
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
          description="First coauthor on paper analyzing 8 years of nationwide power outage time-series data for 3000+ counties by algorithmically identifying outage events and finding seasonal patterns using Python and Jupyter. Integrated and analyzed with socioeconomic data. Trained and optimized 10 autoencoders for academic study using TensorFlow and Optuna on host university’s supercomputing cluster."
          tags={['Python', 'PyTorch', 'Medical Image Analysis']}
        />
        <TimelineEntry
          date="MAY 2022 — MAY 2024"
          title="Research Intern"
          location="University of Illinois Urbana–Champaign"
          description="Optimized coefficients for irrigation statistical models with Pymoo, Python, and Pandas, preprocessed Sentinel-1 satellite imagery into a 300-raster time series, and built linear models (R2 up to 0.67) to predict rice leaf area index from remote-sensing data."
          tags={['Python', 'Pymoo', 'Remote Sensing', 'Satellite Imagery']}
        />
      </section>
      <section className="flex flex-col justify-center items-start my-4">
        <Header>awards</Header>
        <ul className="text-md list-disc pl-6 space-y-4 mt-2">
          <li>
            <span className="font-bold">Stephen Janke Prize in Computer Science</span>, Colorado College 2025
            <br />
            <span className="text-sm text-foreground/75">
              Awarded to the graduating senior who best demonstrates exceptional talent, breadth of achievement, and academic excellence in Computer Science.
            </span>
          </li>
          <li>
            <span className="font-bold">Fulbright Research Semifinalist</span> (Selected as Alternate Candidate) 2025
            <br />
            <span className="text-sm text-foreground/75">
              Proposal: Using NeRFs and Gaussian Splatting for adversarial self-driving environment simulation with Professor Florian Shkurti at University of Toronto, Canada.
            </span>
          </li>
          <li>
            <span className="font-bold">Best Poster Award</span>, Smoky Mountains Computational Sciences and Engineering Data Challenge 2023
          </li>
          {/* <li>
            <span className="font-bold">Dean’s List</span> 2022–2024
          </li> */}
          <li>
            <span className="font-bold">Colorado College Euclid Scholarship</span> 2022
            <br />
            <span className="text-sm text-foreground/75">
              Awarded to students who show exceptional promise in mathematics or computer science (17 out of 112 nominations).
            </span>
          </li>
        </ul>
      </section>
      {/* <section className="flex flex-col justify-center items-start my-4">
        <Header className="mb-2">contact</Header>
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
      </section> */}
      <Footer />
    </div>
  );
}
