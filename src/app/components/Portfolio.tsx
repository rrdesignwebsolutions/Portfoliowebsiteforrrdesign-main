import { motion } from "motion/react";
import { ExternalLink, Eye, Instagram } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import avFlowCrmDashboard from "../../imports/av_flow_crm_dashboard.png";
import fotoGenesis from "../../imports/foto_genesis.jpeg";
import fotoDuaal from "../../imports/foto_duaal.png";
import fotoEliana from "../../imports/foto_eliana.png";
import fotoGoo from "../../imports/foto_goo_eletricos.png";
import fotoRick from "../../imports/foto_rick_automoveis.png";

interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  result: string;
  link: string;
  instagramLink?: string;
  image: string;
  featured?: boolean;
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: "AV Flow CRM",
      type: "CRM + Atendimento automatizado por IA",
      description: "CRM próprio para centralizar a gestão de leads, automatizar o atendimento com IA e acompanhar cada oportunidade em um só lugar.",
      result: "Plataforma própria de CRM, atendimento automatizado por IA e gestão completa dos leads ao longo da jornada comercial.",
      link: "https://avflowcrm.com.br/",
      image: avFlowCrmDashboard,
      featured: true,
    },
    {
      id: 2,
      name: "Rick Automóveis",
      type: "Social Media + Videomaker + Gestão de tráfego",
      description: "Gestão de Social Media, produção de vídeos e tráfego pago para fortalecer a presença digital da Rick Automóveis e divulgar seus veículos.",
      result: "De cerca de 2 para 10 carros vendidos já no primeiro mês de trabalho.",
      link: "https://rickautomoveis.com.br/",
      instagramLink: "https://www.instagram.com/rick.automoveis/",
      image: fotoRick,
    },
    {
      id: 3,
      name: "GOO Elétricos",
      type: "Social Media + Videomaker + Gestão de tráfego",
      description: "Gestão de Social Media, produção de vídeos e tráfego pago para divulgar as scooters elétricas da GOO em Itajubá e Pouso Alegre.",
      result: "Em três meses de trabalho, a GOO passou a vender entre 20 e 25 motos por mês, em média, e expandiu a loja para Pouso Alegre.",
      link: "https://gooeletricositajuba.com.br/",
      instagramLink: "https://www.instagram.com/gooeletricos_itajuba/",
      image: fotoGoo,
    },
    {
      id: 4,
      name: "Gênesis Mobilidade",
      type: "Social Media + Videomaker + Copywriting + Tráfego pago",
      description: "Estratégia integrada de conteúdo e marketing digital para impulsionar as vendas de motos e apoiar a expansão da Gênesis.",
      result: "De 5 para 38 motos vendidas por mês em seis meses, crescimento de 660%, com expansão para uma nova unidade em outra cidade.",
      link: "https://genesismobilidade.shop/",
      instagramLink: "https://www.instagram.com/genesis.mobilidade/",
      image: fotoGenesis,
    },
    {
      id: 5,
      name: "Dra. Eliana Cintra",
      type: "Identidade Visual + Landing Page",
      description: "Identidade visual e landing page para médica pediatra, com comunicação acolhedora e foco em captação de pacientes.",
      result: "Projeto pronto e entregue, aguardando lançamento para medir resultados",
      link: "https://www.draelianacintra.com.br/",
      image: fotoEliana,
    },
    {
      id: 6,
      name: "Startup de Bebidas",
      type: "Identidade Visual + Design de Embalagens",
      description: "Desenvolvimento completo de marca para lançamento.",
      result: "Marca estruturada e embalagens prontas para produção.",
      link: "https://www.duaal.com.br/",
      image: fotoDuaal,
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
            Projetos reais{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              que geram resultados
            </span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
            Confira projetos reais de clientes e conheça também meu produto próprio
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
              <div className={`relative overflow-hidden rounded-2xl bg-slate-900 border transition-all duration-300 ${
                project.featured
                  ? "border-green-500/50 shadow-lg shadow-green-500/10 hover:border-green-400"
                  : "border-cyan-500/20 hover:border-cyan-500/40"
              }`}>
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${
                      project.featured ? "object-contain bg-slate-950 p-6" : "object-cover"
                    }`}
                  />
                  {!project.featured && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  )}

                  {project.featured && (
                    <span className="absolute top-4 left-4 z-10 rounded-full border border-green-300/30 bg-slate-950/85 px-3 py-1 text-xs font-medium text-green-200">
                      Projeto próprio
                    </span>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-cyan-600 p-4 rounded-full">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-xs rounded-full mb-3 ${
                    project.featured ? "bg-green-500/20 text-green-300" : "bg-cyan-500/20 text-cyan-300"
                  }`}>
                    {project.type}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-cyan-200 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400">
                      {project.featured ? "Produto próprio" : "Projeto real desenvolvido"}
                    </span>
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
            className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain border border-cyan-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.name}
                className={`w-full h-full ${
                  selectedProject.featured ? "object-contain bg-slate-950 p-8" : "object-cover"
                }`}
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

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-green-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Acessar projeto
                  <ExternalLink className="w-4 h-4" />
                </a>
                {selectedProject.instagramLink && (
                  <a
                    href={selectedProject.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Ver Instagram
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
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
