import { Target, MessageSquare, BarChart, Shield, TrendingUp, Sparkles } from 'lucide-react';

export function Agents() {
  const agents = [
    {
      icon: Target,
      name: 'Posicionamento Estratégico',
      description: 'Define território de marca, propósito e diferenciação competitiva'
    },
    {
      icon: MessageSquare,
      name: 'Voz e Tom de Marca',
      description: 'Cria diretrizes de comunicação verbal consistentes e autênticas'
    },
    {
      icon: BarChart,
      name: 'Diagnóstico de Percepção',
      description: 'Analisa como sua marca é percebida pelo mercado e público'
    },
    {
      icon: Shield,
      name: 'Inteligência de Concorrência',
      description: 'Mapeia e analisa o posicionamento da concorrência em tempo real'
    },
    {
      icon: TrendingUp,
      name: 'Evolução de Marca',
      description: 'Identifica oportunidades de crescimento e adaptação estratégica'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gray-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-900 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Agentes Inteligentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Os Agentes que você vai criar
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Aprenda a criar agentes que pensam como estrategistas.
          </p>
        </div>

        {/* Primeira linha: 3 cards padrão */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.slice(0, 3).map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {agent.name}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {agent.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Segunda linha: 2 cards centralizados */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.slice(3).map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div
                key={`second-${i}`}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {agent.name}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {agent.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
