import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Onboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-teal-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>Dynamic Lecture Analyzer</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            style={{
              color: 'var(--color-textSecondary)',
              backgroundColor: 'var(--color-bgSecondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg hover:shadow-teal-500/25"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 px-6 md:px-8 pt-12 pb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ color: 'var(--color-text)' }}>
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                    Dynamic Lecture Analyzer
                  </span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--color-textSecondary)' }}>
                  Transform lectures into intelligent insights using AI-powered summaries, quizzes, speech analysis, and smart learning recommendations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-xl hover:shadow-teal-500/30 flex items-center justify-center"
                >
                  Get Started Free
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <button className="group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center" style={{
                  backgroundColor: 'var(--color-bgSecondary)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13m-3 3h3m-3-3v3m0-3H9m3 3H9" />
                  </svg>
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-gray-800 flex items-center justify-center text-xs font-bold text-white">+2k</div>
                </div>
                <p className="text-sm" style={{ color: 'var(--color-textMuted)' }}>
                  Trusted by 2,000+ students and educators worldwide
                </p>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{
                backgroundColor: 'var(--color-bgSecondary)',
                border: '1px solid var(--color-border)',
                backdropFilter: 'blur(20px)'
              }}>
                {/* Mock Dashboard Header */}
                <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold" style={{ color: 'var(--color-text)' }}>AI Lecture Analysis</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>

                {/* Mock Dashboard Content */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--color-bgTertiary)' }}>
                      <p className="text-sm font-medium" style={{ color: 'var(--color-textMuted)' }}>Lectures Processed</p>
                      <p className="text-2xl font-bold text-teal-400">247</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--color-bgTertiary)' }}>
                      <p className="text-sm font-medium" style={{ color: 'var(--color-textMuted)' }}>MCQs Generated</p>
                      <p className="text-2xl font-bold text-orange-400">1,847</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--color-bgTertiary)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>AI Summary</p>
                      <span className="px-2 py-1 rounded-full text-xs bg-teal-500/20 text-teal-400">Complete</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 rounded-lg text-center" style={{ backgroundColor: 'var(--color-bgTertiary)' }}>
                      <p className="text-xs" style={{ color: 'var(--color-textMuted)' }}>Topics</p>
                      <p className="text-lg font-bold text-blue-400">12</p>
                    </div>
                    <div className="p-3 rounded-lg text-center" style={{ backgroundColor: 'var(--color-bgTertiary)' }}>
                      <p className="text-xs" style={{ color: 'var(--color-textMuted)' }}>Keywords</p>
                      <p className="text-lg font-bold text-purple-400">28</p>
                    </div>
                    <div className="p-3 rounded-lg text-center" style={{ backgroundColor: 'var(--color-bgTertiary)' }}>
                      <p className="text-xs" style={{ color: 'var(--color-textMuted)' }}>Questions</p>
                      <p className="text-lg font-bold text-green-400">45</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--color-text)' }}>
              AI-Powered Features
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-textSecondary)' }}>
              Experience next-generation lecture analysis with our comprehensive AI toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: 'AI Lecture Summary',
                description: 'Generate intelligent summaries that capture key concepts and main ideas from any lecture content.'
              },
              {
                icon: '🧠',
                title: 'Smart MCQ Generator',
                description: 'Create challenging multiple-choice questions automatically with AI-powered difficulty assessment.'
              },
              {
                icon: '🎤',
                title: 'Speech & Sentiment Analysis',
                description: 'Analyze speech patterns, tone, and sentiment to understand lecture delivery effectiveness.'
              },
              {
                icon: '💬',
                title: 'AI Question Answering',
                description: 'Get instant answers to complex questions about lecture content with contextual understanding.'
              },
              {
                icon: '🎯',
                title: 'Learning Recommendations',
                description: 'Receive personalized study recommendations based on your learning patterns and progress.'
              },
              {
                icon: '📊',
                title: 'Analytics Dashboard',
                description: 'Track your learning progress with detailed analytics and performance insights.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  backgroundColor: 'var(--color-bgSecondary)',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>{feature.title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-textSecondary)' }}>{feature.description}</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 px-6 md:px-8 py-24" style={{ backgroundColor: 'var(--color-bgSecondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--color-text)' }}>
              How It Works
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-textSecondary)' }}>
              Transform your lectures into actionable insights in just a few simple steps
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: '01',
                  title: 'Upload or Record',
                  description: 'Upload lecture notes, PDFs, or record audio directly in the app.',
                  icon: '📤'
                },
                {
                  step: '02',
                  title: 'AI Processing',
                  description: 'Our AI analyzes content, extracts key information, and processes speech.',
                  icon: '⚡'
                },
                {
                  step: '03',
                  title: 'Generate Insights',
                  description: 'Receive summaries, topics, keywords, and actionable recommendations.',
                  icon: '🧠'
                },
                {
                  step: '04',
                  title: 'Practice & Learn',
                  description: 'Test your knowledge with AI-generated MCQs and practice questions.',
                  icon: '🎯'
                },
                {
                  step: '05',
                  title: 'Track Progress',
                  description: 'Monitor your learning journey with detailed analytics and insights.',
                  icon: '📈'
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>{step.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-textSecondary)' }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="relative z-10 px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--color-text)' }}>
              Advanced AI Capabilities
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-textSecondary)' }}>
              Powered by cutting-edge AI technologies for unparalleled lecture analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Natural Language Processing',
                description: 'Advanced NLP algorithms understand context, intent, and complex relationships in lecture content.',
                icon: '🗣️',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Speech Recognition',
                description: 'State-of-the-art speech-to-text with speaker diarization and noise filtering capabilities.',
                icon: '🎙️',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Contextual Understanding',
                description: 'Deep learning models that understand subject matter context and educational objectives.',
                icon: '🎓',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Smart Recommendations',
                description: 'AI-driven suggestions for study materials, practice questions, and learning paths.',
                icon: '💡',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                title: 'Sentiment Analysis',
                description: 'Analyze emotional tone and engagement levels in both content and delivery.',
                icon: '😊',
                color: 'from-pink-500 to-pink-600'
              },
              {
                title: 'Neural Processing',
                description: 'Multi-layer neural networks process complex patterns and generate intelligent insights.',
                icon: '🧠',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((capability, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl transition-all duration-500 hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-bgSecondary)',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>{capability.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-textSecondary)' }}>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 md:px-8 py-24" style={{ backgroundColor: 'var(--color-bgSecondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--color-text)' }}>
              Why Choose Dynamic Lecture Analyzer?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-textSecondary)' }}>
              Join thousands of students and educators who have transformed their learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Faster Revision',
                description: 'Reduce study time by 60% with AI-generated summaries and key points.',
                icon: '⚡',
                stat: '60%'
              },
              {
                title: 'Better Retention',
                description: 'Improve information retention with personalized learning recommendations.',
                icon: '🎯',
                stat: '85%'
              },
              {
                title: 'Smarter Learning',
                description: 'AI-powered insights help you focus on what matters most for your goals.',
                icon: '🧠',
                stat: '2x'
              },
              {
                title: 'Automated Notes',
                description: 'Never miss important details with comprehensive AI-generated notes.',
                icon: '📝',
                stat: '100%'
              },
              {
                title: 'AI Understanding',
                description: 'Deep comprehension of complex topics through advanced AI analysis.',
                icon: '🤖',
                stat: '95%'
              },
              {
                title: 'Productivity Boost',
                description: 'Save hours weekly with automated lecture processing and insights.',
                icon: '🚀',
                stat: '10hrs'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl transition-all duration-500 hover:scale-105 text-center"
                style={{
                  backgroundColor: 'var(--color-bgTertiary)',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <div className="text-3xl font-black text-teal-400 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>{benefit.title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-textSecondary)' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="p-12 md:p-16 rounded-3xl relative overflow-hidden"
            style={{
              backgroundColor: 'var(--color-bgSecondary)',
              border: '1px solid var(--color-border)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 32px 64px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-orange-500/10"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: 'var(--color-text)' }}>
                Start Your AI Learning Journey
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-textSecondary)' }}>
                Experience next-generation lecture intelligence powered by AI. Join thousands of learners already transforming their education.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/signup"
                  className="group px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-xl hover:shadow-teal-500/30 flex items-center justify-center"
                >
                  Launch Dashboard
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/signin"
                  className="group px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--color-bgTertiary)',
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  Sign In to Account
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm" style={{ color: 'var(--color-textMuted)' }}>
                <span>✓ Free to start</span>
                <span>✓ No credit card required</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-8 py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="font-bold" style={{ color: 'var(--color-text)' }}>Dynamic Lecture Analyzer</span>
            </div>
            <div className="flex items-center space-x-6 text-sm" style={{ color: 'var(--color-textMuted)' }}>
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Support</a>
              <span>© 2024 Dynamic Lecture Analyzer</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
