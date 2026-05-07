import { motion } from "motion/react";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fotoGenesis from "../../imports/foto_genesis.jpeg";
import fotoSonhoDePatas from "../../imports/foto_sonhodepatas.png.png";
import fotoDuaal from "../../imports/foto_duaal.png";
import fotoEliana from "../../imports/foto_eliana.png";
import fotoClaudia from "../../imports/foto_claudia.png";
import fotoPetGuardian from "../../imports/foto_petguardian.png";


interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  result: string;
  link: string;
  image: string;
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: "Genesis Mobilidade",
      type: "Landing Page + Automação de Atendimento + Social Media",
      description: "Vendas triplicadas em 1 mês",
      result: "16 motos vendidas em 1 mês - 300% acima da meta de 4 motos",
      link: "https://genesismobilidade.shop/",
      image: fotoGenesis,
    },
    
    
    {
      id: 2,
      name: "Médica Pediatra",
      type: "Identidade Visual + Landing Page",
      description: "Identidade visual e landing para pediatra com foco em captação de pacientes",
      result: "Projeto pronto e entregue, aguardando lançamento para medir resultados",
      link: "https://draelianacintra.com.br",
      image: fotoEliana,
    },

    {
      id: 3,
      name: "Startup de Bebidas",
      type: "Identidade Visual + Design de Embalagens",
      description: "Desenvolvimento completo de marca para lançamento.",
      result: "Marca estruturada e embalagens prontas para produção.",
      link: "https://www.duaal.com.br/",
      image: fotoDuaal,
    },
    
    {
      id: 4,
      name: "E-commerce",
      type: "Loja Virtual de Alta Conversão",
      description: "E-commerce otimizado para vendas. Foco em experiência do usuário",
      result: "Taxa de conversão de 4,2% - acima da média do mercado",
      link: "https://www.sonhodepatas.com.br/",
      image: fotoSonhoDePatas,
    },
    
    {
      id: 5,
      name: "Cláudia Vilela",
      type: "Identidade Visual",
      description: "Desenvolvimento de identidade visual completa",
      result: "Marca estruturada e pronta para aplicação em diversos materiais",
      link: "https://claudiavilela.com.br",
      image: fotoClaudia,
    },
    {
      id: 6,
      name: "Pet Guardian",
      type: "Landing Page + Estratégia de Marketing Digital",
      description: "Foco em captação de leads",
      result: "Projeto pronto e entregue",
      link: "https://ruanprogramadorweb.github.io/PetGuardian-Site/",
      image: fotoPetGuardian,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-wider text-sm font-medium">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Projetos{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              que geram resultados
            </span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
            Confira alguns dos projetos reais desenvolvidos para nossos clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-cyan-600 p-4 rounded-full">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full mb-3">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-cyan-200 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400">Projeto real desenvolvido</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900 rounded-3xl max-w-2xl w-full border border-cyan-500/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full mb-4">
                {selectedProject.type}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.name}</h3>
              <p className="text-cyan-200 mb-6">{selectedProject.description}</p>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
                <span className="text-cyan-400 text-sm font-medium">Resultado:</span>
                <p className="text-white mt-1">{selectedProject.result}</p>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-green-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Ver site ao vivo
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
