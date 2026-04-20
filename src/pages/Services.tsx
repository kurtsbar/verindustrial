import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight,
  TrendingUp,
  Rocket,
  ShieldCheck,
  Search,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen pt-40 lg:pt-48">
      <Helmet>
        <title>Serviços | Ver Industrial - Projetos de Investimento</title>
        <meta name="description" content="Estruturação de novos negócios e otimização estratégica para crescimento industrial consistente." />
      </Helmet>
 
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/Imagens/Serviços.jpg" 
            alt="Investment Background" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-[1600px] mx-auto px-8 relative z-10 text-center md:text-left">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-8xl font-serif text-brand-white mb-6 leading-tight font-bold">
              Projetos de <span className="italic">Investimento</span> e Crescimento.
            </h1>
            <p className="text-brand-gold font-serif text-xl md:text-2xl italic mb-10 leading-tight">
              Investimento e Crescimento
            </p>
            <p className="text-brand-white/80 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl">
              Focados em transformar intenção em ativos viáveis e estruturados. Atuamos desde a identificação de nichos até a modelagem de escala operacional.
            </p>
          </div>
        </div>
      </section>

      {/* Main Focus Section */}
      <section className="py-32 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Estruturação negócios</h3>
            <p className="text-xl md:text-2xl text-brand-black/60 font-medium leading-relaxed max-w-4xl">
              Desenvolvimento completo de projetos de investimentos industriais. Nosso objetivo é garantir que o capital seja alocado onde o retorno é mais provável, independente do seu tamanho ou fase de maturidade. 
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quem está começando',
                slug: 'comecando',
                desc: 'Identificação de oportunidades, desenho operacional e projeção de fluxo de caixa para novos empreendedores.',
                icon: <Rocket className="w-10 h-10" />
              },
              {
                title: 'Escala operacional para pequenas empresas',
                slug: 'crescimento',
                desc: 'Identificação de gargalos e redesenho de processos para destravar o crescimento de quem já opera.',
                icon: <TrendingUp className="w-10 h-10" />
              },
              {
                title: 'Otimização para empresas estruturadas',
                slug: 'estruturadas',
                desc: 'Análise de alocação de capital e modelagem de risco para operações consolidadas e expansões.',
                icon: <ShieldCheck className="w-10 h-10" />
              }
            ].map((profile, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-gold/5 p-12 border border-brand-black/5 hover:border-brand-gold/20 transition-all flex flex-col group h-full"
              >
                <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform origin-left">{profile.icon}</div>
                <h4 className="text-2xl font-serif font-bold mb-6 italic leading-tight">{profile.title}</h4>
                <p className="text-brand-black/60 text-base font-medium leading-relaxed mb-10 flex-grow">
                  {profile.desc}
                </p>
                <Link 
                  to={`/servicos/investimento/${profile.slug}`}
                  className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] group/btn"
                >
                  Ver detalhamento <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="py-40 bg-brand-navy text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Imagens/pessoa-que-sente-ansiedade-induzida-por-labirinto-131917918.jpg" 
            alt="Estratégia e Direcionamento" 
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-navy/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h4 className="text-brand-gold text-[11px] uppercase tracking-[0.4em] mb-6 font-bold">Complementares</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Serviços Especializados</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Diagnóstico Estratégico e Direcionamento',
                path: '/servicos/diagnostico',
                desc: 'Aplicado quando há incerteza relevante na tomada de decisão. Foco em evidências reais para hierarquização de impacto.',
                icon: <Search className="w-12 h-12" />,
                details: ['Dúvidas sobre posicionamento', 'Incerteza sobre prioridades', 'Necessidade de base estruturada']
              },
              {
                title: 'Estruturação de Sistemas Gerenciais',
                path: '/servicos/sistemas-gerenciais',
                desc: 'Organização de informações e indicadores para garantir visibilidade e controle contínuo dos resultados.',
                icon: <Layers className="w-12 h-12" />,
                details: ['Padronização de dados', 'Definição de indicadores chave', 'Painéis gerenciais integrados']
              }
            ].map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-white/5 border border-brand-gold/10 p-16 rounded-2xl hover:border-brand-gold/30 transition-all group"
              >
                <div className="text-brand-gold mb-10">{addon.icon}</div>
                <h3 className="text-3xl font-serif font-bold mb-8 italic">{addon.title}</h3>
                <p className="text-brand-white/60 mb-10 text-lg leading-relaxed">{addon.desc}</p>
                <ul className="mb-12 space-y-4">
                  {addon.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-3 text-brand-white/40 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={addon.path}
                  className="inline-flex items-center gap-4 px-10 py-5 bg-brand-white/10 text-brand-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-brand-gold group-hover:text-brand-black transition-all"
                >
                  Ver Página Específica <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-serif text-brand-black font-bold mb-10">Tire sua dúvida técnica</h3>
          <p className="text-brand-black/70 text-xl font-bold max-w-2xl mx-auto mb-12 leading-relaxed">
            Nossa equipe está pronta para avaliar se o seu momento pede uma estruturação de investimento ou um diagnóstico estratégico.
          </p>
          <Link 
            to="/contato"
            className="inline-block px-12 py-5 bg-brand-black text-brand-white font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all shadow-xl text-xs"
          >
            Falar com um Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
