import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="pt-32">
      <Helmet>
        <title>Quem Somos | Ver Industrial - Especialistas em Indústria</title>
        <meta name="description" content="Conheça a Ver Industrial, liderada por Rafael Vieira da Silva. Unimos rigor técnico e estratégia financeira para estruturar o crescimento industrial seguro." />
      </Helmet>
      <section className="py-20 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Engineering" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="micro-label mb-8">Quem Somos</h1>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-white mb-10 leading-tight font-bold">
                Estruturamos o <span className="italic">Crescimento</span> com <span className="italic">Segurança</span>.
              </h2>
              <div className="space-y-6 text-brand-white/80 font-medium leading-relaxed text-lg md:text-xl">
                <p>
                  A Ver Industrial surgiu do compromisso em oferecer ao mercado uma visão sistêmica, unindo o rigor técnico da engenharia à sofisticação analítica da estratégia financeira.
                </p>
                <p>
                  Diferenciamo-nos pelo atendimento exclusivo e personalizado. Atuamos como um escritório de alta especialidade, onde cada projeto é estruturado com profundidade analítica, unindo o rigor científico à experiência prática em investimentos de alta complexidade.
                </p>
                <p>
                  Atuamos como o parceiro estratégico do investidor, assegurando que cada decisão seja fundamentada em dados auditáveis e modelagens precisas, trazendo clareza e segurança à jornada de expansão empresarial.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Imagens/Logo Ver Industrial Branco.png" 
                alt="Ver Industrial" 
                className="w-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </section>

      <section className="py-32 bg-brand-white text-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0">
              <img 
                src="/Imagens/FotoSitePessoal.png" 
                alt="Rafael Vieira da Silva - Fundador Ver Industrial" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-black leading-tight mb-2">
                Fundador da Ver Industrial
              </h3>
              <h4 className="text-2xl md:text-3xl font-serif text-brand-gold-muted mb-4 font-medium">
                Rafael Vieira da Silva
              </h4>
              <p className="text-lg text-brand-black/60 font-medium mb-6">
                Especialista em Investimentos Industriais e Análise de Risco
              </p>
              
              <div className="w-16 h-px bg-brand-gold mb-8 mx-auto md:mx-0" />

              <ul className="space-y-4 mb-10 text-brand-black/80 font-light text-base md:text-lg">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-brand-gold">•</span> Mestre em Engenharia de Produção (UFSC)
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-brand-gold">•</span> MBA em Engenharia de Negócios e Gestão de Projetos
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-brand-gold">•</span> 15+ anos em projetos industriais
                </li>
              </ul>

              <p className="text-xl font-serif italic text-brand-gold-muted font-medium leading-relaxed">
                "Transformando projetos industriais em decisões seguras de investimento."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-navy-gradient text-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h4 className="text-brand-gold text-[11px] uppercase tracking-[0.2em] mb-6 font-bold">Nossa Diferenciação</h4>
            <h2 className="text-4xl font-serif mb-8 max-w-3xl leading-tight text-brand-white">
              A ponte que une as <span className="italic">três visões essenciais</span> para o sucesso industrial.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 border border-brand-white/10 hover:border-brand-gold/20 transition-all group bg-brand-white/5">
              <h3 className="text-2xl font-serif mb-6 group-hover:text-brand-gold transition-colors italic">Visão de Investidor</h3>
              <p className="text-brand-white/70 font-light leading-relaxed">
                Olhar frio sobre o risco vs. retorno. Avaliamos se o projeto é sustentável no longo prazo e se o capital está sendo alocado com inteligência.
              </p>
            </div>
            <div className="p-10 border border-brand-white/10 hover:border-brand-gold/20 transition-all group bg-brand-white/5">
              <h3 className="text-2xl font-serif mb-6 group-hover:text-brand-gold transition-colors italic">Visão de Banco</h3>
              <p className="text-brand-white/70 font-light leading-relaxed">
                Estruturação de garantias e documentação na linguagem precisa das instituições financeiras para viabilizar o acesso ao capital.
              </p>
            </div>
            <div className="p-10 border border-brand-white/10 hover:border-brand-gold/20 transition-all group bg-brand-white/5">
              <h3 className="text-2xl font-serif mb-6 group-hover:text-brand-gold transition-colors italic">Visão de Indústria</h3>
              <p className="text-brand-white/70 font-light leading-relaxed">
                Foco na produtividade real e no chão de fábrica. Garantimos que o projeto técnico seja executável e eficiente operacionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <h4 className="text-brand-gold-muted text-[11px] uppercase tracking-[0.2em] mb-6 font-bold">Nossa Visão</h4>
              <p className="text-brand-black/70 font-light leading-relaxed">
                Ser a referência máxima em estruturação de projetos industriais, reconhecida pela precisão técnica e pela segurança que proporcionamos aos nossos clientes.
              </p>
            </div>
            <div>
              <h4 className="text-brand-gold-muted text-[11px] uppercase tracking-[0.2em] mb-6 font-bold">Nossa Missão</h4>
              <p className="text-brand-black/70 font-light leading-relaxed">
                Transformar intenções de investimento em ativos industriais viáveis, estruturados e protegidos através de método e inteligência estratégica.
              </p>
            </div>
            <div>
              <h4 className="text-brand-gold-muted text-[11px] uppercase tracking-[0.2em] mb-6 font-bold">Nossos Valores</h4>
              <p className="text-brand-black/70 font-light leading-relaxed">
                Rigor técnico, independência analítica, sigilo absoluto e compromisso inegociável com o retorno sobre o capital do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
