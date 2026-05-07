import { motion } from "motion/react";
import { ExternalLink, CheckCircle2, TrendingUp, Zap, MessageCircle, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fotoGenesis from "../../imports/foto_genesis.jpeg";

export function FeaturedCase() {
  const features = [
    "Landing Page estratégica",
    "Automação de atendimento",
    "Assistente virtual 'Gê'",
    "Copywriting focado em vendas",
    "Design responsivo",
    "Integração WhatsApp",
  ];

  const results = [
    { icon: TrendingUp, label: "Meta", value: "4 motos em 1 mês" },
    { icon: Zap, label: "Resultado", value: "16 motos vendidas" },
    { icon: CheckCircle2, label: "Performance", value: "+300% acima da meta" },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
            ⭐ Case de Sucesso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como ajudamos a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Genesis Mobilidade
            </span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            A triplicar as vendas em 1 mês com social media, uma landing page e atendimento automatizado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">🚨 Desafio</h3>
              <p className="text-cyan-200 mb-6">
                A Genesis Mobilidade precisava gerar mais leads qualificados e melhorar o atendimento inicial.
                O principal gargalo era o tempo de resposta, que impactava diretamente na conversão.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">🧠 Estratégia</h3>
              <p className="text-cyan-200 mb-6">
                Criamos um ecossistema de conversão completo combinando landing page estratégica,
                automação de atendimento e assistente virtual "Gê" para qualificação de leads.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20">
              <ImageWithFallback
                src={fotoGenesis}
                alt="Genesis Mobilidade Landing Page"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                📊 Resultados
              </h3>

              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <result.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-green-300 text-sm">{result.label}</p>
                      <p className="text-white font-semibold">{result.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">💡 O que foi desenvolvido:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Estratégia de conversão",
                "UI/UX Design",
                "Desenvolvimento de Landing Page",
                "Copywriting focado em vendas",
                "Automação de atendimento",
                "Assistente virtual 'Gê'",
                "Integração com WhatsApp",
                "Otimização para mobile",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-green-400" />
                  <span className="text-cyan-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://genesismobilidade.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-green-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Ver site ao vivo
              </a>
              <a
                href="https://www.instagram.com/genesis.mobilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-rose-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/30 to-green-900/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer um sistema completo que gere e converta leads automaticamente?
            </h3>
            <p className="text-cyan-200 mb-6">
              Desenvolvimento de sites + automação de atendimento + estratégia de conversão
            </p>
            <a
              href="https://wa.me/5535991393009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Fale comigo no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
