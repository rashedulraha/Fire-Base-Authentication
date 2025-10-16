import { FaSearchengin } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaTree } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section with Background Image */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/70"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-cyan-400">Us</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We are a team of passionate creators dedicated to building
              exceptional digital experiences that transform ideas into reality.
            </p>
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2">
              <span className="text-cyan-400 font-medium">Since 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section with Image */}
      <div className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Founded in 2023, our journey began with a simple mission: to
                  create digital solutions that make a difference. What started
                  as a small team with big dreams has grown into a full-service
                  digital agency.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Over the years, we've helped numerous businesses transform
                  their online presence, increase their reach, and achieve their
                  goals through innovative digital strategies.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Today, we continue to push boundaries, explore new
                  technologies, and deliver exceptional results for our clients.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700">
                    <div className="text-3xl font-bold text-cyan-400">150+</div>
                    <div className="text-slate-400 text-sm">Projects</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700">
                    <div className="text-3xl font-bold text-cyan-400">98%</div>
                    <div className="text-slate-400 text-sm">Satisfaction</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700">
                    <div className="text-3xl font-bold text-cyan-400">24/7</div>
                    <div className="text-slate-400 text-sm">Support</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Our Team"
                    className="w-full h-auto object-cover"
                  />
                  {/* Image overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section with Enhanced Design */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Our Mission
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  To empower businesses with innovative digital solutions that
                  drive growth, enhance efficiency, and create meaningful
                  connections with their customers. We're committed to
                  delivering exceptional value through our expertise,
                  creativity, and unwavering focus on our clients' success.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  To be the leading digital solutions provider recognized for
                  our innovation, quality, and customer satisfaction. We
                  envision a future where businesses of all sizes can leverage
                  technology to transform their operations and reach their full
                  potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section with Enhanced Design */}
      <div className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                <FaSearchengin className="text-3xl text-cyan-400" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Excellence</h3>
              <p className="text-slate-400">
                We strive for excellence in everything we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                <FaRegLightbulb className="text-3xl text-cyan-400" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Innovation</h3>
              <p className="text-slate-400">
                We embrace creativity and new ideas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                <FaPeopleArrows className="text-3xl text-cyan-400" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Integrity</h3>
              <p className="text-slate-400">
                We act with honesty and transparency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                <FaTree className="text-3xl text-cyan-400" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Growth</h3>
              <p className="text-slate-400">
                We continuously learn and improve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-cyan-400 mb-3">CEO & Founder</p>
                <p className="text-slate-400 text-sm">
                  Visionary leader with a passion for technology and innovation.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJIkRR5xaxAjrWIeuiGkZBj4cMK7JFkB2CQ&s"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Williams</h3>
                <p className="text-cyan-400 mb-3">Head of Design</p>
                <p className="text-slate-400 text-sm">
                  Creative professional dedicated to crafting exceptional user
                  experiences.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                <p className="text-cyan-400 mb-3">CTO</p>
                <p className="text-slate-400 text-sm">
                  Technical expert with over 10 years of experience in software
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
