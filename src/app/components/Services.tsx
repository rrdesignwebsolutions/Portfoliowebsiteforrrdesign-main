import { motion } from "motion/react";
import { Code2, Rocket, Share2, TrendingUp, Bot } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento de Sites",
      description: "Sites institucionais, e-commerce e aplicações web desenvolvidas com as melhores tecnologias do mercado.",
      benefits: ["Performance otimizada", "Design responsivo", "SEO integrado"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Criação de Landing Pages",
      description: "Landing pages de alta conversão focadas em captar leads e gerar vendas para o seu negócio.",
      benefits: ["Copywriting estratégico", "Design persuasivo", "A/B testing"],
      color: "from-cyan-500 to-green-500",
    },
    {
      icon: Bot,
      title: "Automação de Atendimento",
      description: "Sistemas automatizados de atendimento que qualificam leads e respondem instantaneamente via WhatsApp.",
      benefits: ["Assistentes virtuais", "Respostas automáticas", "Qualificação de leads"],
      color: "from-violet-500 to-cyan-500",
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Gestão completa das suas redes sociais com conteúdo estratégico e engajamento autêntico.",
      benefits: ["Calendário editorial", "Design de posts", "Análise de métricas"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Gestão de Tráfego",
      description: "Campanhas de anúncios pagos otimizadas para maximizar seu retorno sobre investimento.",
      benefits: ["Google Ads", "Facebook/Instagram Ads", "Otimização contínua"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-medium">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Soluções completas para{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              seu sucesso digital
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl rounded-3xl"
                   style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

              <div className="relative bg-slate-950/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-cyan-200 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-cyan-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
