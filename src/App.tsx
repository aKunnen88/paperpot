import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Leaf, Recycle, Printer, ArrowRight, Instagram, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-paper/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-medium tracking-tight"
        >
          paperpot.
        </motion.div>
        
        <div className="hidden md:flex space-x-12 items-center">
          {['Story', 'Process', 'Product'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest hover:text-wood transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              {['Story', 'Process', 'Product'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">
                  {item}
                </a>
              ))}
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f5f2ed]">
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
      
      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-xs uppercase tracking-[0.4em] mb-6 text-wood font-semibold"
        >
          Circular Design
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-9xl font-serif font-light leading-none mb-8 tracking-tighter"
        >
          From Wood <br />
          <span className="italic">to Bloom.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl mx-auto text-lg text-earth/70 font-light leading-relaxed mb-12"
        >
          We transform old wood waste into beautiful, 3D-printed plant pots. 
          A second life for timber, a new home for your greens.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-earth text-paper rounded-full text-sm uppercase tracking-widest hover:bg-wood transition-all flex items-center gap-2 group">
            Explore Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#story" className="text-sm uppercase tracking-widest border-b border-earth/30 pb-1 hover:border-earth transition-all">
            Our Story
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

const StorySection = () => {
  return (
    <section id="story" className="py-32 px-6 bg-paper">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-earth/5"
        >
          <img 
            src="/images/pot-succulent.png" 
            alt="Paperpot with succulents on marble" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif leading-tight"
          >
            Waste isn't waste <br />
            until we waste it.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-earth/70 leading-relaxed"
          >
            At Paperpot, we believe in the circular economy. We source discarded wood from local workshops and construction sites, grind it into a fine powder, and mix it with natural binders to create a unique 3D-printing filament.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-8 pt-8"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-wood/10 flex items-center justify-center text-wood">
                <Recycle size={24} />
              </div>
              <h4 className="font-serif text-xl">100% Recycled</h4>
              <p className="text-sm text-earth/60">Sourced from local wood waste streams.</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-wood/10 flex items-center justify-center text-wood">
                <Printer size={24} />
              </div>
              <h4 className="font-serif text-xl">3D Printed</h4>
              <p className="text-sm text-earth/60">Precision crafted with zero-waste manufacturing.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  delay: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-earth/5">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 bg-paper/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold">
        New Arrival
      </div>
      <div className="absolute inset-0 bg-earth/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="px-6 py-2 bg-paper text-earth rounded-full text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
          View Details
        </button>
      </div>
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-serif text-2xl group-hover:text-wood transition-colors">{title}</h3>
        <p className="text-xs uppercase tracking-widest text-earth/50 mt-1">Wood Composite</p>
      </div>
      <span className="text-lg font-light">{price}</span>
    </div>
  </motion.div>
);

const Showcase = () => {
  const products = [
    { title: "The Ripple Pot", price: "€45", image: "/images/pot-succulent.png" },
    { title: "Strata Vase", price: "€62", image: "/images/pots-trio.png" },
    { title: "Minimalist Cylinder", price: "€38", image: "/images/pot-succulent.png" },
    { title: "The Wave Bowl", price: "€55", image: "/images/pots-trio.png" },
  ];

  return (
    <section id="shop" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-wood font-semibold mb-4 block"
            >
              The Collection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-serif"
            >
              Sculpted by code, <br />
              <span className="italic">inspired by nature.</span>
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm uppercase tracking-widest group"
          >
            View all products
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((p, i) => (
            <ProductCard 
              key={p.title} 
              title={p.title}
              price={p.price}
              image={p.image}
              delay={i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { number: "01", title: "Collection", desc: "We rescue wood waste from local workshops and construction sites." },
    { number: "02", title: "Transformation", desc: "The wood is processed into a unique biodegradable printing filament." },
    { number: "03", title: "Creation", desc: "Each pot is 3D printed layer by layer, creating a unique texture." },
    { number: "04", title: "Bloom", desc: "A sustainable home for your plants that returns to the earth." },
  ];

  return (
    <section id="process" className="py-32 px-6 bg-earth text-paper overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-8xl font-serif opacity-10 absolute -top-10 -left-4">{step.number}</span>
              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-paper/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-paper py-24 px-6 border-t border-earth/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-4xl font-serif">paperpot.</h2>
            <p className="max-w-xs text-earth/60 leading-relaxed">
              Sustainable design for the modern home. Hand-finished in Belgium.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/paperpot.be/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-earth/20 flex items-center justify-center hover:bg-earth hover:text-paper transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-earth/60">
              <li><a href="#" className="hover:text-wood transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-wood transition-colors">The Process</a></li>
              <li><a href="#" className="hover:text-wood transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-wood transition-colors">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-earth/60">
              <li>hello@paperpot.be</li>
              <li>Antwerp, Belgium</li>
              <li>+32 000 00 00 00</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-earth/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-earth/40">
          <p>© 2024 Paperpot. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-earth transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-earth transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-wood selection:text-paper">
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <ProcessSection />
        <Showcase />
        
        {/* CTA Section */}
        <section className="py-32 px-6 bg-[#f5f2ed]">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-serif leading-tight"
            >
              Ready to bring nature <br />
              <span className="italic">into your space?</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-center w-full"
            >
              <img 
                src="/images/living_room_pots.png" 
                alt="Two flower pots in a living room" 
                className="w-full max-w-4xl rounded-3xl shadow-2xl object-cover aspect-[16/9]"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
