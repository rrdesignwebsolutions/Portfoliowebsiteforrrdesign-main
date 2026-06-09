import { Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo showText className="mb-4" />
            <p className="text-cyan-200 text-sm">
              Sua marca aparece. Seu negócio cresce.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-cyan-200 text-sm">
              <li>Desenvolvimento Web</li>
              <li>Landing Pages</li>
              <li>Automação de Atendimento</li>
              <li>Social Media</li>
              <li>Gestão de Tráfego</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/ruanramosdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-green-500/20 hover:from-cyan-500/30 hover:to-green-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-cyan-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ruan-oliveira-b5731634a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-green-500/20 hover:from-cyan-500/30 hover:to-green-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-cyan-300" />
              </a>
              <a
                href="mailto:contato@ruanramosdigital.com.br"
                className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-green-500/20 hover:from-cyan-500/30 hover:to-green-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-cyan-300" />
              </a>
            </div>
            <p className="text-cyan-200 text-sm">contato@ruanramosdigital.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/20 text-center text-cyan-300 text-sm">
          <p>© 2026 Ruan Ramos Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
