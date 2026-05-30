/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Hammer, Cpu, Sparkles, ArrowRight, CheckCircle2, Lightbulb, BadgeCheck, MapPin, Users, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { ActiveSection } from '../types';

import homeHeroBgImg from '../assets/images/home_hero_bg_1780151004252.png';

interface HomeSectionProps {
  setActiveSection: (section: ActiveSection) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen space-y-24 pb-20 bg-slate-50 text-slate-800 overflow-hidden selection:bg-[#D4A44A]/30" id="home-root">
      {/* Premium subtle background texture pattern for solid colors */}
      <div className="absolute inset-0 bg-[radial-gradient(#dbe2eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

      <div className="relative z-10 space-y-24">
      {/* Dynamic Hero Section using the uploaded background picture at highest raw focus */}
      <section className="relative overflow-hidden w-full min-h-[500px] lg:min-h-[660px] flex items-stretch border-b border-slate-200" id="home-hero">
        {/* Full Section Background Image - Fits the whole section of home page */}
        <div className="absolute inset-0 z-0">
          <img
            src={homeHeroBgImg}
            alt="Travis Group Main Hero Background"
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark layout overlay vignette to guarantee absolute premium text legibility directly over the image, with no color card blocks */}
          <div className="absolute inset-0 bg-slate-950/45" />
        </div>

