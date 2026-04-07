import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Target, Settings, Zap, BarChart3, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const modules = [
    {
      id: 1,
      title: 'Direcionamento Estratégico',
      icon: <Target className="w-8 h-8" />,
      question: 'Onde investir?',
      desc: 'Define onde investir com maior probabilidade de sucesso (mercado, região, logística) para evitar o erro de alocar capital no lugar errado.',
      path: '/servicos/inteligencia'
    },
    {
      id: 2,
      title: 'Estruturação Técnica',
      icon: <Settings className="w-8 h-8" />,
      question: 'Como produzir?',
      desc: 'Define como produzir com eficiência, mapeando tecnologia, capacidade e gargalos para garantir que o projeto funcione no chão de fábrica.',
      path: '/servicos/tecnica'
    },
    {
      id: 3,
      title: 'Estruturação Econômica',
      icon: <Zap className="w-8 h-8" />,
      question: 'Quanto custa?',
      desc: 'Traz uma visão 360° de custos, receitas e cadeia de suprimentos, transformando a ideia em um negócio estruturado de pé.',
      path: '/servicos/operacional'
    },
    {
      id: 4,
      title: 'Análise de Risco',
      icon: <BarChart3 className="w-8 h-8" />,
      question: 'Qual o retorno?',
      desc: 'Modelagem de fluxo de caixa, retorno (TIR) e testes de cenários para responder se o investimento realmente vale a pena.',
      path: '/servicos/viabilidade'
    },
    {
      id: 5,
      title: 'Plano de Implementação',
      icon: <ShieldCheck className="w-8 h-8" />,
      question: 'Como executar?',
      desc: 'Desenhado o cronograma completo com prazos, dependências e marcos críticos para tirar o projeto do papel.',
      path: '/servicos/risco'
    },
    {
      id: 6,
      title: 'Acesso ao Capital',
      icon: <FileText className="w-8 h-8" />,
      question: 'Como financiar?',
      desc: 'Organização de toda a documentação e lógica financeira para o mercado, viabilizando o capital necessário junto a bancos e investidores.',
      path: '/servicos/implantacao'
    }
  ];

  return (
    <div className="pt-32">
      <Helmet>
        <title>Serviços | Ver Industrial - Estruturação de Projetos</title>
        <meta name="description" content="Conheça nossos serviços de estruturação industrial: inteligência estratégica, estruturação técnica, viabilidade financeira e acesso ao capital." />
      </Helmet>
      <section className="py-20 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/Imagens/E-seguro-investir-em-fundo-de-investimento.jpg" 
            alt="Industrial Planning" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-[1600px] mx-auto px-8 relative z-10">
          <div className="max-w-5xl">
            <h1 className="micro-label mb-8">Nossos Serviços</h1>
            <h2 className="text-4xl md:text-8xl font-serif text-brand-white mb-10 leading-tight font-bold">
              Estruturação de <span className="italic">Investimentos</span>.
            </h2>
            <p className="text-brand-white/80 text-lg md:text-xl font-medium leading-relaxed">
              Nossa abordagem transcende o convencional. Somos especialistas em estruturação de projetos, integrando engenharia e estratégia financeira para que cada decisão de investimento seja tomada com absoluta confiança e precisão.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {modules.map((module) => (
              <motion.div 
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-brand-gold/20 pb-12"
              >
                <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">{module.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{module.title}</h3>
                <p className="text-brand-gold-muted text-[10px] uppercase tracking-widest mb-6 font-bold">{module.question}</p>
                <p className="text-brand-black/60 text-sm font-light leading-relaxed mb-8">
                  {module.desc}
                </p>
                <Link 
                  to={module.path} 
                  className="inline-flex items-center text-[10px] uppercase tracking-widest text-brand-gold font-bold hover:translate-x-2 transition-transform"
                >
                  Explorar Módulo <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Complementares */}
      <section className="py-32 bg-navy-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-brand-gold text-[11px] uppercase tracking-[0.3em] mb-6">Integração Estratégica</h2>
              <h3 className="text-4xl font-serif text-brand-white mb-8">Serviços Complementares (Add-ons)</h3>
              <p className="text-brand-white/60 font-light leading-relaxed mb-8">
                A Ver Industrial atua como o elo central da gestão técnica. Embora a execução direta de áreas como marketing ou jurídico caiba a especialistas parceiros, coordenamos cada frente sob nossa supervisão estratégica para assegurar a integridade do projeto.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l border-brand-gold/30 pl-6">
                  <h4 className="text-brand-white font-serif text-lg mb-2">Marketing & Branding</h4>
                  <p className="text-brand-white/40 text-xs font-light">Posicionamento de mercado e identidade industrial.</p>
                </div>
                <div className="border-l border-brand-gold/30 pl-6">
                  <h4 className="text-brand-white font-serif text-lg mb-2">Regulatório & Ambiental</h4>
                  <p className="text-brand-white/40 text-xs font-light">Licenciamento e conformidade técnica específica.</p>
                </div>
                <div className="border-l border-brand-gold/30 pl-6">
                  <h4 className="text-brand-white font-serif text-lg mb-2">Engenharia Específica</h4>
                  <p className="text-brand-white/40 text-xs font-light">Cálculos estruturais e projetos de detalhamento.</p>
                </div>
                <div className="border-l border-brand-gold/30 pl-6">
                  <h4 className="text-brand-white font-serif text-lg mb-2">Consultoria Jurídica</h4>
                  <p className="text-brand-white/40 text-xs font-light">Estruturação societária e contratos industriais.</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-navy/30 p-12 border border-brand-gold/10 backdrop-blur-sm">
              <h4 className="text-brand-gold font-serif text-2xl mb-6 italic">Coordenação Técnica Estratégica</h4>
              <p className="text-brand-white/70 font-light leading-relaxed mb-6">
                Nossa cobrança por coordenação garante que todos os fornecedores falem a mesma língua técnica e econômica do investidor, evitando retrabalhos e lacunas de comunicação.
              </p>
              <div className="h-px w-full bg-brand-gold/20 mb-6"></div>
              <p className="text-brand-white/40 text-xs uppercase tracking-widest">A Ver Industrial é a sua única interface de gestão técnica.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
