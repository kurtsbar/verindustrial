import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const CompanyLogo = () => (
  <img 
    src="/Imagens/LogoVerIndustrialBranco.png" 
    alt="Ver Industrial Logo" 
    className="w-16 md:w-24 h-auto object-contain"
    referrerPolicy="no-referrer"
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Serviços', 
      path: '/servicos',
      subItems: [
        { name: 'Inteligência Estratégica', path: '/servicos/inteligencia' },
        { name: 'Estruturação Técnica', path: '/servicos/tecnica' },
        { name: 'Econômico-Operacional', path: '/servicos/operacional' },
        { name: 'Viabilidade Financeira', path: '/servicos/viabilidade' },
        { name: 'Análise de Risco', path: '/servicos/risco' },
        { name: 'Implantação Estruturada', path: '/servicos/implantacao' },
      ]
    },
    { name: 'Quem Somos', path: '/quem-somos' },
    //{ name: 'Casos de Sucesso', path: '/casos' },
    { name: 'Trabalhe Conosco', path: '/carreira' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-brand-navy/95 backdrop-blur-md border-b border-brand-gold/10 py-2 lg:py-3' : 'bg-transparent py-4 lg:py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group gap-3 lg:gap-6">
          <CompanyLogo />
          <span className="text-lg md:text-2xl font-serif tracking-[0.1em] text-brand-white uppercase group-hover:text-brand-gold transition-all duration-500 font-bold">Ver Industrial</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.path}
                className={`text-[12px] uppercase tracking-[0.2em] font-bold hover:text-brand-gold transition-all duration-300 ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-white/60'}`}
              >
                {link.name}
              </Link>
              
              {link.subItems && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-brand-navy border border-brand-gold/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-6 shadow-2xl backdrop-blur-xl">
                  {link.subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-8 py-3 text-[11px] uppercase tracking-wider text-brand-white/50 hover:text-brand-gold hover:bg-brand-white/5 transition-all font-bold"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            to="/contato" 
            className="px-8 py-3 bg-brand-gold text-brand-black text-[10px] uppercase tracking-[0.2em] font-extrabold hover:bg-brand-white transition-all duration-300 shadow-lg shadow-brand-gold/10"
          >
            Diagnóstico
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-navy border-b border-brand-gold/20 py-8 px-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-sm uppercase tracking-widest text-brand-white"
                  >
                    {link.name}
                  </Link>
                  {link.subItems && (
                    <div className="mt-4 ml-4 flex flex-col space-y-3 border-l border-brand-gold/20 pl-4">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="text-[11px] uppercase tracking-wider text-brand-white/60"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-gradient border-t border-brand-gold/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center group gap-4 mb-6">
              <CompanyLogo />
              <span className="text-xl md:text-2xl font-serif tracking-widest text-brand-white uppercase font-bold">Ver Industrial</span>
            </Link>
            <p className="text-brand-white/50 text-sm max-w-md leading-relaxed">
              Especialistas em estruturação de investimentos para crescimento empresarial. Transformamos decisões de expansão em projetos viáveis, financiáveis e executáveis.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold text-[11px] uppercase tracking-[0.2em] mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-brand-white/60">
              <li><Link to="/servicos" className="hover:text-brand-gold transition-colors">Serviços</Link></li>
              <li><Link to="/quem-somos" className="hover:text-brand-gold transition-colors">Quem Somos</Link></li>
              <li><Link to="/contato" className="hover:text-brand-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold text-[11px] uppercase tracking-[0.2em] mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-brand-white/60">
              <li>contato@verindustrial.com.br</li>
              <li>+55 (48) 98840-1690</li>
              <li>Florianópolis, SC — Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-gold/5 pt-10">
          <p className="text-[10px] text-brand-white/30 uppercase tracking-widest mb-4 md:mb-0">
            © {new Date().getFullYear()} Ver Industrial. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-[10px] text-brand-white/30 uppercase tracking-widest">
            <Link to="/privacidade" className="hover:text-brand-gold">Privacidade</Link>
            <Link to="/termos" className="hover:text-brand-gold">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
