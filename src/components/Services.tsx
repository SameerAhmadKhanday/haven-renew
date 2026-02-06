import { motion } from "framer-motion";
import { Building2, Hammer, PaintBucket } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Construction",
    description:
      "From foundation to finish, we build custom homes with structural excellence and attention to every detail.",
  },
  {
    icon: Hammer,
    title: "Reconstruction",
    description:
      "Restoring and rebuilding structures with modern engineering standards while preserving architectural character.",
  },
  {
    icon: PaintBucket,
    title: "Renovation",
    description:
      "Transforming interiors and exteriors with contemporary designs, premium materials, and expert craftsmanship.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
