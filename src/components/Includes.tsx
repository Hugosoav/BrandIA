import { FileText, Code, Sparkles, RefreshCw, Gift, Check } from 'lucide-react';

export function Includes() {
  const items = [
    {
      icon: FileText,
      title: '10 módulos em PDF interativo',
      description: 'Conteúdo completo e profundo sobre cada aspecto do branding inteligente'
    },
    {
      icon: Code,
      title: 'Acesso aos system prompts prontos',
      description: 'Templates otimizados e testados para criar seus agentes imediatamente'
    },
    {
      icon: Sparkles,
      title: 'Agentes refinados e testados',
      description: 'Sistemas completos que você pode implementar e personalizar'
    },
    {
      icon: RefreshCw,
      title: 'Atualizações futuras gratuitas',
      description: 'Receba novos módulos e melhorias sem custo adicional'
    },
    {
      icon: Gift,
      title: 'Bônus de templates e exercícios',
      description: 'Materiais práticos para acelerar sua implementação'
    }
  ];

  // Se houver quantidade ímpar, o último card será centralizado
  const hasOdd = items.length % 2 === 1;
  const topItems = hasOdd ? items.slice(0, items.length - 1) : items;
  const lastItem = hasOdd ? items[items.length - 1] : null;

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gray-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-gray-100 text-sm mb-8">
            <Gift className="w-4 h-4" />
            <span>Tudo incluído</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que você recebe
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo que você precisa para dominar o branding inteligente.
          </p>
        </div>

        {/* Grid principal em 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-8 right-8">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Último card centralizado quando a quantidade é ímpar */}
        {hasOdd && lastItem && (
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const Icon = lastItem.icon;
                        return <Icon className="w-7 h-7 text-gray-900" />;
                      })()}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {lastItem.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {lastItem.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-8 right-8">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
