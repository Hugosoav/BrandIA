import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>O futuro do branding já começou</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme sua forma de <span className="text-emerald-400">fazer branding</span> com Inteligência Artificial
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Domine o método que ensina você a criar agentes de marca inteligentes —
            sistemas que pensam, aprendem e se adaptam como estrategistas humanos.
          </p>

          <button
            onClick={() => {
              document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Quero aprender Branding Inteligente
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
