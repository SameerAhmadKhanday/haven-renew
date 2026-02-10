const MapSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 py-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground text-center mb-2">
          Find Our Office
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-md mx-auto">
          Main Market Srigufwara, Near J&K Bank Srigufwara — Pin Code 192401
        </p>
      </div>
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d75.0647!3d33.7481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1a4d0a9c7e8b7%3A0x0!2sSrigufwara%2C%20Jammu%20and%20Kashmir%20192401!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="M-Square Architects Office Location"
        />
      </div>
    </section>
  );
};

export default MapSection;
