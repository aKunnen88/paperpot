import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Leaf, Recycle, Printer, ArrowRight, Instagram, Menu, X, ChevronRight, ChevronLeft, Plus, Minus, Mail, MapPin, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'Over ons', href: '#about' },
    { name: 'Duurzaamheid', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-paper/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="#home">
            <img src="/images/logo_transparent.png" alt="paperpot logo" className="h-12 w-auto object-contain" />
          </a>
        </motion.div>
        
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest hover:text-wood transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <button className="md:hidden text-earth" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-t border-earth/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">
                  {item.name}
                </a>
              ))}
              <a href="#shop" onClick={() => setIsMenuOpen(false)} className="inline-block mt-4 px-6 py-3 bg-earth text-paper rounded-full text-sm uppercase tracking-widest text-center">
                Shop nu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f5f2ed]">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <img 
          src="/images/pots-trio.png" 
          alt="Paperpot trio background" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-10 text-center px-6 mt-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-xs uppercase tracking-[0.4em] mb-6 text-wood font-semibold"
        >
          Circulair Paper Design
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl font-serif font-light leading-none mb-8 tracking-tighter"
        >
          Van Hout <br />
          <span className="italic">naar Bloei.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl mx-auto text-base md:text-lg text-earth/70 font-light leading-relaxed mb-12"
        >
          Wij transformeren hout - en papiergranulaat in prachtige, 3D-geprinte plantenpotten. 
          Een tweede leven voor natuurlijke materialen, een nieuw thuis voor jouw groen.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a href="#shop" className="px-10 py-4 bg-earth text-paper rounded-full text-sm uppercase tracking-widest hover:bg-wood transition-all flex items-center gap-2 group">
            Ontdek PaperPot
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="text-sm uppercase tracking-widest border-b border-earth/30 pb-1 hover:border-earth transition-all">
            Ons Verhaal
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
        <div className="w-[1px] h-12 bg-earth/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-earth"
          />
        </div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-6 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-wood font-semibold block">
              Over ons en de PaperPot
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Gedreven door <br />
              <span className="italic">Design & Circulariteit.</span>
            </h2>
            <div className="text-base text-earth/70 leading-relaxed space-y-6">
              <p>
                PaperPot is ontstaan vanuit een eenvoudig idee: duurzame keuzes zouden nooit ten koste mogen gaan van design.
              </p>
              <p>
                Als studenten van UHasselt gingen we op zoek naar een manier om afvalmateriaal een nieuw leven te geven. Na zo’n zes brainstormsessies ontstond het idee om gerecycleerd papier te gebruiken als basis voor een interieurobject dat jarenlang mee kan gaan.
              </p>
              <p>
                Samen met onze professionele 3D-printpartner U Plastics ontwikkelden we PaperPot: een minimalistische bloempot die lokaal wordt geproduceerd uit een materiaal op basis van gerecycleerd archiefpapier en berk. Bovendien, door gebruik te maken van 3D-printing, kunnen we produceren zonder massaproductie en zonder onnodig materiaalverlies.
              </p>
              <p>
                Zo is wat begon als een idee uitgegroeid tot een product dat duurzaamheid, technologie en design samenbrengt.
              </p>
              <p className="font-serif italic text-xl text-earth pt-4">Rooted in simplicity.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-earth/5">
              <img 
                src="/images/overons.heic" 
                alt="Over ons - Het team achter PaperPot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-wood/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-earth/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SustainabilitySection = () => {
  const features = [
    { 
      icon: <MapPin size={24} />, 
      title: "Lokaal Geproduceerd", 
      desc: "Elke pot wordt lokaal geproduceerd met behulp van professionele 3D-printtechnologie." 
    },
    { 
      icon: <Recycle size={24} />, 
      title: "Gerecycleerde Materialen", 
      desc: "Gemaakt van een unieke samenstelling van gerecycleerd papier en berk." 
    },
    { 
      icon: <Printer size={24} />, 
      title: "Zero Waste Productie", 
      desc: "We gebruiken alleen het materiaal dat nodig is, waardoor we niets verspillen." 
    },
    { 
      icon: <Leaf size={24} />, 
      title: "Duurzaam Design", 
      desc: "Ontworpen om jarenlang mee te gaan als eyecatcher in jouw interieur." 
    }
  ];

  return (
    <section id="sustainability" className="py-16 md:py-32 px-6 bg-earth text-paper overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-wood font-semibold mb-4 block"
          >
            Waarom PaperPot anders is
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-serif mb-6"
          >
            Geen massaproduct, <br />
            <span className="italic">maar vakmanschap.</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-paper/70 text-base md:text-lg leading-relaxed"
          >
            PaperPot combineert drie belangrijke waarden: lokaal geproduceerd, gemaakt van gerecycleerde materialen en ontworpen om jarenlang mee te gaan. Zo is een simplistische bloempot ontstaan die niet alleen prachtig oogt, maar ook duurzaam is.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-paper/5 border border-paper/10 hover:bg-paper/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-wood/20 flex items-center justify-center text-wood mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
              <p className="text-paper/60 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/pots-trio.png",
    "/images/slider_1.png",
    "/images/slider_2.png",
    "/images/slider_3.png",
    "/images/slider_4.png",
    "/images/slider_5.png"
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="shop" className="py-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="w-full">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-wood font-semibold mb-4 block"
            >
              Uitgelicht Product
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif"
            >
              Paperpot.
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Slider */}
          <div className="relative aspect-square rounded-[40px] overflow-hidden bg-earth/5 group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={images[currentSlide]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                alt={`Product afbeelding ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevSlide} className="w-12 h-12 bg-paper/80 backdrop-blur-sm rounded-full flex items-center justify-center text-earth hover:bg-paper transition-colors shadow-lg">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 bg-paper/80 backdrop-blur-sm rounded-full flex items-center justify-center text-earth hover:bg-paper transition-colors shadow-lg">
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-paper/50 backdrop-blur-xl rounded-full">
              {images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-earth w-6' : 'bg-earth/30 hover:bg-earth/60'}`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="flex justify-between items-start mt-auto">
              <div>
                <h3 className="font-serif text-xl md:text-2xl group-hover:text-wood transition-colors">Paperpot</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-earth/50 mt-1">Houtcomposiet / 3D Geprint</p>
              </div>
              <span className="text-lg font-light">€29.95</span>
            </div>
            
            <p className="text-earth/70 leading-relaxed">
              Onze signature PaperPot, perfect voor het creëren van diepte in elk interieur. De unieke gelaagde structuur van het 3D-printproces zorgt voor een organisch en voelbaar patroon. Volledig vervaardigd uit gerecycled hout in België.
            </p>

            <div className="border-t border-earth/10 pt-6">
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 text-earth/80">Specificaties</h4>
              <ul className="space-y-3 text-sm text-earth/70">
                <li className="flex justify-between"><span>Afmetingen:</span> <span>120–160 mm hoog, Ø 140 mm</span></li>
                <li className="flex justify-between"><span>Materiaal:</span> <span>Berk/Papier Granulaat</span></li>
                <li className="flex justify-between"><span>Gebruik:</span> <span>Waterbestendig & vorstbestendig</span></li>
              </ul>
            </div>

            <a href="https://www.instagram.com/paperpot.be/" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-earth text-paper rounded-full font-medium uppercase tracking-widest text-xs hover:bg-wood transition-colors mt-8">
              Stuur ons gerust een bericht via Instagram voor aankopen.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is PaperPot waterbestendig?",
      a: "Ja. PaperPot is ontworpen om veilig gebruikt te worden met planten. De pot wordt gemaakt uit een stevig granulaat op basis van gerecycleerd papier en berk. Dit materiaal wordt tijdens het 3D-printproces samengesmolten tot een solide structuur, waardoor de pot sterk en stabiel is voor dagelijks gebruik met planten."
    },
    {
      q: "Kan PaperPot binnen en buiten gebruikt worden?",
      a: "PaperPot is voornamelijk ontworpen voor gebruik binnenshuis. Binnen komt het materiaal en het design het best tot zijn recht. Kortstondig gebruik buiten is mogelijk, maar langdurige blootstelling aan regen en extreme weersomstandigheden wordt afgeraden."
    },
    {
      q: "Waaruit bestaat PaperPot precies?",
      a: "PaperPot wordt geproduceerd uit een speciaal granulaat op basis van gerecycleerd papier en berk. Dit materiaal wordt aangeleverd vanuit Finland en vormt de basis voor het 3D-printproces. Door deze combinatie van natuurlijke vezels ontstaat een materiaal met een warme, natuurlijke uitstraling en een unieke textuur."
    },
    {
      q: "Waarom gebruiken jullie 3D-printing?",
      a: "3D-printing maakt het mogelijk om enkel het materiaal te gebruiken dat effectief nodig is voor het product. Hierdoor ontstaat er vrijwel geen productieafval. Daarnaast maakt deze technologie lokale productie mogelijk zonder massaproductie."
    },
    {
      q: "Hoe duurzaam is PaperPot?",
      a: (
        <div className="space-y-4">
          <p>Duurzaamheid zit in meerdere aspecten van PaperPot:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>gebruik van gerecycleerde papiervezels</li>
            <li>productie zonder materiaalverspilling</li>
            <li>lokale productie via 3D-printing</li>
          </ul>
        </div>
      )
    },
    {
      q: "Waar wordt PaperPot geproduceerd?",
      a: "PaperPot wordt lokaal geproduceerd in samenwerking met onze professionele 3D-printpartner U Plastics. Het granulaat waarmee de pot wordt geprint komt uit Finland en wordt daar ontwikkeld op basis van gerecycleerd papier en berk."
    }
  ];

  return (
    <section className="py-16 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-wood font-semibold mb-4 block">Veelgestelde Vragen</span>
          <h2 className="text-4xl md:text-5xl font-serif">Alles wat je <br/><span className="italic">moet weten.</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-earth/10 rounded-2xl overflow-hidden bg-paper"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-earth/5 transition-colors"
              >
                <span className="font-serif text-lg md:text-xl pr-4">{faq.q}</span>
                <div className="text-wood flex-shrink-0">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-earth/70"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-[#f5f2ed]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-wood font-semibold mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Heb je een vraag? <br /> <span className="italic">We helpen je graag verder.</span></h2>
          <p className="text-earth/70">
            Heb je een vraag over PaperPot, je bestelling of onze producten? <br />
            We proberen alle berichten binnen 1 tot 2 werkdagen te beantwoorden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a 
            href="mailto:paperpot.be@gmail.com"
            className="flex flex-col items-center gap-4 p-8 bg-paper rounded-3xl border border-earth/5 hover:border-wood/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-earth/5 flex items-center justify-center text-earth group-hover:bg-earth group-hover:text-paper transition-all">
              <Mail size={24} />
            </div>
            <div className="text-center">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-1">E-mail</h4>
              <p className="text-earth/70 font-serif text-lg">paperpot.be@gmail.com</p>
            </div>
          </a>

          <a 
            href="https://www.instagram.com/paperpot.be/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 bg-paper rounded-3xl border border-earth/5 hover:border-wood/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-earth/5 flex items-center justify-center text-earth group-hover:bg-earth group-hover:text-paper transition-all">
              <Instagram size={24} />
            </div>
            <div className="text-center">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Instagram</h4>
              <p className="text-earth/70 font-serif text-lg">@paperpot.be</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-paper">
       <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-7xl font-serif leading-tight"
        >
          Klaar om de natuur <br />
          <span className="italic">in huis te halen?</span>
        </motion.h2>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-8 flex justify-center w-full relative"
        >
          <img 
            src="/images/living_room_pots.png" 
            alt="PaperPot in a living room" 
            className="w-full max-w-4xl rounded-3xl shadow-2xl object-cover aspect-[16/9]"
          />
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px] bg-earth/10 rounded-3xl opacity-0 hover:opacity-100 transition-all duration-500">
             <a href="#shop" className="px-8 py-4 bg-paper text-earth rounded-full font-medium uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl">
               Ontdek de Collectie
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="bg-paper py-16 md:py-24 px-6 border-t border-earth/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-2 space-y-8">
            <img src="/images/logo_transparent.png" alt="paperpot logo" className="h-12 w-auto object-contain" />
            <p className="max-w-xs text-earth/60 leading-relaxed">
              Duurzaam design voor de moderne thuis. 3D-geprint met houtgranulaat, afgewerkt in België.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/paperpot.be/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-earth/20 flex items-center justify-center hover:bg-earth hover:text-paper transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Ontdek</h4>
            <ul className="space-y-4 text-sm text-earth/60">
              <li><a href="#about" className="hover:text-wood transition-colors">Ons Verhaal</a></li>
              <li><a href="#sustainability" className="hover:text-wood transition-colors">Duurzaamheid</a></li>
              <li><a href="#shop" className="hover:text-wood transition-colors">Collectie</a></li>
              <li><a href="#contact" className="hover:text-wood transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-earth/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-earth/40">
          <p>© {new Date().getFullYear()} Paperpot. Alle rechten voorbehouden.</p>
          <div className="flex space-x-8">
            <span className="opacity-70">Gemaakt met liefde voor de natuur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-wood selection:text-paper scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SustainabilitySection />
        <Showcase />
        <FAQ />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
