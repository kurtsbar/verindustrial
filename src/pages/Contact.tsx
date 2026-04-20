import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-40 lg:pt-48 pb-20">
      <Helmet>
        <title>Contato | Ver Industrial - Inicie sua Estruturação</title>
        <meta name="description" content="Entre em contato com a Ver Industrial para diagnósticos técnicos ou solicitações de estruturação de investimentos industriais." />
      </Helmet>
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-serif text-brand-white leading-tight font-bold mb-4">
                  Inicie sua <span className="italic">Estruturação</span>.
                </h1>
                <p className="text-brand-gold font-serif text-xl md:text-2xl italic leading-tight">Contato</p>
              </div>
              <p className="text-brand-white/80 text-lg md:text-xl font-medium leading-relaxed mb-12">
                Nossos projetos passam por uma análise prévia de compatibilidade. Buscamos investidores e empresários que valorizam o rigor metodológico e a profundidade analítica.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-3 rounded-sm mr-6">
                    <Mail className="text-brand-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-brand-white font-serif text-lg mb-1">E-mail Corporativo</h4>
                    <p className="text-brand-white/40 text-sm">contato@verindustrial.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-3 rounded-sm mr-6">
                    <Phone className="text-brand-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-brand-white font-serif text-lg mb-1">Atendimento Direto</h4>
                    <p className="text-brand-white/40 text-sm">+55 (48) 98840-1690</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-3 rounded-sm mr-6">
                    <MapPin className="text-brand-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-brand-white font-serif text-lg mb-1">Escritório Central</h4>
                    <p className="text-brand-white/40 text-sm">Florianópolis, SC — Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-brand-navy/30 p-6 md:p-16 border border-brand-gold/10 shadow-2xl backdrop-blur-md"
            >
              <h3 className="text-brand-white font-serif text-2xl md:text-3xl mb-8 font-bold text-center lg:text-left">Fale Conosco</h3>
              <p className="text-brand-white/70 text-base md:text-lg font-medium leading-relaxed mb-12 text-center lg:text-left">
                Para diagnósticos técnicos ou solicitações de estruturação, utilize nossos canais diretos de atendimento:
              </p>

              <div className="space-y-6 md:space-y-8">
                <a 
                  href="mailto:contato@verindustrial.com.br"
                  className="flex items-center p-4 md:p-6 bg-brand-white/5 border border-brand-gold/10 hover:border-brand-gold/30 transition-all group"
                >
                  <div className="bg-brand-gold/20 p-3 md:p-4 rounded-full mr-4 md:mr-6 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="text-brand-gold w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-brand-gold text-[9px] md:text-[10px] uppercase tracking-widest font-bold block mb-1">Enviar E-mail</span>
                    <span className="text-brand-white font-serif text-base md:text-lg font-bold block break-all">contato@verindustrial.com.br</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5548988401690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 md:p-6 bg-brand-white/5 border border-brand-gold/10 hover:border-brand-gold/30 transition-all group"
                >
                  <div className="bg-brand-gold/20 p-3 md:p-4 rounded-full mr-4 md:mr-6 group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageSquare className="text-brand-gold w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-brand-gold text-[9px] md:text-[10px] uppercase tracking-widest font-bold block mb-1">Telefone ou WhatsApp</span>
                    <span className="text-brand-white font-serif text-base md:text-lg font-bold block">+55 (48) 98840-1690</span>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-gold/10 text-center lg:text-left">
                <p className="text-brand-white/30 text-xs uppercase tracking-widest leading-relaxed">
                  Atendimento de Segunda a Sexta, das 09h às 18h. <br />
                  Seus dados serão tratados com absoluto sigilo profissional.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
