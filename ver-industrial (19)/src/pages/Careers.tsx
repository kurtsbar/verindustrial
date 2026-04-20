import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, CheckCircle2 } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen pt-40 lg:pt-48 pb-20">
      <Helmet>
        <title>Trabalhe Conosco | Ver Industrial</title>
        <meta name="description" content="Junte-se à Ver Industrial. Buscamos profissionais que valorizam o rigor metodológico e a profundidade analítica em projetos industriais." />
      </Helmet>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-serif text-brand-white leading-tight font-bold mb-4">
                Buscamos o <span className="italic">Rigor</span>.
              </h1>
              <p className="text-brand-gold font-serif text-xl md:text-2xl italic leading-tight">Trabalhe Conosco</p>
            </div>
            <p className="text-brand-white/80 text-lg md:text-xl font-medium leading-relaxed mb-12">
              A Ver Industrial é formada por profissionais que possuem obsessão por método, clareza analítica e visão sistêmica. Se você acredita que a engenharia é a base para grandes decisões estratégicas, queremos conhecer seu perfil.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <h4 className="text-brand-white font-serif text-2xl mb-4">O que buscamos?</h4>
                <ul className="space-y-4 text-brand-white/50 font-light">
                  <li className="flex items-start"><span className="text-brand-gold mr-3">/</span> Capacidade analítica superior e atenção aos detalhes.</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-3">/</span> Formação sólida em Engenharia, Economia ou áreas correlatas.</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-3">/</span> Interesse genuíno por projetos industriais e modelagem de capital.</li>
                  <li className="flex items-start"><span className="text-brand-gold mr-3">/</span> Postura ética inquestionável e discrição absoluta.</li>
                </ul>
              </div>
              <div className="bg-brand-navy/30 p-10 border border-brand-gold/10 backdrop-blur-sm">
                <h4 className="text-brand-gold font-serif text-xl mb-4 italic">Banco de Talentos</h4>
                <p className="text-brand-white/60 text-sm font-light leading-relaxed">
                  Mantemos um banco de talentos ativo para projetos específicos e expansão da nossa equipe sênior.
                </p>
              </div>
            </div>

            <div className="bg-brand-navy/30 p-10 md:p-16 border border-brand-gold/20 backdrop-blur-sm">
              <h3 className="text-brand-white font-serif text-3xl mb-8 font-bold">Envie seu Perfil</h3>
              <p className="text-brand-white/70 text-lg leading-relaxed mb-10">
                Para se candidatar a futuras oportunidades, envie seu currículo e link do LinkedIn diretamente para o nosso e-mail de recrutamento:
              </p>
              
              <div className="bg-brand-navy/50 p-8 border-l-2 border-brand-gold mb-10">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-brand-gold w-5 h-5" />
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">E-mail para Candidatos</span>
                </div>
                <p className="text-brand-white text-xl font-serif font-bold break-all">contato@verindustrial.com.br</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-gold w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-brand-white/50 text-sm font-light">Seu perfil será analisado por nossa equipe técnica.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-gold w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-brand-white/50 text-sm font-light">Garantimos sigilo absoluto sobre sua candidatura.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
