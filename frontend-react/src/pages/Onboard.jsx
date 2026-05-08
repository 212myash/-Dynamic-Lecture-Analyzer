import React from 'react'
import { Link } from 'react-router-dom'

export function Onboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dynamic Lecture Analyzer</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A smart lecture assistant that analyzes class lectures, generates summaries, topics, MCQs, and actionable insights from text or audio input.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              to="/signin"
              className="inline-block px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-lg"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="inline-block px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition text-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">What it does</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Process lecture text or audio and create a concise summary.</li>
              <li>Extract key topics, keywords, action items, and speaker feedback.</li>
              <li>Generate quiz questions, practice prompts, and structured notes.</li>
              <li>Store lecture history for review and exportable reports.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to use it</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Sign up or sign in with your email or mobile number.</li>
              <li>Upload lecture notes or audio for analysis.</li>
              <li>Review summaries, topics, questions, and action plans.</li>
              <li>Use the dashboard to manage lecture history and export PDF reports.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why this project helps</h2>
            <p className="text-gray-700 leading-relaxed">
              Dynamic Lecture Analyzer is built to help students, educators, and professionals quickly understand lecture content and retain the most important ideas.
              It saves study time by converting long lecture material into useful learning resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
