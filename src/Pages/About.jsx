import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-cyan-400">Us</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We are a team of passionate creators dedicated to building
              exceptional digital experiences that transform ideas into reality.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-slate-300 mb-4">
                  Founded in 2023, our journey began with a simple mission: to
                  create digital solutions that make a difference. What started
                  as a small team with big dreams has grown into a full-service
                  digital agency.
                </p>
                <p className="text-slate-300 mb-4">
                  Over the years, we've helped numerous businesses transform
                  their online presence, increase their reach, and achieve their
                  goals through innovative digital strategies.
                </p>
                <p className="text-slate-300">
                  Today, we continue to push boundaries, explore new
                  technologies, and deliver exceptional results for our clients.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 absolute -top-6 -right-6"></div>
                  <div className="w-64 h-64 rounded-full border-4 border-cyan-400/30 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🚀</div>
                      <div className="text-xl font-semibold">Our Journey</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Our Mission
              </h3>
              <p className="text-slate-300">
                To empower businesses with innovative digital solutions that
                drive growth, enhance efficiency, and create meaningful
                connections with their customers. We're committed to delivering
                exceptional value through our expertise, creativity, and
                unwavering focus on our clients' success.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Our Vision
              </h3>
              <p className="text-slate-300">
                To be the leading digital solutions provider recognized for our
                innovation, quality, and customer satisfaction. We envision a
                future where businesses of all sizes can leverage technology to
                transform their operations and reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-bold mb-2">Excellence</h3>
              <p className="text-slate-400 text-sm">
                We strive for excellence in everything we do.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-slate-400 text-sm">
                We embrace creativity and new ideas.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Integrity</h3>
              <p className="text-slate-400 text-sm">
                We act with honesty and transparency.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold mb-2">Growth</h3>
              <p className="text-slate-400 text-sm">
                We continuously learn and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
