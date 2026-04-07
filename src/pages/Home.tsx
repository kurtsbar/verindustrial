import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  Activity, 
  AlertTriangle, 
  XCircle, 
  TrendingDown, 
  CheckCircle2, 
  ShieldCheck, 
  Banknote, 
  Rocket,
  Target,
  Settings,
  Zap,
  BarChart3,
  FileText,
  HardHat,
  Briefcase,
  Building2,
  Factory,
  Shield,
  Eye,
  DollarSign,
  Layout
} from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Ver Industrial | Estruturação de Investimentos Industriais</title>
        <meta name="description" content="Especialistas em estruturação de investimentos para crescimento empresarial. Transformamos decisões de expansão em projetos viáveis, financiáveis e executáveis." />
      </Helmet>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-gradient opacity-95" />


        </div>


        <div className="max-w-[1600px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-brand-white mb-8 leading-[1.1] font-bold tracking-tight">
              Estruturação de <br />
              <span className="text-brand-gold">Investimentos</span> para Crescimento Empresarial
            </h1>
            <h2 className="text-xl md:text-3xl text-brand-white/90 mb-6 font-medium">
              Como investir com o menor risco possível e a maior chance de retorno
            </h2>
            <p className="text-lg md:text-2xl mb-12 font-medium leading-relaxed max-w-2xl text-brand-white/70">
              Transformamos decisões de crescimento em projetos viáveis, financiáveis e executáveis.
            </p>
            <Link 
              to="/contato" 
              className="inline-flex items-center px-10 py-5 bg-brand-gold text-brand-black font-extrabold uppercase tracking-widest hover:bg-brand-white transition-all duration-500 shadow-2xl shadow-brand-gold/20 group"
            >
              Fazer uma Avaliação <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      

      {/* 3. PROBLEM SECTION */}
      <section className="py-32 bg-brand-navy text-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10">O perigo do crescimento sem estrutura</h2>
              <p className="text-2xl text-brand-white/80 mb-12 leading-relaxed">
                O erro mais comum não é crescer — é crescer sem uma visão estruturada do investimento.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  { text: 'Comprar equipamentos sem planejamento', icon: <AlertTriangle className="text-brand-gold" /> },
                  { text: 'Expandir operações sem modelagem', icon: <XCircle className="text-brand-gold" /> },
                  { text: 'Aumentar custos sem previsibilidade', icon: <TrendingDown className="text-brand-gold" /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-xl font-medium">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brand-gold text-xl font-bold italic">
                Isso cria uma falsa sensação de controle — enquanto o risco aumenta silenciosamente.
              </p>
            </motion.div>
            <div className="relative">
              <img 
                src="/Imagens/3d-rendering-black-white-background.jpg" 
                alt="Industrial Structure" 
                className="rounded-2xl shadow-2xl grayscale opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. DILEMMA SECTION */}
      <section className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-black font-bold text-center mb-24">O dilema do empresário</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/10 mb-24">
            <div className="bg-brand-white p-16 text-center">
              <h3 className="text-3xl font-serif text-brand-black mb-6 font-bold">Crescer sem estrutura aumenta o risco</h3>
              <div className="w-12 h-1 bg-brand-gold mx-auto" />
            </div>
            <div className="bg-brand-white p-16 text-center">
              <h3 className="text-3xl font-serif text-brand-black mb-6 font-bold">Não investir reduz competitividade</h3>
              <div className="w-12 h-1 bg-brand-gold mx-auto" />
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-12 bg-brand-black text-brand-white rounded-2xl shadow-2xl">
              <p className="text-3xl md:text-4xl font-serif font-bold">
                O problema não é investir. <span className="text-brand-gold">É investir sem estrutura.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REFRAME SECTION */}
      <section className="py-40 bg-brand-gold relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl lg:text-8xl font-serif text-brand-black font-bold leading-tight"
          >
            Como investir com o menor risco possível e a maior chance de retorno?
          </motion.h2>
        </div>
      </section>

      {/* 6. WHAT WE DO */}
      <section className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-black font-bold mb-10">Estruturamos decisões de investimento</h2>
          <p className="text-2xl md:text-3xl text-brand-black/70 max-w-4xl mx-auto font-medium leading-relaxed">
            Nosso trabalho vai além de consultoria. <br />
            <span className="text-brand-black font-bold">Estruturamos o investimento para que ele seja seguro, financiável e executável.</span>
          </p>
        </div>
      </section>

      {/* 7. DELIVERABLES (CARDS) */}
      <section className="py-32 bg-brand-gold/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Viável', desc: 'Aderente ao mercado e à operação', icon: <CheckCircle2 /> },
              { title: 'Sustentável', desc: 'Rentável ao longo do tempo', icon: <ShieldCheck /> },
              { title: 'Financiável', desc: 'Estruturado na lógica de bancos e investidores', icon: <Banknote /> },
              { title: 'Executável', desc: 'Pronto para sair do papel', icon: <Rocket /> }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-brand-white border border-brand-black/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-brand-gold mb-6 scale-150 origin-left">{card.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-brand-black mb-4">{card.title}</h3>
                <p className="text-brand-black/60 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROCESS */}
      <section className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-black font-bold mb-6">Estruturação em etapas</h2>
            <p className="text-xl text-brand-black/60 font-medium uppercase tracking-widest">Cada etapa reduz uma parte específica do risco</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { id: '01', title: 'Direcionamento Estratégico', desc: 'Onde investir com maior probabilidade de sucesso', icon: <Target /> },
              { id: '02', title: 'Estruturação Técnica', desc: 'Como produzir com eficiência', icon: <Settings /> },
              { id: '03', title: 'Estruturação Econômica', desc: 'Como o negócio se sustenta', icon: <Zap /> },
              { id: '04', title: 'Análise de Risco', desc: 'Retorno, cenários e sensibilidade', icon: <BarChart3 /> },
              { id: '05', title: 'Plano de Implementação', desc: 'Como o projeto sai do papel', icon: <ShieldCheck /> },
              { id: '06', title: 'Acesso ao Capital', desc: 'Estruturação para financiamento e captação', icon: <FileText /> }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-10 border border-brand-black/5 rounded-2xl group hover:border-brand-gold/30 transition-all"
              >
                <div className="absolute top-6 right-8 text-brand-gold/20 font-mono text-6xl font-bold group-hover:text-brand-gold/40 transition-colors">{step.id}</div>
                <div className="w-14 h-14 bg-brand-black text-brand-gold rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-black mb-4 pr-12">{step.title}</h3>
                <p className="text-brand-black/60 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DIFFERENTIAL SECTION */}
      <section className="py-32 bg-navy-gradient text-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Uma visão que integra três mundos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { title: 'Investidor', desc: 'Avaliação de risco e retorno', icon: <Briefcase /> },
              { title: 'Banco', desc: 'Estruturação aderente ao crédito', icon: <Building2 /> },
              { title: 'Indústria', desc: 'Execução no mundo real', icon: <Factory /> }
            ].map((col, idx) => (
              <div key={idx} className="p-12 border border-brand-gold/20 bg-brand-white/5 backdrop-blur-sm rounded-2xl text-center">
                <div className="w-20 h-20 bg-brand-gold text-brand-black rounded-full flex items-center justify-center mx-auto mb-10">
                  {col.icon}
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6">{col.title}</h3>
                <p className="text-brand-white/70 text-lg font-medium">{col.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl text-brand-gold font-bold italic">
              Essa integração aumenta significativamente a chance de sucesso do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* 10. IMPACT SECTION */}
      <section className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/Imagens/Como-fazer-um-planejamento-financeiro-eficiente-e-evitar-prejuizos-no-seu-negocio-1024x683.jpg" 
                alt="Precision Engineering" 
                className="rounded-2xl shadow-2xl opacity-60"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-serif text-brand-black font-bold mb-12">O impacto na prática</h2>
              <ul className="space-y-8 mb-12">
                {[
                  { text: 'Redução drástica de risco', icon: <Shield /> },
                  { text: 'Clareza absoluta na decisão', icon: <Eye /> },
                  { text: 'Acesso facilitado a financiamento', icon: <DollarSign /> },
                  { text: 'Crescimento estruturado', icon: <Layout /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-6 text-2xl font-medium text-brand-black/80">
                    <div className="text-brand-gold">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-3xl font-serif font-bold text-brand-black">
                Não é apenas um estudo. <br />
                <span className="text-brand-gold italic">É a base para uma execução bem-sucedida.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WORK MODEL */}
      <section className="py-32 bg-brand-gold/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-white font-bold text-center mb-24">Modelo flexível e alinhado ao seu momento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-16 bg-brand-white border border-brand-black/5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-serif text-brand-black mb-8 font-bold">Execução modular</h3>
              <p className="text-xl text-brand-black/60 font-medium leading-relaxed">
                Projeto desenvolvido por etapas (Stage-Gate), garantindo que cada investimento em estruturação seja validado antes do próximo passo.
              </p>
            </div>
            <div className="p-16 bg-brand-white border border-brand-black/5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-serif text-brand-black mb-8 font-bold">Alinhamento financeiro</h3>
              <p className="text-xl text-brand-black/60 font-medium leading-relaxed">
                Parte da estrutura pode ser viabilizada no próprio financiamento, alinhando nossos interesses à viabilidade do seu projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL STATEMENT */}
      <section className="py-48 bg-brand-white border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-7xl lg:text-8xl font-serif text-brand-black font-bold leading-tight tracking-tighter">
              Crescer é inevitável <br />
              <span className="text-brand-gold italic">Crescer com estrutura é opcional</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-32 bg-brand-gold relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-brand-black text-3xl md:text-6xl font-serif mb-10 font-bold">Vamos estruturar o seu próximo passo?</h3>
          <p className="text-brand-black/80 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-bold leading-relaxed">
            Podemos avaliar seu cenário atual e mapear o melhor caminho para esse crescimento.
          </p>
          <Link 
            to="/contato" 
            className="inline-block px-12 py-6 bg-brand-black text-brand-white font-extrabold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all duration-500 shadow-2xl rounded-xl"
          >
            Fazer uma Avaliação
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

