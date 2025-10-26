import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I’m a full-stack developer in training who loves turning ideas into
            smooth, scalable web experiences. I work with the MERN stack to
            build interactive and user-friendly apps, always focusing on clean
            code and great design. I’m constantly learning, experimenting, and
            collaborating to grow as a developer.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
