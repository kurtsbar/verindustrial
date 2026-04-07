import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const serviceData: Record<string, any> = {
  'inteligencia': {
    title: 'Direcionamento Estratégico',
    question: 'Onde investir?',
    problem: 'Alocar capital no lugar errado, sem considerar mercado, região ou logística, é o erro fatal de muitos projetos industriais.',
    includes: [
      'Identificação de Oportunidades com maior probabilidade de sucesso',
      'Análise de Vantagens Competitivas Regionais',
      'Estudo de Logística e Cadeia de Suprimentos Local',
      'Mapeamento de Mercado e Demanda Setorial'
    ],
    result: 'Um mapa estratégico claro que define a melhor localização e setor para o seu investimento.',
    profile: 'Investidores e empresários em fase de planejamento de novos negócios.'
  },
  'tecnica': {
    title: 'Estruturação Técnica',
    question: 'Como produzir?',
    problem: 'Projetos que ignoram a eficiência do chão de fábrica geram gargalos e custos operacionais insustentáveis.',
    includes: [
      'Mapeamento de Tecnologia e Capacidade Produtiva',
      'Desenho de Fluxos Operacionais e Layout Industrial',
      'Identificação e Mitigação de Gargalos Técnicos',
      'Definição de Requisitos de Equipamentos e Automação'
    ],
    result: 'Um projeto técnico eficiente, desenhado para a vida real e focado na produtividade máxima.',
    profile: 'Empresas que buscam eficiência operacional e modernização tecnológica.'
  },
  'operacional': {
    title: 'Estruturação Econômica',
    question: 'Quanto custa?',
    problem: 'A falta de uma visão 360° de custos e receitas transforma boas ideias em negócios inviáveis.',
    includes: [
      'Detalhamento de CAPEX (Investimento em Ativos)',
      'Detalhamento de OPEX (Custos Operacionais)',
      'Análise da Estrutura de Receitas e Margens',
      'Modelagem da Cadeia de Suprimentos e Insumos'
    ],
    result: 'Uma visão financeira completa e estruturada que prova a viabilidade do negócio de pé.',
    profile: 'Empresários que precisam de previsibilidade financeira total.'
  },
  'viabilidade': {
    title: 'Análise de Risco',
    question: 'Qual o retorno?',
    problem: 'Investir sem testar cenários de stress financeiro é caminhar no escuro em direção ao risco.',
    includes: [
      'Modelagem de Fluxo de Caixa e Projeção de Resultados',
      'Cálculo de Indicadores de Retorno (TIR, VPL, Payback)',
      'Testes de Sensibilidade e Simulação de Cenários',
      'Avaliação de Risco vs. Retorno para o Investidor'
    ],
    result: 'A resposta definitiva se o investimento vale a pena, fundamentada em dados e cenários reais.',
    profile: 'Investidores e conselhos de administração que exigem segurança na decisão.'
  },
  'risco': {
    title: 'Plano de Implementação',
    question: 'Como executar?',
    problem: 'A lacuna entre o planejamento e a execução é onde a maioria dos cronogramas e orçamentos falha.',
    includes: [
      'Desenho do Cronograma Completo de Execução',
      'Mapeamento de Dependências e Marcos Críticos',
      'Definição de Passos Claros para Implementação',
      'Plano de Gestão de Riscos de Implantação'
    ],
    result: 'Um roteiro executivo com prazos e metas claras para tirar o projeto do papel com segurança.',
    profile: 'Gestores e investidores prontos para iniciar a fase de execução.'
  },
  'implantacao': {
    title: 'Acesso ao Capital',
    question: 'Como financiar?',
    problem: 'Projetos mal estruturados financeiramente são rejeitados por bancos e investidores, travando o crescimento.',
    includes: [
      'Organização da Documentação Técnica e Financeira',
      'Estruturação da Lógica de Crédito para Bancos',
      'Preparação de Dossiê para Investidores',
      'Viabilização do Capital Necessário para o Projeto'
    ],
    result: 'Portas abertas no mercado de crédito e capital, com um projeto pronto para ser financiado.',
    profile: 'Empresas que buscam financiamento ou aporte de capital para expansão.'
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = slug ? serviceData[slug] : null;

  if (!data) return <div className="pt-40 text-center">Serviço não encontrado.</div>;

  return (
    <div className="pt-32">
      <Helmet>
        <title>{`${data.title} | Ver Industrial`}</title>
        <meta name="description" content={data.problem} />
      </Helmet>
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/servicos" className="inline-flex items-center text-[10px] uppercase tracking-widest text-brand-gold mb-12 hover:-translate-x-2 transition-transform">
            <ArrowLeft className="mr-2 w-3 h-3" /> Voltar para Serviços
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-brand-gold text-[11px] uppercase tracking-[0.4em] mb-6">{data.question}</h1>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-white mb-8 leading-tight">{data.title}</h2>
              <div className="bg-brand-navy/30 p-8 border-l-4 border-brand-gold mb-12 backdrop-blur-sm">
                <h4 className="text-brand-white/40 text-[10px] uppercase tracking-widest mb-4">O Problema que Resolve</h4>
                <p className="text-brand-white/80 font-light leading-relaxed italic">"{data.problem}"</p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-brand-white font-serif text-2xl mb-6">O que inclui:</h4>
                <ul className="space-y-4">
                  {data.includes.map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-brand-white/60 font-light">
                      <CheckCircle2 className="text-brand-gold w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-brand-white p-12 text-brand-black">
                <h4 className="text-brand-gold-muted text-[10px] uppercase tracking-widest mb-6 font-bold">Resultado Esperado</h4>
                <p className="text-xl font-serif leading-relaxed mb-8">{data.result}</p>
                <div className="h-px w-full bg-brand-gold/20 mb-8"></div>
                <h4 className="text-brand-gold-muted text-[10px] uppercase tracking-widest mb-4 font-bold">Perfil Ideal de Cliente</h4>
                <p className="text-brand-black/60 font-light text-sm">{data.profile}</p>
              </div>

              <div className="border border-brand-gold/20 p-12">
                <h4 className="text-brand-white font-serif text-2xl mb-6 italic">Solicitar este Módulo</h4>
                <p className="text-brand-white/50 text-sm font-light leading-relaxed mb-8">
                  Este serviço pode ser contratado de forma isolada ou como parte da estruturação completa. Entre em contato para um diagnóstico específico.
                </p>
                <Link 
                  to="/contato" 
                  className="inline-block w-full py-4 bg-brand-gold text-brand-black text-center text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-white transition-all duration-300"
                >
                  Iniciar Conversa Técnica
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
