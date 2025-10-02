"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">(
    "monthly"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white" data-oid="dj4l-pm">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        data-oid="m2fmcdc">

        <div className="max-w-7xl mx-auto px-6 py-4" data-oid="487o1x1">
          <div className="flex items-center justify-between" data-oid="3rc5igb">
            {/* Logo */}
            <div className="flex items-center gap-2" data-oid="7g4tx9i">
              <div
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-transform duration-300 cursor-pointer"
                data-oid="_6nr66i">

                <span
                  className="text-white font-bold text-xl"
                  data-oid="b7zoc36">

                  R
                </span>
              </div>
              <span
                className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                data-oid="64godpw">

                ReviewHub
              </span>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center gap-8"
              data-oid="u.q.mn_">

              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-oid="ow_f-ma">

                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-oid="94vho2k">

                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-oid="50hbhv7">

                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-oid="0j.g5el">

                FAQ
              </a>
            </div>

            {/* CTA Buttons */}
            <div
              className="hidden md:flex items-center gap-4"
              data-oid="lmhpvb0">

              <button
                className="px-6 py-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors"
                data-oid="dp7tu9x">

                Sign In
              </button>
              <button
                className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 duration-300"
                data-oid="4x6uau.">

                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              data-oid="-yrdalq">

              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="yn8g5c0">

                {mobileMenuOpen ?
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  data-oid="kuzfh1u" /> :


                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid="04qy6lf" />

                }
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen &&
          <div
            className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4"
            data-oid="qn8w.r8">

              <div className="flex flex-col gap-4" data-oid="wsoc6sy">
                <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="ixu3o.5">

                  Features
                </a>
                <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="l1u1v2u">

                  Pricing
                </a>
                <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="3don-hg">

                  Testimonials
                </a>
                <a
                href="#faq"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="okw0i.s">

                  FAQ
                </a>
                <div
                className="flex flex-col gap-2 pt-2 border-t border-gray-200"
                data-oid="277jtpu">

                  <button
                  className="px-6 py-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors text-center"
                  data-oid="8_9:u.l">

                    Sign In
                  </button>
                  <button
                  className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 duration-300"
                  data-oid="xwmcdx5">

                    Get Started
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative w-full px-6 pt-32 pb-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
        data-oid="qx8_cea">

        {/* Animated background elements */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          data-oid="vxlcxc7">

          <div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"
            data-oid="ajmmhs-">
          </div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
            data-oid="-z06no1">
          </div>
          <div
            className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
            data-oid="akux:bx">
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10" data-oid="6c72aqg">
          {/* Trust Badge */}
          <div
            className="flex items-center justify-center gap-3 mb-12 animate-fade-in-up"
            data-oid="zt_9q8y">

            <div className="flex -space-x-2" data-oid="v:5y58-">
              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                data-oid="81crugf" />

              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"
                data-oid="m3y4kau" />

              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"
                data-oid="aql2tfc" />

            </div>
            <p className="text-sm text-gray-600 font-medium" data-oid="yfa6-g5">
              Trusted by 1M+ users
            </p>
          </div>

          {/* Main Headline */}
          <div
            className="text-center max-w-4xl mx-auto mb-12 animate-fade-in-up delay-100"
            data-oid="wt-x4a4">

            <h1
              className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900"
              data-oid="_v_yhs-">

              Turn scattered reviews into{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 gradient-animate"
                data-oid="6ob11rd">

                smart decisions
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              data-oid="lbq9_48">

              One simple dashboard to manage reviews across all platforms, boost
              your ratings, and respond instantly—without the chaos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up delay-200"
            data-oid="kaybkw3">

            <button
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
              data-oid="z2_7x-5">

              Get Started For Free
            </button>
          </div>
          <p
            className="text-center text-gray-500 text-sm animate-fade-in delay-300"
            data-oid="q-7xww2">

            No credit card required
          </p>

          {/* Hero Image */}
          <div
            className="mt-16 relative animate-fade-in-up delay-400"
            data-oid="j_k9m4q">

            <div
              className="w-full max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-2xl"
              data-oid="iwtqjny">

              <div className="space-y-4" data-oid="y0vg79g">
                {/* Mock Dashboard Header */}
                <div
                  className="flex items-center justify-between pb-4 border-b border-gray-200"
                  data-oid="00a7-4.">

                  <div data-oid="6fadnyl">
                    <h3
                      className="text-2xl font-bold text-gray-900"
                      data-oid="fpzxgkm">

                      Reviews Dashboard
                    </h3>
                    <p className="text-gray-500" data-oid="43os6on">
                      Real-time review management
                    </p>
                  </div>
                  <div className="flex gap-2" data-oid=".an-8v9">
                    <div
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold"
                      data-oid="fzjeitt">

                      4.8★ Average
                    </div>
                  </div>
                </div>

                {/* Mock Stats */}
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  data-oid="67lue5s">

                  <div
                    className="bg-white rounded-xl p-6 border border-gray-200"
                    data-oid="lme:0ni">

                    <p
                      className="text-sm text-gray-500 mb-1"
                      data-oid="-0ze09e">

                      Total Reviews
                    </p>
                    <p
                      className="text-3xl font-bold text-gray-900"
                      data-oid="z5-u3u0">

                      12,847
                    </p>
                    <p
                      className="text-sm text-green-600 mt-1"
                      data-oid=":13p.er">

                      ↑ 23% this month
                    </p>
                  </div>
                  <div
                    className="bg-white rounded-xl p-6 border border-gray-200"
                    data-oid="smc53z4">

                    <p
                      className="text-sm text-gray-500 mb-1"
                      data-oid="2hdq-8y">

                      Response Rate
                    </p>
                    <p
                      className="text-3xl font-bold text-gray-900"
                      data-oid="sacsmcb">

                      94%
                    </p>
                    <p
                      className="text-sm text-green-600 mt-1"
                      data-oid="06_hd99">

                      ↑ 12% improvement
                    </p>
                  </div>
                  <div
                    className="bg-white rounded-xl p-6 border border-gray-200"
                    data-oid=".9nb2bz">

                    <p
                      className="text-sm text-gray-500 mb-1"
                      data-oid="3til.tc">

                      Avg Response Time
                    </p>
                    <p
                      className="text-3xl font-bold text-gray-900"
                      data-oid="4a3-i1i">

                      2.3h
                    </p>
                    <p
                      className="text-sm text-blue-600 mt-1"
                      data-oid="aslhd-v">

                      ↓ 45% faster
                    </p>
                  </div>
                </div>

                {/* Mock Review List */}
                <div className="space-y-3" data-oid="tjsmiw5">
                  {[1, 2, 3].map((i) =>
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-gray-200 flex items-start gap-4"
                    data-oid="4duytq5">

                      <div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600"
                      data-oid=":0-60ng" />

                      <div className="flex-1" data-oid="k1gpqf1">
                        <div
                        className="flex items-center gap-2 mb-1"
                        data-oid="56q057g">

                          <span
                          className="font-semibold text-gray-900"
                          data-oid="pb4bw8m">

                            Customer Name
                          </span>
                          <span className="text-yellow-500" data-oid="o3-cg.-">
                            ★★★★★
                          </span>
                          <span
                          className="text-xs text-gray-400"
                          data-oid="5fud62:">

                            • Google
                          </span>
                        </div>
                        <p className="text-sm text-gray-600" data-oid=":lbv-gd">
                          Amazing service and quick response time...
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section
        className="py-12 border-y border-gray-200 bg-gray-50"
        data-oid="0p9:h2z">

        <div className="max-w-7xl mx-auto px-6" data-oid="az-a4fi">
          <p
            className="text-center text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wider"
            data-oid="8noob4t">

            Blindly trusted by
          </p>
          <div className="flex overflow-hidden" data-oid="u_lxq6g">
            <div
              className="flex animate-scroll gap-12 items-center"
              data-oid="3sosfsa">

              {[...Array(12)].map((_, i) =>
              <div
                key={i}
                className="flex-shrink-0 w-32 h-12 bg-gray-300 rounded-lg opacity-50"
                data-oid=":-v1wph" />

              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6" data-oid="i2pz15_">
        <div className="max-w-7xl mx-auto" data-oid=".idgfok">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid="d73mhi.">

            <p
              className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider"
              data-oid="xbldve-">

              Unique Features
            </p>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              data-oid="9_i.zkh">

              Make your platform work harder for you
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="n-ewk3d">

              Streamline your reviews with unified dashboards and AI-powered
              responses—all in one place.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="st6iz4g">

            {/* Feature 1 */}
            <div
              className="rounded-3xl border border-gray-200 p-8 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group"
              data-oid="u5xyf6f">

              <div
                className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6 flex items-center justify-center group-hover-scale transition-transform duration-300"
                data-oid=".xs1nc-">

                <div className="text-6xl animate-float" data-oid="buksu42">
                  📊
                </div>
              </div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                data-oid="23jwb-6">

                Unified Dashboard
              </h3>
              <p className="text-gray-600" data-oid="sg3qcxd">
                See all your reviews from Google, Yelp, Facebook, and more in
                one clean, unified view — no more switching tabs.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="rounded-3xl border border-gray-200 p-8 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group"
              data-oid="jmiddl3">

              <div
                className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl mb-6 flex items-center justify-center group-hover-scale transition-transform duration-300"
                data-oid="xm6fg7q">

                <div className="text-6xl animate-float" data-oid="2:flv5k">
                  🤖
                </div>
              </div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                data-oid="ofu07eq">

                AI Response Generator
              </h3>
              <p className="text-gray-600" data-oid="d2:hb.m">
                Generate personalized responses instantly with AI, maintaining
                your brand voice across all platforms.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="rounded-3xl border border-gray-200 p-8 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group"
              data-oid="mlrwupg">

              <div
                className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-6 flex items-center justify-center group-hover-scale transition-transform duration-300"
                data-oid="1jsbl39">

                <div className="text-6xl animate-float" data-oid="sknkg4b">
                  📈
                </div>
              </div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                data-oid="e768.s_">

                Sentiment Analytics
              </h3>
              <p className="text-gray-600" data-oid=".ode_k:">
                Track customer sentiment trends and identify issues before they
                escalate with real-time analytics.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className="rounded-3xl border border-gray-200 p-8 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group"
              data-oid="cm2f.6-">

              <div
                className="w-full h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl mb-6 flex items-center justify-center group-hover-scale transition-transform duration-300"
                data-oid="8p3ix9j">

                <div className="text-6xl animate-float" data-oid="z9u2mz7">
                  ⚡
                </div>
              </div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                data-oid="5_xelq3">

                Instant Notifications
              </h3>
              <p className="text-gray-600" data-oid="53fd8ex">
                Get notified immediately when new reviews arrive, so you can
                respond quickly and show customers you care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gray-50" data-oid="qebono:">
        <div className="max-w-7xl mx-auto" data-oid="j4tsbqq">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid="e2gy1ni">

            <p
              className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider"
              data-oid="fuztqm5">

              Benefits
            </p>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              data-oid="-j28xiw">

              Benefits That Truly Matter to You
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="n_96i5-">

              Monitor reviews as they happen, so you can respond quickly and
              keep your reputation on track.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="3f9t2up">

            {[
            {
              title: "Real-Time Monitoring",
              description:
              "Monitor review activity instantly for smarter reputation management."
            },
            {
              title: "All-in-One View",
              description:
              "Keep all your reviews in one place, without jumping between platforms."
            },
            {
              title: "Actionable Insights",
              description:
              "Track the metrics that matter most for sustainable reputation growth."
            },
            {
              title: "Secure Data",
              description:
              "Keep your data safe with advanced security and strong encryption."
            },
            {
              title: "Custom Reports",
              description:
              "Create tailored reports that fit your needs and highlight key insights."
            },
            {
              title: "Simple to Use",
              description:
              "Navigate easily—no steep learning curve, start responding within minutes."
            }].
            map((benefit, i) =>
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              data-oid="bt_kaq1">

                <h4
                className="text-xl font-bold text-gray-900 mb-3"
                data-oid="y787yhl">

                  {benefit.title}
                </h4>
                <p className="text-gray-600" data-oid="cuckm_g">
                  {benefit.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6" data-oid="1_5levm">
        <div className="max-w-7xl mx-auto" data-oid=".l45bts">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid=".vlnhrg">

            <p
              className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider"
              data-oid="oj2dz72">

              How It Works
            </p>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              data-oid="7xhs-3p">

              Get clear answers in 3 simple steps
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="wgpafee">

              From reviews to reputation—collect feedback, respond instantly,
              and grow smarter in three simple steps.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            data-oid="61rd-yi">

            {[
            {
              step: "1",
              title: "Connect your platforms",
              description:
              "Integrate in minutes with Google, Yelp, Facebook, and more—no technical knowledge required.",
              icon: "🔗"
            },
            {
              step: "2",
              title: "Monitor all reviews",
              description:
              "See what customers love, what needs improvement, and respond from one dashboard.",
              icon: "👁️"
            },
            {
              step: "3",
              title: "Boost your reputation",
              description:
              "Get AI-powered response suggestions and watch your ratings improve over time.",
              icon: "🚀"
            }].
            map((step, i) =>
            <div key={i} className="text-center" data-oid="mdj0afl">
                <div
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-transform duration-300"
                data-oid="n:7oc.r">

                  {step.step}
                </div>
                <div
                className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center text-6xl hover:scale-105 transition-transform duration-300"
                data-oid=".wohavs">

                  {step.icon}
                </div>
                <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                data-oid="wvak3vd">

                  {step.title}
                </h3>
                <p className="text-gray-600" data-oid="ddf2b4j">
                  {step.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section
        className="py-24 px-6 bg-gray-900 text-white overflow-hidden"
        data-oid="jt-v19.">

        <div className="max-w-7xl mx-auto" data-oid="70e2mb8">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid="lntjwuj">

            <p
              className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider"
              data-oid="_krkmpw">

              Integrations
            </p>
            <h2 className="text-5xl font-bold mb-4" data-oid="vw9e8-9">
              Seamless Integrations
            </h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              data-oid="1nm6lr:">

              Connect with your favorite review platforms to streamline
              workflows and keep everything running smoothly.
            </p>
            <button
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              data-oid="ea-rh68">

              Get Started Now
            </button>
          </div>

          <div className="flex overflow-hidden mt-12" data-oid="h4svf1t">
            <div className="flex animate-scroll gap-6" data-oid="lvf.yfk">
              {[...Array(16)].map((_, i) =>
              <div
                key={i}
                className="flex-shrink-0 w-48 h-32 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center"
                data-oid="slzywmh">

                  <span className="text-4xl opacity-50" data-oid="xig:vof">
                    ⭐
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6" data-oid="hxrgo.4">
        <div className="max-w-7xl mx-auto" data-oid="4mz:h7i">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid="1:g9cbm">

            <p
              className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider"
              data-oid="0gjbkl.">

              Testimonials
            </p>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              data-oid="ne27voi">

              Hear what others say about us
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="hc9kbn:">

              See what businesses say after switching to a smarter review
              management platform.
            </p>
          </div>

          <div className="flex overflow-hidden" data-oid="jqcpg40">
            <div className="flex animate-scroll gap-6" data-oid="-z.d3f5">
              {[...Array(10)].map((_, i) =>
              <div
                key={i}
                className="flex-shrink-0 w-96 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
                data-oid="hgb:uhx">

                  <div className="flex gap-1 mb-4" data-oid="otwnti7">
                    {[...Array(5)].map((_, j) =>
                  <span
                    key={j}
                    className="text-yellow-400"
                    data-oid="fhiz4wh">

                        ★
                      </span>
                  )}
                  </div>
                  <p
                  className="text-gray-700 mb-6 leading-relaxed"
                  data-oid="tva5pth">

                    "We used this platform to manage reviews across 12 locations
                    and our average rating jumped from 4.2 to 4.7 in just 3
                    months. Game changer!"
                  </p>
                  <div className="flex items-center gap-3" data-oid="zr1eqb4">
                    <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600"
                    data-oid="j29zotk" />

                    <div data-oid="u_9u-tr">
                      <p
                      className="font-semibold text-gray-900"
                      data-oid="8zecloz">

                        Sarah Johnson
                      </p>
                      <p className="text-sm text-gray-500" data-oid="tfbny10">
                        Restaurant Owner
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-24 px-6 bg-gray-50"
        data-oid="mc9l.ss">

        <div className="max-w-7xl mx-auto" data-oid="rgywd.m">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid="hfd2pry">

            <p
              className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider"
              data-oid="hwezeu:">

              Our Pricing
            </p>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              data-oid="wcdxty7">

              Choose the best Plan that suites you
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              data-oid="5l7ixdg">

              Flexible pricing built for every stage — from startup to scale, no
              hidden fees.
            </p>

            {/* Toggle */}
            <div
              className="inline-flex items-center gap-4 bg-white rounded-full p-2 border border-gray-200"
              data-oid="c_49cnx">

              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                billingPeriod === "monthly" ?
                "bg-gray-900 text-white" :
                "text-gray-600"}`
                }
                data-oid="7jljb95">

                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annually")}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                billingPeriod === "annually" ?
                "bg-gray-900 text-white" :
                "text-gray-600"}`
                }
                data-oid="8.2hvsh">

                Annually
              </button>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="uh_idox">

            {/* Starter */}
            <div
              className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              data-oid="pnk5y.7">

              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                data-oid="om0.8jg">

                Starter
              </h3>
              <div className="mb-6" data-oid="-m0oc3o">
                <span
                  className="text-5xl font-bold text-gray-900"
                  data-oid="6:3kii1">

                  ${billingPeriod === "monthly" ? "39" : "29"}
                </span>
                <span className="text-gray-500" data-oid="jmi7_4t">
                  /month
                </span>
              </div>
              <p className="text-gray-600 mb-6" data-oid="8.xpqs3">
                Great for small businesses getting started.
              </p>
              <ul className="space-y-3 mb-8" data-oid="x48_yha">
                <li className="flex items-start gap-2" data-oid="4k2-zdh">
                  <span className="text-green-500 mt-1" data-oid="l-02bgc">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="k.tyqgd">
                    Up to 3 locations
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="917ua2t">
                  <span className="text-green-500 mt-1" data-oid="-axzu::">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="cz2w-pu">
                    Core review management
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="3g3avt5">
                  <span className="text-green-500 mt-1" data-oid="0t:_2ui">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="oeshx61">
                    Basic analytics
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="d02zeib">
                  <span className="text-green-500 mt-1" data-oid="a3wzens">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="pi5chxj">
                    Email support
                  </span>
                </li>
              </ul>
              <button
                className="w-full px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all hover:scale-105 duration-300"
                data-oid="5uy4xmc">

                Get Started
              </button>
            </div>

            {/* Growth */}
            <div
              className="bg-gray-900 text-white rounded-3xl border-4 border-blue-500 p-8 relative transform scale-105 shadow-2xl hover:scale-110 transition-transform duration-300"
              data-oid="cpa99-q">

              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse"
                data-oid="h90hu.t">

                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2" data-oid="t1tf.4.">
                Growth
              </h3>
              <div className="mb-6" data-oid="bjy3leh">
                <span className="text-5xl font-bold" data-oid="0w:qgrg">
                  ${billingPeriod === "monthly" ? "99" : "79"}
                </span>
                <span className="text-gray-400" data-oid="eobvb17">
                  /month
                </span>
              </div>
              <p className="text-gray-300 mb-6" data-oid="5eq4yam">
                For growing businesses who are scaling.
              </p>
              <ul className="space-y-3 mb-8" data-oid="yt42ozw">
                <li className="flex items-start gap-2" data-oid="is.a:i8">
                  <span className="text-green-400 mt-1" data-oid="3vh2cld">
                    ✓
                  </span>
                  <span className="text-gray-200" data-oid="ibbfiur">
                    Everything in Starter
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="offiym-">
                  <span className="text-green-400 mt-1" data-oid="00rq4j-">
                    ✓
                  </span>
                  <span className="text-gray-200" data-oid="8te5zzw">
                    Up to 15 locations
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="lydmpqc">
                  <span className="text-green-400 mt-1" data-oid="22g6wdu">
                    ✓
                  </span>
                  <span className="text-gray-200" data-oid="1.a79xm">
                    AI response generator
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="0h52rqn">
                  <span className="text-green-400 mt-1" data-oid="5tx-.8w">
                    ✓
                  </span>
                  <span className="text-gray-200" data-oid="ajttmv5">
                    Advanced analytics
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid=":32mrj4">
                  <span className="text-green-400 mt-1" data-oid="46sqgnj">
                    ✓
                  </span>
                  <span className="text-gray-200" data-oid="owudxkj">
                    Team collaboration
                  </span>
                </li>
              </ul>
              <button
                className="w-full px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 duration-300"
                data-oid="pdmgcl9">

                Get Started
              </button>
            </div>

            {/* Premium */}
            <div
              className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              data-oid="73s-_ep">

              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                data-oid=".5whea9">

                Premium
              </h3>
              <div className="mb-6" data-oid="rxes2ku">
                <span
                  className="text-5xl font-bold text-gray-900"
                  data-oid="rvp2_yg">

                  ${billingPeriod === "monthly" ? "299" : "249"}
                </span>
                <span className="text-gray-500" data-oid="jui_ca0">
                  /month
                </span>
              </div>
              <p className="text-gray-600 mb-6" data-oid=":rq7rbg">
                Great for enterprises to scale reputation.
              </p>
              <ul className="space-y-3 mb-8" data-oid="tta0.pg">
                <li className="flex items-start gap-2" data-oid="ejqnx3e">
                  <span className="text-green-500 mt-1" data-oid="sjxlzsx">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="l6:9efp">
                    Everything in Growth
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="q85djba">
                  <span className="text-green-500 mt-1" data-oid="d0yxcn3">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="snsy.l9">
                    Unlimited locations
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="2ibodn9">
                  <span className="text-green-500 mt-1" data-oid="9obkwm3">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="5ypnwfe">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="h:wdxql">
                  <span className="text-green-500 mt-1" data-oid="iyscg0x">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="7u74w4d">
                    SLA & compliance support
                  </span>
                </li>
                <li className="flex items-start gap-2" data-oid="csxb9c:">
                  <span className="text-green-500 mt-1" data-oid="eblx7e1">
                    ✓
                  </span>
                  <span className="text-gray-600" data-oid="wuo70ii">
                    Advanced integrations
                  </span>
                </li>
              </ul>
              <button
                className="w-full px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all hover:scale-105 duration-300"
                data-oid="i05.rp:">

                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6" data-oid="3si9.ky">
        <div className="max-w-7xl mx-auto" data-oid="y5bm5z7">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid="c30ab5y">

            <p
              className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider"
              data-oid="xieww37">

              Why ReviewHub
            </p>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              data-oid="3nn203d">

              A smarter way to manage reviews
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="tv537x-">

              Turn scattered feedback into clear insights that help you make
              better decisions, faster.
            </p>
          </div>

          <div
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
            data-oid="g7gynsw">

            <div
              className="grid grid-cols-2 divide-x divide-gray-200"
              data-oid="1j::r5o">

              <div className="p-8" data-oid="yb7vf-o">
                <h3
                  className="text-2xl font-bold text-gray-400 mb-6"
                  data-oid="qej:l7w">

                  Other Tools
                </h3>
                <ul className="space-y-4" data-oid="ffenstk">
                  <li className="flex items-start gap-3" data-oid="08._o6w">
                    <span className="text-red-500 mt-1" data-oid="13bb7lb">
                      ✗
                    </span>
                    <span className="text-gray-600" data-oid="q772s2l">
                      Reviews live in too many places
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="zsonact">
                    <span className="text-red-500 mt-1" data-oid="yg04r6p">
                      ✗
                    </span>
                    <span className="text-gray-600" data-oid=".1n5joj">
                      Responding takes hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="spwu7am">
                    <span className="text-red-500 mt-1" data-oid="47wme-p">
                      ✗
                    </span>
                    <span className="text-gray-600" data-oid="v2-t.u:">
                      Insights are too generic
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="sq75l6t">
                    <span className="text-red-500 mt-1" data-oid="iyzurpj">
                      ✗
                    </span>
                    <span className="text-gray-600" data-oid="hgu8o0h">
                      No smart guidance for responses
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="9n3n51r">
                    <span className="text-red-500 mt-1" data-oid="9g5.i32">
                      ✗
                    </span>
                    <span className="text-gray-600" data-oid="j-:qy_e">
                      Hard to see what's improving
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="p-8 bg-gradient-to-br from-blue-50 to-purple-50"
                data-oid="l:ir9tr">

                <h3
                  className="text-2xl font-bold text-gray-900 mb-6"
                  data-oid="isz.68k">

                  ReviewHub
                </h3>
                <ul className="space-y-4" data-oid="nucljm_">
                  <li className="flex items-start gap-3" data-oid="vo1d8w8">
                    <span className="text-green-500 mt-1" data-oid="sqmo2hj">
                      ✓
                    </span>
                    <span
                      className="text-gray-900 font-medium"
                      data-oid="-f07:86">

                      All your reviews, one platform
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="m.v6p3o">
                    <span className="text-green-500 mt-1" data-oid="nwjem83">
                      ✓
                    </span>
                    <span
                      className="text-gray-900 font-medium"
                      data-oid="2l4_waz">

                      Responses generate instantly with AI
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="0-_eitv">
                    <span className="text-green-500 mt-1" data-oid="aia2uh8">
                      ✓
                    </span>
                    <span
                      className="text-gray-900 font-medium"
                      data-oid="wekc_n-">

                      Insights tailored to your business
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="ui9x9i-">
                    <span className="text-green-500 mt-1" data-oid="80xp:6b">
                      ✓
                    </span>
                    <span
                      className="text-gray-900 font-medium"
                      data-oid="xn:1hur">

                      AI suggests your next response
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-oid="tqs4r2y">
                    <span className="text-green-500 mt-1" data-oid="7wtzaf:">
                      ✓
                    </span>
                    <span
                      className="text-gray-900 font-medium"
                      data-oid="0t6m4l:">

                      Clear path to consistent growth
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-gray-50" data-oid="86ngkp.">
        <div className="max-w-4xl mx-auto" data-oid="qjuc88.">
          <div
            className="text-center mb-16 scroll-reveal opacity-0"
            data-oid="r64782:">

            <p
              className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider"
              data-oid="pg1po:s">

              FAQ's
            </p>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              data-oid="_:8nz57">

              Common questions with Clear answers
            </h2>
            <p className="text-xl text-gray-600" data-oid="6sv4eum">
              Here are answers to the most common things people ask before
              getting started.
            </p>
          </div>

          <div className="space-y-4" data-oid="arxttt0">
            {[
            {
              question:
              "How does the platform collect reviews from different sources?",
              answer:
              "We automatically sync with all major review platforms including Google, Yelp, Facebook, TripAdvisor, and more. Once connected, reviews flow into your dashboard in real-time."
            },
            {
              question: "Do I need technical skills to use ReviewHub?",
              answer:
              "Not at all! Our platform is designed to be intuitive and user-friendly. You can set up integrations and start managing reviews within minutes, no technical knowledge required."
            },
            {
              question: "Can ReviewHub integrate with tools we already use?",
              answer:
              "Yes! We integrate with popular CRMs, communication tools, and business software. Check our integrations page for a complete list of supported platforms."
            },
            {
              question: "Is my data secure on ReviewHub?",
              answer:
              "Absolutely. We use enterprise-grade encryption, secure data centers, and comply with all major data protection regulations including GDPR and CCPA."
            },
            {
              question: "Can I try ReviewHub before committing?",
              answer:
              "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial."
            }].
            map((faq, i) =>
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              data-oid="7_eur3c">

                <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                data-oid="lwv4pc:">

                  <span
                  className="text-lg font-semibold text-gray-900"
                  data-oid="oc.o-sv">

                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-400" data-oid="wu1ihvt">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i &&
              <div className="px-8 pb-6" data-oid="d3s0gks">
                    <p
                  className="text-gray-600 leading-relaxed"
                  data-oid="eoh:amh">

                      {faq.answer}
                    </p>
                  </div>
              }
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        data-oid="lakbj3-">

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
          data-oid="87bn.v6" />

        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"
          data-oid="_:i7zgw" />


        <div
          className="max-w-4xl mx-auto text-center relative z-10"
          data-oid="njff0_2">

          <div className="text-7xl mb-6" data-oid="h8wcp-t">
            ✉️
          </div>
          <h2 className="text-5xl font-bold text-white mb-4" data-oid="i5460av">
            Subscribe to the ReviewHub Newsletter!
          </h2>
          <p className="text-xl text-white/90 mb-8" data-oid="za2pm8x">
            Get expert tips, updates, and smart review management insights
            delivered straight to your inbox.
          </p>
          <button
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            data-oid="r8gmf9v">

            Subscribe Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white" data-oid="wb4g1b8">
        <div className="max-w-7xl mx-auto text-center" data-oid="qw9g4gh">
          <p className="text-gray-400" data-oid="zkvlc70">
            © 2024 ReviewHub. Built with Next.js and TailwindCSS.
          </p>
        </div>
      </footer>

      <style jsx data-oid="ii38te2">{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .group:hover .group-hover-scale {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>);

}