        {/* Text sitting directly on top of the photo background (No colored box background under words) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24 flex items-center justify-start">
          <div className="w-full lg:max-w-xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#D4A44A] animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4A44A] font-bold">
                PROUDLY SOUTH AFRICAN DIVERSIFIED ENTERPRISE
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-[11px] uppercase tracking-[0.4em] text-[#D4A44A] font-bold drop-shadow">Durban, South Africa</h2>
              <h1 className="font-serif-georgia text-4xl sm:text-5xl font-bold leading-[1.1] text-white drop-shadow-md">
                <span className="text-[#D4A44A]">Building.</span> <span className="text-[#3B82F6]">Growing.</span> Celebrating.
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base text-white/95 leading-relaxed drop-shadow">
              Travis Group is a diversified corporate enterprise delivering professional solutions across <span className="text-[#D4A44A] font-bold underline decoration-[#D4A44A] decoration-2">Engineering</span>, <span className="text-[#3B82F6] font-bold underline decoration-[#3B82F6] decoration-2">Digital Marketing</span>, and <span className="text-white font-bold underline decoration-white decoration-2 font-serif">Event Decoration</span> throughout South Africa. We bring our clients' visions to life with pristine corporate quality.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleNavigate('services')}
                className="flex items-center gap-2 rounded-full bg-[#D4A44A] hover:bg-[#c3943a] text-slate-950 font-sans text-xs font-bold tracking-widest uppercase px-6 py-4 shadow-xl active:scale-95 transition-all text-center cursor-pointer border-none"
                id="hero-explore-services"
              >
                Explore Divisions
                <ArrowRight className="h-4 w-4 text-slate-950" />
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className="rounded-full border border-white/60 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#0A2342] text-white font-sans text-xs font-bold tracking-widest uppercase px-6 py-4 active:scale-95 transition-all text-center cursor-pointer"
                id="hero-get-quote"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Division Highlights Section */}
      <section className="mx-auto max-w-7xl px-6 z-10 relative" id="home-quick-highlights">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            <div className="flex flex-col justify-center pr-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#D4A44A] font-bold mb-1">AT A GLANCE</span>
              <h4 className="font-serif-georgia text-lg text-slate-900 font-semibold leading-snug">Divisional Pillars</h4>
              <p className="font-sans text-xs text-slate-500 leading-normal mt-1.5">Our dedicated sectors of South African enterprise excellence.</p>
            </div>
            {/* Engineering Column */}
            <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-[#FAFBFD] p-5 shadow-sm transition-all hover:bg-slate-100/50 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 mb-4 border border-slate-200">
                <Hammer className="h-5 w-5 text-[#D4A44A]" />
              </div>
              <h3 className="font-sans text-sm font-bold text-slate-900 mb-1">Engineering</h3>
              <p className="font-sans text-xs text-slate-600 leading-normal">Premium structural Signage, metal fabrication & architectural welding.</p>
            </div>
            {/* Digital Growth Column */}
            <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-[#FAFBFD] p-5 shadow-sm transition-all hover:bg-slate-100/50 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 mb-4 border border-slate-200">
                <Cpu className="h-5 w-5 text-[#3B82F6]" />
              </div>
              <h3 className="font-sans text-sm font-bold text-slate-900 mb-1">Digital Growth</h3>
              <p className="font-sans text-xs text-slate-600 leading-normal">Advanced web creation, brand visibility, and Durban KZN SEO.</p>
            </div>
            {/* Celebration Decor Column */}
            <div className="group overflow-hidden rounded-2xl border border-[#D4A44A]/20 bg-[#D4A44A]/5 p-5 shadow-sm transition-all hover:bg-[#D4A44A]/10 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A44A]/15 text-slate-800 mb-4 border border-[#D4A44A]/20">
                <Sparkles className="h-5 w-5 text-[#D4A44A]" />
              </div>
              <h3 className="font-sans text-sm font-bold text-slate-900 mb-1">Deco Styling</h3>
              <p className="font-sans text-xs text-slate-600 leading-normal">Bespoke luxury wedding planning, luxury flora structures & decor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Division Showcase Cards - Beautiful Navy Backgrounds with White Content */}
      <section className="mx-auto max-w-7xl px-6" id="home-divisions">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-mono text-[11px] font-bold tracking-widest text-[#D4A44A] uppercase">
            OPERATING SECTORS
          </h2>
          <h3 className="font-serif-georgia text-3xl sm:text-4xl font-medium tracking-tight text-slate-950">
            Our Three Specialized Divisions
          </h3>
          <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Each branch operates with professional corporate standards, pristine workmanship, and full adherence to safety protocols across South Africa.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Engineering Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white text-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:bg-slate-50 hover:translate-y-[-6px] hover:shadow-2xl border border-slate-200"
          >
            <div className="mb-6">
              <div className="w-12 h-[3px] bg-[#D4A44A] mb-6"></div>
              <h3 className="font-serif-georgia text-2xl italic mb-3 text-slate-900 font-medium animate-none">Engineering</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                Steel structure manufacturing, professional MIG/TIG welding, balustrades, industrial maintenance layouts, and luxury premium carports custom-machined.
              </p>
              <ul className="text-[11px] uppercase tracking-wider space-y-2 text-[#D4A44A] font-bold">
                <li>• Structural Signage & Frames</li>
                <li>• Luxury Carports & Gates</li>
                <li>• High-Strength Welding</li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                onClick={() => handleNavigate('engineering')}
                className="w-full text-center px-6 py-3 bg-[#0A2342] text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors cursor-pointer border border-transparent shadow"
                id="home-learn-engineering"
              >
                Explore Division
              </button>
            </div>
          </motion.div>

          {/* Digital Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white text-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:bg-slate-50 hover:translate-y-[-6px] hover:shadow-2xl border border-slate-200"
          >
            <div className="mb-6">
              <div className="w-12 h-[3px] bg-[#D4A44A] mb-6"></div>
              <h3 className="font-serif-georgia text-2xl italic mb-3 text-slate-900 font-medium animate-none">Digital Marketing</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                Advanced React web design, full SEO local integration, enterprise CRM platforms, high-ROI campaign setups, and digital visibility optimization.
              </p>
              <ul className="text-[11px] uppercase tracking-wider space-y-2 text-[#D4A44A] font-bold">
                <li>• Web Development</li>
                <li>• SEO & Brand Position</li>
                <li>• Systems Integration</li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                onClick={() => handleNavigate('digital')}
                className="w-full text-center px-6 py-3 bg-[#0A2342] text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors cursor-pointer border border-transparent shadow animate-none"
                id="home-learn-digital"
              >
                Explore Division
              </button>
            </div>
          </motion.div>

          {/* Deco Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white text-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:bg-slate-50 hover:translate-y-[-6px] hover:shadow-2xl border border-slate-200"
          >
            <div className="mb-6">
              <div className="w-12 h-[3px] bg-[#D4A44A] mb-6"></div>
              <h3 className="font-serif-georgia text-2xl italic mb-3 text-slate-900 font-medium animate-none">Event Decoration</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                Bespoke celebratory staging, custom organic structures, floral compositions, premium birthday arrangements, and luxury wedding visual installations.
              </p>
              <ul className="text-[11px] uppercase tracking-wider space-y-2 text-[#D4A44A] font-bold">
                <li>• Milestone Weddings</li>
                <li>• Baby Shower Settings</li>
                <li>• Corporate Launches</li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                onClick={() => handleNavigate('deco')}
                className="w-full text-center px-6 py-3 bg-[#0A2342] text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-slate-800 transition-colors cursor-pointer border border-transparent shadow"
                id="home-learn-deco"
              >
                Explore Division
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US SECTION - White Card Premium Panels with Navy & Gold Accents */}
      <section className="bg-white py-24 border-y border-slate-200" id="home-benefits">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Value Proposition Statement */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#D4A44A] uppercase bg-[#D4A44A]/10 px-3 py-1 rounded-full">
                WHY WORK WITH US
              </span>
              <h2 className="font-serif-georgia text-3xl sm:text-4xl text-slate-900 font-medium leading-tight">
                Quality Workmanship. Professional Service.
              </h2>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                Travis Group has established itself as an executive multi-industry South African partner. Our unified administrative structures allow us to handle engineering setups, technology systems, and launching decorations in single references.
              </p>
              
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-serif-georgia text-3xl font-bold text-[#0A2342]">100%</p>
                  <p className="font-sans text-xs text-slate-500 mt-1 font-medium pb-1.5">Client Centered approach</p>
                </div>
                <div>
                  <p className="font-serif-georgia text-3xl font-bold text-[#D4A44A]">3+</p>
                  <p className="font-sans text-xs text-slate-500 mt-1 font-medium pb-1.5">Specialist Departments</p>
                </div>
              </div>
            </div>

            {/* Checklist items with light-themed card styling */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Durban KZN Regional Presence', desc: 'Active offices in Durban, providing customized services and speedy turnarounds.' },
                { title: 'Diverse Corporate Engineering', desc: 'Bridging heavy structural signs, specialized code creation, and active styling coordinators.' },
                { title: 'Quality Workmanship Guarantee', desc: 'Highly tested steel assemblies, beautiful React code structures, and marvelous decor visuals.' },
                { title: 'Customer Satisfaction Driven', desc: 'Our customer relationships remain at the absolute core of our business operations.' },
                { title: 'Competitive South African Quotes', desc: 'Transparent quotations tailored precisely to accommodate your organization budget frameworks.' },
                { title: 'High-End Innovative Designs', desc: 'We utilize state-of-the-art physical fabrications, technologies, and styling layouts.' },
              ].map((benefit, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex items-start gap-4 transition-all hover:bg-slate-100/50 hover:shadow">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A2342]/5 text-[#0A2342] border border-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-[#D4A44A]" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans text-sm font-bold text-slate-900">{benefit.title}</p>
                    <p className="font-sans text-xs text-slate-600 leading-normal">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION - Light Corporate Stats Layout */}
      <section className="bg-slate-100/50 py-20 text-slate-800 border-b border-slate-200" id="home-stats">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#D4A44A] uppercase bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
              ORGANIZATION TRACK RECORD
            </span>
            <h2 className="font-serif-georgia text-3xl sm:text-4xl text-slate-950">
              Travis Group in Numbers
            </h2>
            <p className="font-sans text-sm text-slate-500">
              Our proven capacity to scale and deliver high-strength services throughout South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { count: '300+', label: 'Completed Projects', description: 'Heavy fabrications, business corporate websites, and wedding events.', icon: Award },
              { count: '100%', label: 'Workmanship Quality', description: 'Zero compromise on safety materials and design details.', icon: ShieldCheck },
              { count: '24h', label: 'Response Target', description: 'Speedy quotation updates and proposal outlines.', icon: TrendingUp },
              { count: '15+', label: 'Combined Experts', description: 'Qualified welders, coders, and florists.', icon: Users },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm relative overflow-hidden group hover:shadow-md hover:border-slate-300 transition-all">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2342] border border-[#0A2342]/10 text-white mb-6">
                    <Icon className="h-6 w-6 text-[#D4A44A]" />
                  </div>
                  <p className="font-sans text-4xl sm:text-5xl font-extrabold text-[#0A2342] tracking-tight mb-2">
                    {stat.count}
                  </p>
                  <p className="font-sans text-sm font-bold text-slate-900 mb-1">
                    {stat.label}
                  </p>
                  <p className="font-sans text-xs text-slate-500">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission panels - Elegant Modern Dual Tone Panels */}
      <section className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 pb-10" id="home-vision-mission">
        {/* Our Vision Card - White Opaque Paper Card */}
        <div className="relative overflow-hidden bg-white p-10 md:p-12 rounded-3xl border border-slate-200 shadow-xl group text-slate-800">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-slate-100 blur-2xl" />
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-800 border border-slate-200 mb-8">
            <Lightbulb className="h-6 w-6 text-[#D4A44A]" />
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4A44A] font-bold">
              OUR STRATEGIC DIRECTION
            </span>
            <h3 className="font-serif-georgia text-2xl font-medium text-slate-900">Our Vision</h3>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              To become one of South Africa's most trusted executive multi-service companies, delivering innovative and durable solutions that transform commercial entities, private residential properties, and landmark weddings.
            </p>
          </div>
        </div>

        {/* Our Mission Card - White Opaque Paper Card */}
        <div className="relative overflow-hidden bg-white p-10 md:p-12 rounded-3xl border border-slate-200 shadow-xl group text-slate-800">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-slate-100 blur-2xl" />
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-800 border border-slate-200 mb-8">
            <BadgeCheck className="h-6 w-6 text-[#3B82F6]" />
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#3B82F6] font-bold">
              DAILY PURPOSE
            </span>
            <h3 className="font-serif-georgia text-2xl font-medium text-slate-900">Our Mission</h3>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              To provide exceptional engineering fabrications, modern digital services, and event decorations that exceed general expectations through strict dedication to high-end workmanship, certified materials, and prompt execution.
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
