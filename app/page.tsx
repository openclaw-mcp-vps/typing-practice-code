export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Real code. Real speed. Real results.
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Type real code from<br />
          <span className="text-[#58a6ff]">popular open source repos</span>
        </h1>
        <p className="text-xl text-[#8b949e] mb-10 max-w-2xl mx-auto">
          Stop typing lorem ipsum. Practice with actual JavaScript, Python, and Go from top GitHub repositories. Track your WPM, accuracy, and watch your coding speed soar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-lg"
          >
            Start Typing — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors text-lg"
          >
            Learn More
          </a>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <div className="space-y-1">
            <p><span className="text-[#ff7b72]">function</span> <span className="text-[#d2a8ff]">debounce</span><span className="text-[#c9d1d9]">(fn, delay) {'{'}</span></p>
            <p className="pl-4"><span className="text-[#ff7b72]">let</span> <span className="text-[#c9d1d9]">timer;</span></p>
            <p className="pl-4"><span className="text-[#ff7b72]">return function</span> <span className="text-[#c9d1d9]">(...args) {'{'}</span></p>
            <p className="pl-8"><span className="text-[#79c0ff]">clearTimeout</span><span className="text-[#c9d1d9]">(timer);</span></p>
            <p className="pl-8"><span className="text-[#c9d1d9]">timer = </span><span className="text-[#79c0ff]">setTimeout</span><span className="text-[#c9d1d9]">(() =&gt; fn(...args), delay);</span></p>
            <p className="pl-4"><span className="text-[#c9d1d9]">{'}'}</span></p>
            <p><span className="text-[#c9d1d9]">{'}'}</span></p>
          </div>
          <div className="mt-4 flex gap-6 text-xs text-[#8b949e]">
            <span className="text-[#3fb950]">■ 94 WPM</span>
            <span className="text-[#58a6ff]">■ 98% accuracy</span>
            <span>■ react/packages/react/src/utils.js</span>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#30363d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">50+</div>
            <div className="text-[#8b949e] text-sm">Top GitHub repos loaded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">Real-time</div>
            <div className="text-[#8b949e] text-sm">WPM &amp; accuracy tracking</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">5 langs</div>
            <div className="text-[#8b949e] text-sm">JS, TS, Python, Go, Rust</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {["Access to 50+ real repositories","WPM & accuracy tracking","Progress history & streaks","5 programming languages","New repos added weekly","Cancel anytime"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-center"
          >
            Get Started — $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What code will I be typing?</h3>
            <p className="text-[#8b949e] text-sm">Real files from popular open source projects like React, Vue, Django, and more — fetched directly from GitHub so you practice with production-quality code.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is this different from Monkeytype?</h3>
            <p className="text-[#8b949e] text-sm">Monkeytype uses random words or quotes. TypeCode uses actual source code with syntax highlighting, so you build muscle memory for real programming patterns, brackets, and indentation.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Yes, cancel anytime from your account dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} TypeCode. Built for developers who want to type faster.</p>
      </footer>
    </main>
  );
}
