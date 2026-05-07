import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-green-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-cyan-900/50 to-green-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pronto para ter um site que{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
                  realmente gera resultados?
                </span>
              </h2>

              <p className="text-xl text-cyan-200 mb-10 max-w-2xl mx-auto">
                Vamos conversar sobre seu projeto e criar uma solução digital que vai transformar
                visitantes em clientes e impulsionar seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5535991393009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-green-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-8 text-cyan-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Disponível agora</span>
                </div>
                <span className="text-sm">Resposta em até 1 hora</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
