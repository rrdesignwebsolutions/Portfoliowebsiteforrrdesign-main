import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Renata da Genesis Mobilidade",
      role: "Vendas de Motos e Mobilidade",
      content: "Triplicamos as vendas em apenas 3 semanas! A landing page com automação de atendimento foi um divisor de águas. Vendemos 12 motos quando a meta era 4. Resultado surpreendente! E o Ruan é sensacional, super atencioso e profissional. Recomendo demais! ",
      rating: 5,
    },
    {
      name: "Fernanda",
      role: "Proprietária - Sonho de Patas",
      content: "A RR Design transformou completamente nossa presença digital. O site novo gerou 300% mais leads em apenas 2 meses. Saímos de 0 pra mais de 200 vendas. Profissionalismo exemplar!",
      rating: 5,
    },
    {
      name: "Eduardo Ribeiro",
      role: "Fundadora - Duaal Ind. e Com. de Bebidas LTDA",
      content: "O Ruan fez um trabalho incrível, criou nossa identidade visual, desenhou todas as nossas embalagens e o site. Estará conosco sempre. Se vamos lançar nossas bebidas, grande parte é graças ao trabalho do Ruan. Ele é um profissional super dedicado, atencioso e muito criativo. Recomendo demais!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-medium">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                  display: index === currentIndex ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 md:p-12">
                  <Quote className="w-12 h-12 text-cyan-400 mb-6" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-xl text-cyan-100 mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-cyan-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan-500 w-8"
                    : "bg-cyan-500/30 hover:bg-cyan-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
