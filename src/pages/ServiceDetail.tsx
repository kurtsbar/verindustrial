import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const serviceData: Record<string, any> = {
  'comecando': {
    title: 'Estruturação de Novos Negócios',
    question: 'Transformar intenção em realidade?',
    image: '/Imagens/Como-fazer-um-planejamento-financeiro-eficiente-e-evitar-prejuizos-no-seu-negocio-1024x683.jpg',
    problem: 'Muitos novos negócios falham por falta de clareza operacional e financeira antes do primeiro centavo ser investido.',
    includes: [
      'Identificação de Oportunidades e Nichos de Mercado',
      'Desenho Detalhado do Processo Produtivo ou Operacional',
      'Levantamento Rigoroso de Custos e Investimentos Necessários',
      'Projeção de Fluxo de Caixa, Retorno e Risco (TIR/VPL)',
      'Planejamento de Implementação Passo a Passo'
    ],
    expectedResult: 'Um projeto viável, estruturado e pronto para ser executado ou apresentado a investidores.',
    targetProfile: 'Pessoas físicas e empreendedores em fase inicial ou mudança de carreira.'
  },
  'crescimento': {
    title: 'Escala Operacional para Pequenas Empresas',
    question: 'Como crescer com controle?',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    problem: 'Empresas que operam mas enfrentam limitações de escala frequentemente estão presas em processos ineficientes.',
    includes: [
      'Análise Profunda do Modelo Operacional Atual',
      'Identificação de Gargalos e Ineficiências Críticas',
      'Redesenho de Processos com Foco em Ganho de Escala',
      'Estruturação de Ferramentas de Controle e Gestão',
      'Plano de Expansão Produtiva e Organizacional'
    ],
    expectedResult: 'Uma operação otimizada, capaz de suportar o aumento de demanda sem perder a qualidade ou o lucro.',
    targetProfile: 'Pequenas empresas em estágio de estagnação ou crescimento desordenado.'
  },
  'estruturadas': {
    title: 'Otimização para Empresas Estruturadas',
    question: 'Onde está o próximo ganho?',
    image: '/Imagens/E-seguro-investir-em-fundo-de-investimento.jpg',
    problem: 'Em empresas consolidadas, os maiores erros costumam vir do custo de oportunidade, um risco muitas vezes oculto em decisões de investimento não estruturadas.',
    includes: [
      'Análise de Alocação de Capital e Ativos',
      'Identificação de Oportunidades Ocultas de Melhoria de Margem',
      'Avaliação Técnica e Financeira de Novos Projetos ou Expansões',
      'Modelagem Avançada de Risco e Simulação de Cenários',
      'Auditoria Estratégica de Processos e Retorno'
    ],
    expectedResult: 'Eficiência máxima de capital e clareza sobre o retorno de cada centavo investido na operação.',
    targetProfile: 'Médias e grandes empresas que buscam expansão ou diversificação de portifolio.'
  },
  'diagnostico': {
    title: 'Diagnóstico Estratégico e Direcionamento',
    question: 'Qual decisão tomar?',
    image: '/Imagens/pessoa-que-sente-ansiedade-induzida-por-labirinto-131917918.jpg',
    problem: 'Tomar grandes decisões baseadas em percepção subjetiva ou palpites aumenta drasticamente o risco do negócio.',
    includes: [
      'Mapeamento dos Fatores Reais de Influência no Negócio',
      'Entrevistas e Análise com Stakeholders e Clientes',
      'Hierarquização de Impacto de Problemas e Oportunidades',
      'Base Estruturada de Evidências para Direcionamento',
      'Relatório de Prioridades e Próximos Passos'
    ],
    expectedResult: 'Clareza absoluta sobre o que realmente importa e qual caminho estratégico seguir com segurança.',
    targetProfile: 'Líderes e conselhos que enfrentam incertezas críticas ou mudanças de mercado.'
  },
  'sistemas-gerenciais': {
    title: 'Estruturação de Sistemas Gerenciais',
    question: 'Você tem o controle?',
    image: '/Imagens/3d-rendering-black-white-background.jpg',
    problem: 'Decisões estratégicas perdem o valor se a operação diária não é acompanhada por indicadores confiáveis.',
    includes: [
      'Padronização e Organização de Fluxos de Dados',
      'Estruturação de Controles por Área (Financeiro, Produção, Vendas)',
      'Definição de Indicadores de Desempenho (KPIs) Relevantes',
      'Consolidação de Informações para Acompanhamento Contínuo',
      'Desenvolvimento de Dashboards e Painéis Integrados'
    ],
    expectedResult: 'Visibilidade total da operação em tempo real, permitindo correções rápidas e decisões informadas.',
    targetProfile: 'Empresas que precisam profissionalizar sua gestão e controle de resultados.'
  }
};

