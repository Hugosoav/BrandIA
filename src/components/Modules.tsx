import { BookOpen, Brain, Target, MessageSquare, BarChart, TrendingUp, Zap, Shield, Sparkles, Gift } from 'lucide-react';

export function Modules() {
  const modules = [
    { icon: Sparkles, title: 'O Futuro do Branding Inteligente', number: 1 },
    { icon: Brain, title: 'Fundamentos da IA aplicada à marca', number: 2 },
    { icon: Target, title: 'Agente de Posicionamento Estratégico', number: 3 },
    { icon: MessageSquare, title: 'Agente de Voz e Tom de Marca', number: 4 },
    { icon: BarChart, title: 'Agente de Diagnóstico de Percepção', number: 5 },
    { icon: Shield, title: 'Agente de Inteligência de Concorrência', number: 6 },
    { icon: TrendingUp, title: 'Agente de Evolução de Marca', number: 7 },
    { icon: Zap, title: 'Integração e Automação de Agentes', number: 8 },
    { icon: BookOpen, title: 'Como Vender Soluções Inteligentes', number: 9 },
    { icon: Gift, title: 'Bônus Avançado', number: 10 }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8">
            <BookOpen className="w-4 h-4" />
            <span>Conteúdo completo</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que você vai aprender
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            10 módulos, do pensamento estratégico à criação dos seus próprios agentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, i) => {
            const Icon = module.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-emerald-400 mb-2">
                      Módulo {module.number}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {module.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
