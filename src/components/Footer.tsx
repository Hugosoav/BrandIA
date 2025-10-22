import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold text-lg">Branding Inteligente</span>
          </div>

          <div className="text-slate-400 text-sm text-center md:text-right">
            <p>© 2025 Branding Inteligente. Todos os direitos reservados.</p>
            <p className="mt-1">Transformando designers em estrategistas do futuro.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
