export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center section-padding relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200 -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          {/* Stacked Wordmark */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-slate-900 leading-none">
              Vibe
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-slate-900 leading-none -mt-2 md:-mt-4">
              Setup
            </h1>
          </div>

          {/* Slogan */}
          <p className="text-warm-600 text-lg md:text-xl tracking-widest uppercase mb-8">
            Because you got a life.
          </p>

          {/* Subhead */}
          <p className="text-slate-700 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Describe what you want. We&apos;ll build it. You watch.
          </p>

          {/* CTA Button */}
          <a href="https://app.jabrium.com" className="btn-primary text-lg inline-block">
            Start with your voice
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-warm-400 to-transparent" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-center mb-20">
            How it works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-warm-300 flex items-center justify-center">
                <span className="text-slate-900 font-light text-xl">1</span>
              </div>
              <h3 className="text-slate-900 text-lg font-medium mb-3">
                Tell us what you want
              </h3>
              <p className="text-body text-sm">
                Record a voice message describing your idea. No jargon needed—just speak naturally.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-warm-300 flex items-center justify-center">
                <span className="text-slate-900 font-light text-xl">2</span>
              </div>
              <h3 className="text-slate-900 text-lg font-medium mb-3">
                Watch us build it
              </h3>
              <p className="text-body text-sm">
                Receive screen captures with personalized voice narration from your dedicated vibe jockey.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-warm-300 flex items-center justify-center">
                <span className="text-slate-900 font-light text-xl">3</span>
              </div>
              <h3 className="text-slate-900 text-lg font-medium mb-3">
                Give feedback when ready
              </h3>
              <p className="text-body text-sm">
                Review on your schedule. Leave voice notes. No meetings, no coordination overhead.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-warm-300 flex items-center justify-center">
                <span className="text-slate-900 font-light text-xl">4</span>
              </div>
              <h3 className="text-slate-900 text-lg font-medium mb-3">
                Receive your project
              </h3>
              <p className="text-body text-sm">
                Get credentials and full access to your completed, deployed project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-center mb-6">
            What we build
          </h2>
          <p className="text-center text-warm-600 text-lg mb-16 max-w-xl mx-auto">
            If it can be coded, we can build it.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Websites */}
            <div className="bg-cream-50 p-8 rounded-sm border border-cream-300">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-medium mb-3">Websites</h3>
              <p className="text-body text-sm">
                Landing pages, portfolios, business sites—beautiful and functional.
              </p>
            </div>

            {/* Apps */}
            <div className="bg-cream-50 p-8 rounded-sm border border-cream-300">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-medium mb-3">Apps</h3>
              <p className="text-body text-sm">
                Web applications, mobile apps, internal tools—whatever you need.
              </p>
            </div>

            {/* Automations */}
            <div className="bg-cream-50 p-8 rounded-sm border border-cream-300">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-medium mb-3">Automations</h3>
              <p className="text-body text-sm">
                Workflows, integrations, bots—let technology work for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The VBSTP Difference Section */}
      <section className="section-padding bg-slate-900 text-cream-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-center mb-20">
            The difference
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* No live calls */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-cream-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-cream-100">No live calls required</h3>
                <p className="text-cream-400/80 leading-relaxed">
                  Everything happens asynchronously. Communicate on your time, not ours.
                </p>
              </div>
            </div>

            {/* No technical knowledge */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-cream-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-cream-100">No technical knowledge needed</h3>
                <p className="text-cream-400/80 leading-relaxed">
                  Just describe what you want in plain language. We handle the rest.
                </p>
              </div>
            </div>

            {/* Your pace */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-cream-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-cream-100">Your project, your pace</h3>
                <p className="text-cream-400/80 leading-relaxed">
                  Review progress when it&apos;s convenient for you. No pressure, no deadlines.
                </p>
              </div>
            </div>

            {/* Personal vibe jockey */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-cream-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-cream-100">Personal vibe jockey assigned</h3>
                <p className="text-cream-400/80 leading-relaxed">
                  A dedicated human+AI team learns your style and handles everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to get started?
          </h2>
          <p className="text-body text-lg mb-12 max-w-lg mx-auto">
            Tell us what you want to build. It takes less than two minutes.
          </p>

          {/* Voice Recording Button Placeholder */}
          <div className="flex flex-col items-center gap-6">
            <a href="https://app.jabrium.com" className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <svg
                className="w-10 h-10 text-cream-100 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </a>
            <span className="text-warm-500 text-sm tracking-wide">
              Tap to record your idea
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding py-12 bg-cream-200 border-t border-cream-300">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Jabrium branding */}
            <div className="text-warm-500 text-sm">
              A Jabrium Engage Property
            </div>

            {/* Links */}
            <nav className="flex gap-8">
              <a href="#" className="text-warm-600 text-sm hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#" className="text-warm-600 text-sm hover:text-slate-900 transition-colors">
                Contact
              </a>
              <a href="#" className="text-warm-600 text-sm hover:text-slate-900 transition-colors">
                Terms
              </a>
            </nav>

            {/* Copyright */}
            <div className="text-warm-400 text-sm">
              &copy; {new Date().getFullYear()} VibeSetup
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
