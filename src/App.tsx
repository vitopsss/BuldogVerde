/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Stethoscope, 
  Scissors, 
  ShoppingBag, 
  Heart, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  ShieldCheck,
  Award,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Data ---

const UNIDADES = [
  {
    id: 'clinica-24h',
    name: 'Clínica Veterinária 24h',
    address: 'Av. Coronel Teixeira, 6514 - Lírio Do Vale',
    mapLink: 'https://maps.google.com/?q=Av.+Coronel+Teixeira,+6514+-+Lírio+Do+Vale,+Manaus+-+AM,+69030-480,+Brasil',
    whatsapp: 'https://wa.me/5592982853396',
    type: 'Emergência & Clínica',
    highlight: true
  },
  {
    id: 'park-mall',
    name: 'Unidade Park Ephigênio Mall',
    address: 'Av. Efigênio Salles, 2045 - Aleixo',
    mapLink: 'https://maps.google.com/?q=Park+Mall+Ephigênio+-+Av.+Efigênio+Salles,+2045+-+Aleixo,+Manaus+-+AM,+69060-020,+Brasil',
    whatsapp: 'https://wa.me/5592984242894',
    type: 'Consultas & Estética'
  },
  {
    id: 'express',
    name: 'Buldogue Verde Express',
    address: 'Farmácia Pet Especializada',
    mapLink: '#',
    whatsapp: 'https://wa.me/5592981963761?text=Unidade+Express',
    type: 'Farmácia & Conveniência'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Unidades', href: '#unidades' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 bg-white overflow-hidden flex items-center justify-center shrink-0 shadow-md">
                <img 
                  src="https://i.postimg.cc/4NS1nbgP/buldogueverde.jpg" 
                  alt="Logo Buldogue Verde" 
                  className="w-full h-full object-cover scale-[1.7]"
                />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-green-800' : 'text-white'}`}>
                Buldogue<span className="text-green-500">Verde</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-green-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={UNIDADES[0].whatsapp} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200"
            >
              Emergência 24h
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-green-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href={UNIDADES[0].whatsapp} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 text-white px-6 py-3 rounded-xl font-bold"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop" 
          alt="Pet and Owner" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-md border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
            <Clock size={14} /> Atendimento 24 Horas em Manaus
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Cuidamos do <span className="text-green-500 italic">amor</span> da sua vida.
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Estrutura premium, equipe especializada e cuidado humanizado para quem trata o pet como membro da família.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#unidades"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-green-900/20"
            >
              Ver Unidades <ChevronRight size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={UNIDADES[0].whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <MessageCircle size={20} /> Emergência 24h
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-green-900 object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-white/80 text-sm">
              <div className="flex text-yellow-400 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p><strong>+10.000</strong> pets felizes em Manaus</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Unidades = () => {
  return (
    <section id="unidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold text-sm uppercase tracking-widest mb-4">Nossas Unidades</h2>
          <p className="text-4xl font-extrabold text-gray-900 mb-6">Estamos onde você e seu pet precisam.</p>
          <p className="text-gray-600 text-lg">Três endereços estratégicos em Manaus para garantir agilidade e conveniência.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UNIDADES.map((unidade) => (
            <motion.div 
              key={unidade.id}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[32px] border transition-all ${unidade.highlight ? 'bg-green-50 border-green-200 shadow-xl shadow-green-100' : 'bg-white border-gray-100 shadow-lg shadow-gray-100'}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${unidade.highlight ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'}`}>
                <MapPin size={24} />
              </div>
              <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">{unidade.type}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{unidade.name}</h3>
              <a 
                href={unidade.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 mb-8 flex items-start gap-2 transition-colors cursor-pointer"
              >
                <MapPin size={18} className="mt-1 shrink-0" /> {unidade.address}
            </a>
              <a 
                href={unidade.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${unidade.highlight ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-900 text-white hover:bg-black'}`}
              >
                <MessageCircle size={20} /> Falar com Unidade
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Clínica 24h',
      desc: 'Pronto-atendimento para qualquer emergência, a qualquer hora do dia ou da noite.',
      icon: <Clock size={32} />,
      img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Consultas Especializadas',
      desc: 'Cardiologia, ortopedia, dermatologia e muito mais para o cuidado preventivo.',
      icon: <Stethoscope size={32} />,
      img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Banho e Tosa Premium',
      desc: 'Estética pet com produtos de alta linha e profissionais que amam o que fazem.',
      icon: <Scissors size={32} />,
      img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Pet Shop Completo',
      desc: 'As melhores rações, brinquedos e acessórios em um só lugar para sua conveniência.',
      icon: <ShoppingBag size={32} />,
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold text-sm uppercase tracking-widest mb-4">Nossos Serviços</h2>
          <p className="text-4xl font-extrabold text-gray-900 mb-6">Tudo o que seu pet precisa em um só lugar.</p>
          <p className="text-gray-600 text-lg">Oferecemos uma experiência completa de cuidado, desde a saúde até o bem-estar e estética.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.color}`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a href="#contato" className="text-green-600 font-bold text-sm flex items-center gap-2 group">
                  Saiba mais <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmotionalSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Humanized Care" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <Heart fill="currentColor" size={20} />
                </div>
                <span className="font-bold text-gray-900">Cuidado Real</span>
              </div>
              <p className="text-sm text-gray-500 italic">"Eles não são apenas pets, são o amor de alguém."</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-green-600 font-bold text-sm uppercase tracking-widest mb-4">Nosso Propósito</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Mais que uma clínica, um porto seguro para sua família.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sabemos que quando você entra pela nossa porta, está nos entregando o que tem de mais precioso. Por isso, nosso atendimento vai além da medicina veterinária: é sobre empatia, transparência e carinho.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Equipe que trata seu pet pelo nome',
                'Ambiente projetado para reduzir o estresse',
                'Transparência total em todos os procedimentos',
                'Acompanhamento pós-consulta humanizado'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-green-600" size={20} /> {item}
                </li>
              ))}
            </ul>

            <a 
              href="#unidades" 
              className="inline-flex items-center gap-2 text-green-600 font-bold border-b-2 border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-all"
            >
              Conheça nossas unidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Mariana Silva',
      pet: 'Bento (Golden Retriever)',
      text: 'O atendimento 24h salvou a vida do Bento. Chegamos de madrugada e fomos acolhidos com uma agilidade e carinho impressionantes.',
      img: 'https://i.pravatar.cc/100?img=32'
    },
    {
      name: 'Ricardo Gomes',
      pet: 'Luna (Gata Persa)',
      text: 'A melhor clínica de Manaus. A estrutura é impecável e os veterinários são extremamente competentes e atenciosos.',
      img: 'https://i.pravatar.cc/100?img=12'
    },
    {
      name: 'Ana Paula',
      pet: 'Thor (Bulldog Francês)',
      text: 'O banho e tosa é maravilhoso. O Thor volta cheiroso e super tranquilo, dá pra ver que ele é bem tratado lá dentro.',
      img: 'https://i.pravatar.cc/100?img=45'
    }
  ];

  return (
    <section className="py-24 bg-green-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-400 font-bold text-sm uppercase tracking-widest mb-4">Depoimentos</h2>
          <p className="text-4xl font-extrabold mb-6">O que os tutores dizem sobre nós.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px]">
              <div className="flex text-yellow-400 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-300 mb-8 italic">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold">{r.name}</p>
                  <p className="text-xs text-green-400 uppercase tracking-wider">{r.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-600 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-green-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Seu pet precisa de cuidado agora?
            </h2>
            <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto">
              Estamos prontos para atender você 24h por dia em nossa unidade principal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={UNIDADES[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageCircle size={24} /> Falar no WhatsApp
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+5592982853396"
                className="bg-green-700 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 border border-green-500"
              >
                <Phone size={24} /> Ligar Emergência
              </motion.a>
            </div>
            
            <a 
              href={UNIDADES[0].mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 text-green-100 font-medium flex items-center justify-center gap-2 hover:text-white hover:underline transition-all cursor-pointer"
            >
              <MapPin size={18} /> {UNIDADES[0].address}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-14 h-14 rounded-full border border-gray-200 bg-white overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
                <img 
                  src="https://i.postimg.cc/4NS1nbgP/buldogueverde.jpg" 
                  alt="Logo Buldogue Verde" 
                  className="w-full h-full object-cover scale-[1.7]"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-green-800">
                Buldogue<span className="text-green-500">Verde</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A clínica veterinária 24h de Manaus que cuida do seu pet com o amor e a dedicação que ele merece.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/buldogueverde/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-green-600 transition-colors shadow-sm"
              >
                <span className="text-[10px] font-bold">I</span>
              </a>
              <a 
                href="https://www.facebook.com/buldogueverde/?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-green-600 transition-colors shadow-sm"
              >
                <span className="text-[10px] font-bold">F</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Nossas Unidades</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {UNIDADES.map(u => (
                <li key={u.id} className="flex flex-col gap-1 mb-2">
                  <a 
                    href={u.whatsapp} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {u.name}
                  </a>
                  <a 
                    href={u.mapLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-green-600 transition-colors"
                  >
                    {u.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#sobre" className="hover:text-green-600">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-green-600">Serviços</a></li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send?phone=5592985012413&text=Olá, gostaria de saber sobre vagas de emprego." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 flex items-center gap-2 font-bold text-green-600"
                >
                  <Briefcase size={16} /> Trabalhe Conosco
                </a>
              </li>
              <li><a href="#" className="hover:text-green-600">Blog Pet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contato Central</h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Manaus - AM
            </p>
            <p className="text-sm font-bold text-green-600 mb-2">Atendimento 24h</p>
            <p className="text-sm text-gray-500">(92) 98285-3396</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2026 Buldogue Verde. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-green-600">Privacidade</a>
            <a href="#" className="hover:text-green-600">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={UNIDADES[0].whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
        24H
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <Hero />
      <Unidades />
      <Services />
      <EmotionalSection />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
