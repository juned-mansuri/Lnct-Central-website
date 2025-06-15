"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import LogoContainer from "@/components/ui/LogoContainer";
import LNCTLogo from "@/components/assets/LNCT-Logo.png";
import Image from "next/image";

import {
  GraduationCap,
  Users,
  Award,
  Building,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  Star,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LNCTWebsite() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const institutionsRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    // Hero animations with improved timing
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from(".hero-logo", {
      duration: 0.8,
      scale: 0,
      rotation: 180,
      ease: "back.out(1.7)",
    })
      .from(
        ".hero-title",
        {
          duration: 1.2,
          y: 100,
          opacity: 0,
          ease: "power4.out",
        },
        "-=0.3"
      )
      .from(
        ".hero-subtitle",
        {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        ".hero-buttons",
        {
          duration: 0.8,
          y: 30,
          opacity: 0,
          scale: 0.9,
          ease: "power3.out",
        },
        "-=0.4"
      );

    // About timeline animation with enhanced effects
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 60,
      opacity: 0,
      rotationX: 15,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Institutions cards with improved stagger

    // Why choose features with slide-in effect
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: whyChooseRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      x: -80,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Contact section with enhanced animation
    gsap.from(".contact-item", {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      y: 40,
      stagger: 0.15,
      ease: "back.out(1.4)",
    });

    // Enhanced navbar scroll effect
    ScrollTrigger.create({
      trigger: "body",
      start: "top -100",
      end: "bottom top",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const institutions = [
    {
      name: "LNCT University",
      description:
        "Premier university offering diverse programs with industry focus",
      icon: (
        <LogoContainer className="bg-gradient-to-br from-[#003366] to-blue-600" />
      ),
      link: "https://www.tailwindcss.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "LNCT College of Engineering",
      description: "Excellence in engineering education and innovation",
      icon: <Image
              src={LNCTLogo}
              alt="lnct logo"
              className="w-full h-40 object-contain "
            />,
      link: "#",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "LNCT Business School",
      description: "Shaping future business leaders and entrepreneurs",
      icon: <Users className="w-8 h-8" />,
      link: "#",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "LNCT Institute of Technology",
      description: "Innovation in technology education and research",
      icon: <Lightbulb className="w-8 h-8" />,
      link: "#",
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "LNCT Medical College",
      description: "Healthcare education excellence with modern facilities",
      icon: <Award className="w-8 h-8" />,
      link: "#",
      color: "from-green-500 to-green-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "LNCT Dental College",
      description: "Advanced dental education with cutting-edge technology",
      icon: <Star className="w-8 h-8" />,
      link: "#",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const timelineEvents = [
    {
      year: "1993",
      event: "LNCT Group Established",
      description: "Foundation of excellence in education",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      year: "2000",
      event: "AICTE Approval Received",
      description: "Recognition for quality education standards",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      year: "2005",
      event: "RGPV Affiliation",
      description: "Partnership with Rajiv Gandhi Technical University",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2010",
      event: "NBA Accreditation",
      description: "National Board of Accreditation recognition",
      icon: <Star className="w-6 h-6" />,
    },
    {
      year: "2020",
      event: "University Status Achieved",
      description: "Milestone achievement in educational excellence",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const features = [
    {
      title: "Industry-Focused Programs",
      description:
        "Curriculum designed with real-world industry requirements and latest technological trends",
      icon: <Target className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Top Recruiters",
      description:
        "Strong partnerships with leading global companies ensuring excellent placement opportunities",
      icon: <Globe className="w-10 h-10" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Modern Campus",
      description:
        "State-of-the-art facilities, laboratories, and infrastructure for comprehensive learning",
      icon: <Building className="w-10 h-10" />,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Research Excellence",
      description:
        "Cutting-edge research programs and innovation centers driving technological advancement",
      icon: <BookOpen className="w-10 h-10" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      const navbarHeight = navbar?.offsetHeight || 80;
      const targetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjkrrwzr"); // Replace "mjkrrwzr" with your Formspree form ID

    if (state.succeeded) {
      return (
        <p className="text-center text-lg font-semibold text-green-600">
          Thanks for your message! We'll get back to you soon.
        </p>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Your Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="h-14 rounded-2xl border-2 border-gray-200 focus:border-[#003366] text-lg px-6 transition-all duration-300 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Your Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            className="h-14 rounded-2xl border-2 border-gray-200 focus:border-[#003366] text-lg px-6 transition-all duration-300 w-full"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            className="h-14 rounded-2xl border-2 border-gray-200 focus:border-[#003366] text-lg px-6 transition-all duration-300 w-full"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Your Message"
            className="rounded-2xl border-2 border-gray-200 focus:border-[#003366] text-lg px-6 py-4 resize-none transition-all duration-300 w-full"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full h-14 bg-gradient-to-r from-[#003366] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Send Message
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="navbar fixed top-0 w-full z-50 transition-all duration-300 ease-out ">
        <div className="   mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-start space-x-8">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Institutions", id: "institutions" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-[#003366] transition-all duration-300 relative group font-medium py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#003366] hover:bg-blue-700 text-white px-6 py-2 hidden lg:flex rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex justify-end w-full">
              <button
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-[#003366]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#003366]" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full right-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {[
                    { label: "Home", id: "home" },
                    { label: "About", id: "about" },
                    { label: "Institutions", id: "institutions" },
                    { label: "Contact", id: "contact" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-700 hover:text-[#003366] transition-colors duration-200 py-2 font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-[#003366] hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg mt-4"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className=" mb-8">
            <Image
              src={LNCTLogo}
              alt="lnct logo"
              className="w-full h-40 object-contain "
            />
            {/* <LogoContainer className=" h-40  flex items-center justify-center mx-auto " /> */}
            {/* <div className="w-48 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm">
              <GraduationCap className="w-12 h-12 text-white" />
            </div> */}
          </div>

          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              LNCT Group
            </span>
            <br />
            of Institutions
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empowering education, fostering innovation, and achieving excellence
            since 1993
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("institutions")}
              className="bg-white text-[#003366] hover:bg-blue-50 px-8 py-4 text-lg rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Explore Institutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-2 border-white text-white hover:bg-white hover:text-[#003366] px-8 py-4 text-lg rounded-2xl font-semibold backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Know More
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#003366] mb-6">
              Our Journey
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three decades of educational excellence, innovation, and
              unwavering commitment to student success
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="relative">
              {/* Enhanced timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#003366] to-blue-600 hidden md:block rounded-full"></div>

              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-item flex flex-col items-center mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <Card className="p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 rounded-3xl w-full max-w-md">
                      <CardContent className="p-0">
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            index % 2 === 0
                              ? "md:justify-end"
                              : "md:justify-start"
                          }`}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            {event.icon}
                          </div>
                          <span className="text-3xl font-bold text-[#003366]">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left">
                          {event.event}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-center md:text-left">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Enhanced timeline dot */}
                  <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-[#003366] to-blue-600 rounded-full border-4 border-white shadow-xl z-10"></div>

                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Institutions Grid */}
       <section
      id="institutions"
      ref={institutionsRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#003366] mb-6">
            Our Institutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our diverse range of world-class educational institutions
          </p>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.slice(0, visibleCount).map((institution, index) => (
            <Card
              key={index}
              className="institution-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${institution.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                >
                  <div className="text-white">{institution.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-4 group-hover:text-blue-600 transition-colors">
                  {institution.name}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {institution.description}
                </p>
                <a
                  as="a"
                href={institution.link}
                target="_blank" // Optional: Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for external links
                 >
                <Button

  className="bg-gradient-to-r from-[#003366] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
>

  Learn More
  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
</Button>
  </a>
              </CardContent>
            </Card>
          ))}
        </div>
    
        {visibleCount < institutions.length && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="bg-[#003366] hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>

      {/* Enhanced Why Choose LNCT */}
      <section
        ref={whyChooseRef}
        className="py-24 bg-gradient-to-br from-[#003366] via-blue-700 to-blue-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300/10 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose LNCT?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Excellence in education with an industry-focused approach and
              commitment to innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#003366] mb-6">
              Get in Touch
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your educational journey with us? We're here to
              help you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              <div className="contact-item flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-3 group-hover:text-blue-600 transition-colors">
                    Address
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    LNCT Campus, Raisen Road,
                    <br />
                    Bhopal, Madhya Pradesh 462021
                  </p>
                </div>
              </div>

              <div className="contact-item flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-3 group-hover:text-blue-600 transition-colors">
                    Phone
                  </h3>
                  <p className="text-gray-600 text-lg">+91 755 2740800</p>
                </div>
              </div>

              <div className="contact-item flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-3 group-hover:text-blue-600 transition-colors">
                    Email
                  </h3>
                  <p className="text-gray-600 text-lg">info@lnct.ac.in</p>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <Card className="contact-item shadow-2xl border-0 rounded-3xl bg-white">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-[#003366] mb-8 text-center">
                  Send us a Message
                </h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-[#003366] via-blue-800 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/10 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-[#003366]" />
                </div>
                <div>
                  <span className="text-2xl font-bold">LNCT</span>
                  <div className="text-sm text-blue-200">
                    Group of Institutions
                  </div>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                Empowering minds, shaping futures, and building tomorrow's
                leaders since 1993.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-blue-100">
                {[
                  { label: "Home", id: "home" },
                  { label: "About Us", id: "about" },
                  { label: "Institutions", id: "institutions" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-white transition-colors duration-200 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Our Institutions</h3>
              <ul className="space-y-3 text-blue-100">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    LNCT University
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Engineering College
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Business School
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Medical College
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-110">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Follow us for the latest updates and educational insights
              </p>
            </div>
          </div>

          <div className="border-t border-blue-700/50 pt-8 text-center">
            <p className="text-blue-100 text-lg">
              © {new Date().getFullYear()} LNCT Group of Institutions. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
