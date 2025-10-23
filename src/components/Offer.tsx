import { ArrowRight, Check, Shield, Sparkles } from 'lucide-react';

export function Offer() {
  const guarantees = [
    '7 dias de garantia incondicional',
    'Suporte via e-mail e grupo privado',
    'Acesso vitalício ao conteúdo',
    'Atualizações gratuitas'
  ];

  return (
    <section id="offer-section" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Oferta Especial</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Domine o Branding Inteligente e posicione-se na <span className="text-emerald-400">próxima geração de criativos</span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="text-slate-400 text-lg mb-2 line-through">
                  De R$ 497,00
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-6xl font-bold">R$ 157</span>
                  <span className="text-slate-400 text-xl">à vista</span>
                </div>
                <div className="text-emerald-400 font-semibold mt-2 text-lg">
                  ou 12x de R$ 18,26
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {guarantees.map((guarantee, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href="https://pay.cakto.com.br/ynb55cf_616474"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group bg-emerald-600 text-white text-xl font-bold py-6 px-8 rounded-2xl hover:bg-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 mb-6"
              >
                Quero garantir meu acesso agora
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3 text-slate-400 text-sm justify-center">
                <Shield className="w-5 h-5" />
                <span>Pagamento 100% seguro</span>
              </div>

              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-2">
                      Garantia de 7 dias
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Se você não gostar do conteúdo ou achar que não é para você,
                      devolvemos 100% do seu investimento. Sem perguntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Dúvidas? Entre em contato: <a href="mailto:hugosoav@gmail.com" className="text-emerald-400 font-semibold hover:underline">hugosoav@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
