import About from "./(navLinks)/about/page";
import Education from "./(navLinks)/education/page";
import Experience from "./(navLinks)/experience/page";
import Intro from "./(navLinks)/intro/page";
import Skills from "./(navLinks)/skills/page";
import Tools from "./(navLinks)/tools/page";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Tools />
      <Education />
    </>
  );
};

export default Home;
