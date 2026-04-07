import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      title: 'Estruturação de Planta de Fertilizantes',
      client: 'Grupo AgroIndustrial',
      challenge: 'O desafio consistia em viabilizar um investimento de R$ 120M para a implementação de uma nova unidade produtiva, garantindo a sustentabilidade financeira do projeto.',
      approach: 'Desenvolvemos uma modelagem integral de CAPEX e OPEX, complementada por análises de estresse financeiro e benchmarking técnico com padrões internacionais de eficiência.',
      result: 'Alcançamos uma otimização de 15% no CAPEX inicialmente previsto e asseguramos a aprovação do financiamento estratégico junto ao BNDES.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Modernização de Linha de Montagem',
      client: 'Indústria Metal-Mecânica',
      challenge: 'A meta era elevar a produtividade em 30%, otimizando a infraestrutura existente sem a necessidade de expansão física da planta.',
      approach: 'Realizamos a reestruturação técnica dos fluxos operacionais e implementamos soluções de automação estratégica focadas em gargalos específicos.',
      result: 'Obtivemos um incremento de 35% na eficiência operacional e uma redução expressiva de 12% no custo unitário de produção.',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="pt-32">
      <Helmet>
        <title>Casos de Sucesso | Ver Industrial</title>
        <meta name="description" content="Veja como a Ver Industrial ajudou empresas a estruturarem seus investimentos industriais com segurança e eficiência." />
      </Helmet>
      <section className="py-20 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Cases" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="micro-label mb-8">Casos de Sucesso</h1>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-white mb-16 leading-tight font-bold">
            Resultados <span className="italic text-brand-gold">Estruturados</span>.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cases.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-navy/30 border border-brand-gold/10 overflow-hidden group rounded-2xl backdrop-blur-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10">
                  <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">{item.client}</span>
                  <h3 className="text-2xl font-serif text-brand-white mb-6 font-bold">{item.title}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-brand-white/40 text-[10px] uppercase tracking-widest mb-2 font-bold">Desafio</h4>
                      <p className="text-brand-white/70 text-sm leading-relaxed font-medium">{item.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-brand-white/40 text-[10px] uppercase tracking-widest mb-2 font-bold">Abordagem</h4>
                      <p className="text-brand-white/70 text-sm leading-relaxed font-medium">{item.approach}</p>
                    </div>
                    <div className="bg-brand-navy/50 p-6 border-l-2 border-brand-gold">
                      <h4 className="text-brand-gold text-[10px] uppercase tracking-widest mb-2 font-bold">Resultado Estratégico</h4>
                      <p className="text-brand-white font-serif text-lg leading-relaxed font-bold">{item.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
