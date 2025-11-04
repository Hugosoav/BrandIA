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
    <section className="py-24 px-6 bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gray-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-900 text-sm mb-8">
            <Lightbulb className="w-4 h-4" />
            <span>A solução que você procura</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            O Branding Inteligente com IA é o método que ensina você a criar e vender
            <span className="text-gray-900"> agentes de marca inteligentes</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Sistemas que pensam, aprendem e se adaptam como estrategistas humanos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
