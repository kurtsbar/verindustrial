import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Target,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Activity,
  BarChart3,
  Search,
  Settings,
  Layers
} from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Ver Industrial | Estruturação de Investimentos e Gestão</title>
        <meta name="description" content="Estruturamos decisões estratégicas, investimentos e sistemas de gestão para crescimento consistente." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Industrial Architecture" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent opacity-90" />
        </div>

        <div className="max-w-[1600px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full max-w-xl">
                <div className="absolute -inset-10 bg-brand-gold/10 blur-[120px] rounded-full opacity-50" />
                <img 
                  src="/Imagens/VerIndustrialPBranca.png"
                  alt="Ver Industrial"
                  className="w-110 h-auto object-contain relative z-10 transition-all duration-1000 opacity-90 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-white mb-8 leading-[1.1] font-bold tracking-tight">
                Estruturamos <span className="text-brand-gold">Decisões Estratégicas</span>, <span className="text-brand-gold">Projetos de Investimento</span> e <span className="text-brand-gold">Sistemas de Gestão</span>.
              </h1>
              <p className="text-xl md:text-2xl text-brand-white/80 mb-12 font-medium leading-relaxed max-w-2xl">
                Com metodologias específicas para diferentes estágios e perfis de investidores, garantimos que seu projeto seja estruturado com precisão técnica e econômica para um crescimento consistente.
              </p>
              <Link 
                to="/servicos" 
                className="inline-flex items-center px-10 py-5 bg-brand-gold text-brand-black font-extrabold uppercase tracking-widest hover:bg-brand-white transition-all duration-500 shadow-2xl shadow-brand-gold/20 group text-sm"
              >
                Entenda qual abordagem faz sentido para o seu momento <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Para quem é Section */}
      <section className="py-32 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-brand-gold text-[11px] uppercase tracking-[0.2em] mb-6 font-bold">Para quem é</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-brand-black leading-tight">
              Soluções desenhadas para o seu <span className="italic">estágio atual</span>.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quem está começando',
                desc: 'Estruturação completa de novos negócios, com análise de viabilidade, desenho operacional e clareza sobre riscos e retornos.',
                icon: <Rocket />,
                path: '/servicos/investimento/comecando'
              },
              {
                title: 'Empresas em crescimento',
                desc: 'Organização de processos e estrutura produtiva para destravar escala com consistência e controle.',
                icon: <TrendingUp />,
                path: '/servicos/investimento/crescimento'
              },
              {
                title: 'Empresas estruturadas',
                desc: 'Avaliação estratégica de investimentos, identificação de oportunidades e otimização de retorno sobre capital.',
                icon: <ShieldCheck />,
                path: '/servicos/investimento/estruturadas'
              }
            ].map((profile, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 border border-brand-black/5 bg-brand-gold/5 hover:bg-brand-gold/10 transition-all group flex flex-col h-full"
              >
                <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform origin-left">
                  {profile.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-6">{profile.title}</h4>
                <p className="text-brand-black/60 font-medium leading-relaxed mb-8 flex-grow">
                  {profile.desc}
                </p>
                <Link to={profile.path} className="text-brand-gold font-bold uppercase tracking-widest text-[10px] flex items-center group/link">
                  Saiba mais <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnóstico Section */}
      <section className="py-32 bg-brand-navy text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Imagens/diagnostico empresa.png" 
            alt="Diagnóstico de fundo" 
            className="w-full h-full object-cover opacity-35 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-brand-gold/5 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-brand-gold text-[11px] uppercase tracking-[0.2em] mb-8 font-bold">Quando a decisão não está clara</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Diagnóstico estratégico para redução de <span className="text-brand-gold italic">incerteza</span>.</h2>
              <p className="text-xl text-brand-white/70 mb-12 leading-relaxed font-medium">
                Nem sempre o problema está evidente. Em muitos casos, decisões são tomadas com base em percepção, não em evidência.
              </p>
              
              <div className="space-y-8 mb-12">
                {[
                  'Identificar os fatores que realmente influenciam clientes, mercado e operação',
                  'Separar percepção de impacto real',
                  'Apoiar decisões com maior nível de segurança'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Search size={14} className="text-brand-gold" />
                    </div>
                    <p className="text-lg text-brand-white/80 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/servicos/diagnostico" 
                className="inline-block px-8 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all text-[11px]"
              >
                Conhecer Diagnóstico
              </Link>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20">
                <img 
                  src="/Imagens/pessoa-que-sente-ansiedade-induzida-por-labirinto-131917918.jpg" 
                  alt="Incerteza e Labirinto" 
                  className="w-full h-full object-cover grayscale-50 hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistemas Gerenciais Section */}
      <section className="py-32 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-brand-gold/5 rounded-3xl -z-10" />
              <img 
                src="/Imagens/E-seguro-investir-em-fundo-de-investimento.jpg" 
                alt="Sistemas de Gestão" 
                className="rounded-2xl shadow-2xl  grayscale-50 hover:grayscale-0 transition-all duration-700 border border-brand-gold/10"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h4 className="text-brand-gold-muted text-[11px] uppercase tracking-[0.2em] mb-8 font-bold">Estratégia precisa de sustentação</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight text-brand-black">Estruturação de sistemas <span className="italic">gerenciais</span>.</h2>
              <p className="text-xl text-brand-black/60 mb-12 leading-relaxed font-medium">
                Decisões bem definidas perdem valor quando não são acompanhadas corretamente. Desenvolvemos estruturas de gestão que permitem controle real.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  'Organização e padronização de informações',
                  'Consolidação de indicadores relevantes',
                  'Visibilidade contínua para suporte à tomada de decisão'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Settings size={14} className="text-brand-gold-muted" />
                    </div>
                    <p className="text-lg text-brand-black/80 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/servicos/sistemas-gerenciais" 
                className="inline-block px-8 py-4 bg-brand-black text-brand-white font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all text-[11px]"
              >
                Trabalhar na Sustentação
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Atuamos Section */}
      <section className="py-32 bg-navy-gradient text-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h4 className="text-brand-gold text-[11px] uppercase tracking-[0.2em] mb-6 font-bold">Método</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Como atuamos</h2>
            <p className="text-brand-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest">
              Nossa atuação está organizada em três níveis complementares:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Entendimento',
                desc: 'Análise estruturada de cenário e direcionamento estratégico baseado em evidências.',
                icon: <Activity />
              },
              {
                title: 'Decisão',
                desc: 'Modelagem de investimentos e estratégias de crescimento com segurança analítica.',
                icon: <Target />
              },
              {
                title: 'Sustentação',
                desc: 'Organização da gestão e acompanhamento constante dos resultados e indicadores.',
                icon: <Layers />
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-12 border border-brand-white/10 hover:border-brand-gold/30 transition-all rounded-2xl bg-brand-white/5 group"
              >
                <div className="w-20 h-20 bg-brand-gold text-brand-black rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 italic">{step.title}</h3>
                <p className="text-brand-white/60 text-lg font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-brand-gold relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-brand-black text-4xl md:text-7xl font-serif mb-12 font-bold leading-tight">
            Vamos estruturar o seu <br /> próximo passo?
          </h3>
          <p className="text-brand-black/80 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-bold leading-relaxed">
            Converse conosco e entenda qual abordagem é mais adequada para o seu momento.
          </p>
          <Link 
            to="/contato" 
            className="inline-block px-12 py-6 bg-brand-black text-brand-white font-extrabold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all duration-500 shadow-2xl rounded-xl text-sm"
          >
            Fazer uma Avaliação estratégica
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

