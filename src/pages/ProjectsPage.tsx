import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => (
  <main>
    <Navbar />
    <div className="pt-16">
      <Projects />
    </div>
    <Footer />
  </main>
);

export default ProjectsPage;
