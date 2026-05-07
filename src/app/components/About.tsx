import { motion } from "motion/react";
import { Code, Rocket, TrendingUp, Bot } from "lucide-react";

export function About() {
  const expertise = [
    { icon: Code, title: "Desenvolvimento Web", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, title: "Landing Pages", color: "from-cyan-500 to-green-500" },
    { icon: Bot, title: "Automação de Atendimento", color: "from-violet-500 to-cyan-500" },
    { icon: TrendingUp, title: "Estratégia de Conversão", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-medium">Sobre</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Transformando ideias em{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              resultados digitais
            </span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Somos especialistas em criar experiências digitais que não apenas impressionam visualmente,
            mas que geram conversões reais através de automação inteligente e estratégias comprovadas.
            Não criamos apenas sites — criamos máquinas de vendas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                   style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} transition-all duration-300 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
