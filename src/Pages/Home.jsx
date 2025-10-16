const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section with Unique Design */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="relative">
              <span className="inline-block px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-6">
                DIGITAL INNOVATION
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Ideas into{" "}
                <span className="text-cyan-400">Digital Reality</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                We empower businesses with cutting-edge digital solutions that
                drive growth, enhance efficiency, and create meaningful
                connections with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-2 px-8 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Innovation"
                  className="w-full h-auto object-cover"
                />
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>

                {/* Floating card */}
                <div className="absolute bottom-6 left-6 bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-slate-700 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-slate-900"
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
                    <div>
                      <p className="text-white font-medium">Fast & Secure</p>
                      <p className="text-slate-400 text-sm">
                        Lightning performance
                      </p>
                    </div>
                  </div>
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
