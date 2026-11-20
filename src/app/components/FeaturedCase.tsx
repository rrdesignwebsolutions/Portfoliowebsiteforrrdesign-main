import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Zap, MapPin, MessageCircle, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fotoGenesis from "../../imports/foto_genesis.jpeg";

export function FeaturedCase() {
  const features = [
    "Gestão completa de Social Media",
    "Produção de vídeos (Videomaker)",
    "Copywriting focado em vendas",
    "Gestão de tráfego orientada a resultados",
    "Planejamento de conteúdo estratégico",
    "Otimização de campanhas",
  ];

  const results = [
    { icon: TrendingUp, label: "Início", value: "5 motos vendidas por mês" },
    { icon: Zap, label: "Após 6 meses", value: "38 motos vendidas por mês" },
    { icon: CheckCircle2, label: "Performance", value: "+660% no volume mensal de vendas" },
    { icon: MapPin, label: "Expansão", value: "Nova unidade em outra cidade" },
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
            Como ajudei a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Genesis Mobilidade
            </span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Em seis meses, as vendas mensais passaram de 5 para 38 motos, e a Gênesis expandiu para uma nova unidade em outra cidade.
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
                A Gênesis estava começando e ainda não tinha uma operação estruturada de Social Media nem produção de vídeos.
                A gestão de tráfego existente não gerava os resultados esperados, dificultando atrair compradores e impulsionar as vendas.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">🧠 Estratégia</h3>
              <p className="text-cyan-200 mb-6">
                Estruturei uma estratégia integrada com gestão completa de Social Media, produção de vídeos (Videomaker),
                copywriting focado em vendas e gestão de tráfego orientada a resultados para atrair e converter compradores.
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
                alt="Fachada da loja Gênesis Mobilidade"
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
              <p className="mt-6 border-t border-green-500/20 pt-4 text-sm text-cyan-200">
                A parceria foi encerrada por uma decisão comercial relacionada à minha atuação com outras empresas do mesmo segmento.
                Atualmente, não conduzo o marketing da Gênesis; os resultados apresentados correspondem ao período em que trabalhei com a empresa.
              </p>
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
                "Gestão completa de Social Media",
                "Produção de vídeos (Videomaker)",
                "Copywriting focado em vendas",
                "Identidade Visual",
                "Gestão de tráfego orientada a resultados",
                "Planejamento de conteúdo estratégico",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-green-400" />
                  <span className="text-cyan-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/genesis.mobilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-rose-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
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
              Quer alavancar seu negócio com uma estratégia digital completa?
            </h3>
            <p className="text-cyan-200 mb-6">
              Social Media, Videomaker, copywriting e gestão de tráfego para atrair clientes e impulsionar suas vendas.
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
