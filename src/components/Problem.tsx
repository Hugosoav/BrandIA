import { AlertCircle } from 'lucide-react';

export function Problem() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8">
          <AlertCircle className="w-4 h-4" />
          <span>A realidade do mercado</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          O branding tradicional está ficando para trás.
        </h2>

        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
          Designers e estrategistas estão sendo substituídos — não por IA, mas por <span className="text-emerald-400 font-semibold">quem sabe usá-la com propósito.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { value: '67%', label: 'das empresas já usam IA em marketing' },
            { value: '3x', label: 'mais rápido para criar estratégias' },
            { value: '85%', label: 'dos profissionais precisam se adaptar' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-emerald-400">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
