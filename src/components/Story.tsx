import { Sparkles, TrendingUp, Users } from 'lucide-react';

export function Story() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Por que criei este método</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A história por trás do
              <span className="block text-emerald-400">Branding Inteligente</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Depois de anos trabalhando com branding, vi muitos profissionais talentosos
                ficarem para trás porque não conseguiram se adaptar às novas ferramentas.
              </p>
              <p>
                A IA não vai substituir estrategistas de marca. Mas estrategistas que usam IA
                vão substituir os que não usam.
              </p>
              <p className="text-white font-semibold text-xl">
                Este método nasceu para equipar você com as ferramentas e o conhecimento
                necessários para liderar essa transformação.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Método Testado e Validado</h3>
              <p className="text-slate-400 leading-relaxed">
                Desenvolvido após anos de experiência real no mercado de branding,
                unindo estratégia tradicional com inteligência artificial.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Resultados Comprovados</h3>
              <p className="text-slate-400 leading-relaxed">
                Profissionais que dominam IA entregam projetos 3x mais rápido
                e cobram valores premium por suas soluções inteligentes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comunidade Ativa</h3>
              <p className="text-slate-400 leading-relaxed">
                Junte-se a designers e estrategistas que já estão implementando
                agentes inteligentes em seus projetos de marca.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent rounded-3xl border border-emerald-500/20">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 text-6xl leading-none text-emerald-400 font-serif">"</div>
            <div>
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-4">
                Eu criei esse método porque percebi que o mercado precisava de designers
                capazes de pensar como estrategistas de marca — e usar a IA para
                <span className="text-emerald-400 font-bold"> amplificar essa visão</span>.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
