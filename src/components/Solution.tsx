import { Check, Lightbulb, Sparkles, Brain, Zap } from 'lucide-react';

export function Solution() {
  const benefits = [
    {
      icon: Brain,
      title: 'Raciocínio Estratégico Automatizado',
      description: 'Crie sistemas inteligentes que pensam e raciocinam como estrategistas de marca experientes'
    },
    {
      icon: Zap,
      title: 'Múltiplas Marcas Simultaneamente',
      description: 'Trabalhe com várias marcas ao mesmo tempo mantendo consistência e qualidade'
    },
    {
      icon: Sparkles,
      title: 'Soluções Premium',
      description: 'Venda branding inteligente como serviço de alto valor agregado'
    }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gray-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-gray-100 text-sm mb-8">
            <Lightbulb className="w-4 h-4" />
            <span>A solução que você procura</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            O Branding Inteligente com IA é o método que ensina você a criar e vender
            <span className="text-white"> agentes de marca inteligentes</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sistemas que pensam, aprendem e se adaptam como estrategistas humanos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
