import Globe from "react-globe.gl";
// import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mdidris10215@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div
        className="grid xl:grid-cols-3 xl:grid-rows-2
                md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> HI, I'm Idris</p>
              <p className="grid-subtext">
                {" "}
                I'm a MERN Stack Developer and Computer Science Engineering
                student who loves building real-world projects to sharpen my
                skills. I enjoy learning by doing — from recreating real
                websites to building full-stack applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="/assets/MERN.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain my-5"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                {" "}
                I specialize in the MERN stack — MongoDB, Express.js, React, and
                Node.js — and enjoy building full-stack applications that
                connect powerful backends with responsive frontends.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 13.035419,
                    lng: 77.61661,
                    text: "I am Here",
                    color: "white",
                    size: 60,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">My Location </p>
              <p className="grid-subtext">
                I'm based in India and actively looking for internships,
                open-source projects, or learning collaborations.
              </p>
              {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[250px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> My passion for coding</p>
              <p className="grid-subtext">
                {" "}
                I enjoy figuring out how things work and turning ideas into
                websites or apps. I’m especially interested in building useful
                tools and learning by doing.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center lg:text-2xl md:text-lg font-medium text-gray_gradient text-white">
                Contact Me
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                  className="my-5"
                />
                <p className="lg:text-2xl md:text-lg font-medium text-gray_gradient text-white ">
                  mdidris10215@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