const ServiceDetail = () => {
  const { profile } = useParams();
  const location = useLocation();
  
  let slug = profile;
  if (!slug) {
    if (location.pathname.includes('diagnostico')) slug = 'diagnostico';
    else if (location.pathname.includes('sistemas-gerenciais')) slug = 'sistemas-gerenciais';
  }
  
  const data = slug ? serviceData[slug] : null;

  if (!data) return <div className="pt-40 text-center font-serif text-2xl text-brand-white">Página não encontrada.</div>;

  return (
    <div className="min-h-screen pt-40 lg:pt-48 pb-20 relative">
      <div className="absolute inset-0 z-0">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/80" />
      </div>

      <Helmet>
        <title>{`${data.title} | Ver Industrial`}</title>
        <meta name="description" content={data.problem} />
      </Helmet>
      <section className="relative z-10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Link to="/servicos" className="relative z-20 inline-flex items-center text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-16 hover:-translate-x-2 transition-transform font-bold group">
            <ArrowLeft className="mr-2 w-3 h-3 group-hover:scale-125 transition-transform" /> Voltar para Menu de Serviços
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20"
            >
              <div className="mb-12">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-white leading-tight font-bold mb-4">
                  {data.title}
                </h1>
                <p className="text-brand-gold font-serif text-xl md:text-2xl italic leading-tight">
                  {data.question}
                </p>
              </div>
              
              <div className="bg-brand-gold p-10 mb-12 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 -rotate-45 translate-x-16 -translate-y-16 transition-transform group-hover:scale-110" />
                <h4 className="text-brand-black/60 text-[10px] uppercase tracking-[0.2em] mb-6 font-bold flex items-center">
                  <span className="w-8 h-px bg-brand-black/20 mr-3"></span>
                  O Problema a ser resolvido
                </h4>
                <p className="text-brand-black text-xl md:text-2xl font-serif font-bold leading-relaxed italic relative z-10">
                  "{data.problem}"
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-brand-gold text-[11px] uppercase tracking-[0.4em] font-bold">Escopo do Serviço</h4>
                <div className="grid grid-cols-1 gap-4">
                  {data.includes.map((item: string, i: number) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start text-brand-white/70 bg-brand-white/5 p-4 hover:bg-brand-gold/5 transition-all border border-brand-white/5"
                    >
                      <CheckCircle2 className="text-brand-gold w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-base md:text-lg font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="lg:sticky lg:top-40 space-y-10 relative z-20">
              <div className="bg-brand-white p-12 lg:p-16 text-brand-black shadow-2xl relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />
                <div className="mb-10">
                  <h4 className="text-brand-gold-muted text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">Entrega / Resultado</h4>
                  <p className="text-2xl md:text-3xl font-serif font-bold leading-tight text-brand-black">{data.expectedResult}</p>
                </div>
                <div className="h-px w-full bg-brand-gold/20 mb-10"></div>
                <div>
                  <h4 className="text-brand-gold-muted text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">A quem se destina</h4>
                  <p className="text-brand-black font-bold text-lg leading-relaxed">{data.targetProfile}</p>
                </div>
              </div>

              <div className="border border-brand-gold/30 p-10 bg-brand-navy/50 backdrop-blur-md">
                <h4 className="text-brand-gold font-serif text-2xl mb-6 font-bold italic uppercase tracking-wider">Iniciar Diagnóstico</h4>
                <p className="text-brand-white/60 text-base font-light leading-relaxed mb-8">
                  Cada projeto demanda uma estruturação personalizada. Entre em contato para validarmos o seu momento.
                </p>
                <Link 
                  to="/contato" 
                  className="inline-block w-full py-5 bg-brand-gold text-brand-black text-center text-[11px] uppercase tracking-[0.3em] font-extrabold hover:bg-brand-white transition-all duration-300 shadow-xl"
                >
                  Solicitar Avaliação Técnica
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
