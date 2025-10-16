const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section with Unique Design */}
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Digital</span>
                <span className="block text-cyan-400 mt-2">Innovation</span>
                <span className="block mt-2">Starts Here</span>
              </h1>
              <div className="h-1 w-24 bg-cyan-400 mb-6"></div>
              <p className="text-lg text-slate-300 mb-8 max-w-lg">
                We craft exceptional digital experiences that transform ideas
                into reality. Simple, elegant, and powerful solutions for modern
                businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1">
                  Explore Work
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 absolute -top-6 -right-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400/30 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-8xl mb-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Features Section */}
      <div className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our approach combines creativity with technology to deliver unique
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Design</h3>
              <p className="text-slate-400">
                We don't just build websites, we create digital experiences that
                captivate and engage your audience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-400">
                Optimized performance ensures your visitors get the best
                experience with lightning-fast load times.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Reliable</h3>
              <p className="text-slate-400">
                Enterprise-grade security and reliability to protect your
                digital assets and ensure uptime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Testimonial Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-cyan-500/20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-cyan-500/20"></div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-700 relative">
                <div className="text-cyan-400 text-5xl mb-6">"</div>
                <p className="text-xl md:text-2xl mb-8 text-slate-300">
                  Working with this team transformed our online presence
                  completely. Their unique approach and attention to detail is
                  unmatched.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold">Alex Rivera</h4>
                    <p className="text-slate-400">Founder, TechNova</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
