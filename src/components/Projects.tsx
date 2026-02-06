import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Modern Family Home",
    category: "New Construction",
    description: "4-bedroom custom build with open-plan living and sustainable materials.",
  },
  {
    image: project2,
    title: "Heritage Brick Restoration",
    category: "Reconstruction",
    description: "Full structural reconstruction preserving original brickwork character.",
  },
  {
    image: project3,
    title: "Luxury Kitchen Remodel",
    category: "Renovation",
    description: "Complete kitchen transformation with marble countertops and custom cabinetry.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300" />
              </div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="font-display text-lg font-semibold text-secondary-foreground mt-1">
                {project.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm mt-1">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
