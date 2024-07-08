import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Tagline from "./Tagline";
import { externalLink } from "../assets";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Check out a few projects that I have built."
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Tech Stack  
                </p>
                <Tagline>{item.techStack}</Tagline>
                
                <br />
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                
                
                <div className="flex items-center mt-auto">
                  
                  <a
                    href={item.githubURL}
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                  >
                    
                    <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                  </a>
                  {item.liveUrl && (<a
                  
                  href={item.liveUrl}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  
                  <img src={externalLink} width={16} height={16} alt={item.title} />
                </a>)}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
