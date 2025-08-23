
import { useMemo, useState, useEffect } from "react";

import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import './index.css';

const AppPlayground = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Your Brand
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Design Token
              <span className="block text-blue-600 dark:text-blue-400">Framework</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              A modular system for consistent design across your application with contemporary animations and dark mode support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </section>

          {/* Button Showcase */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Button Variants
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Primary Buttons</h3>
                <div className="space-y-3">
                  <Button variant="primary" size="sm" className="w-full">Small</Button>
                  <Button variant="primary" size="md" className="w-full">Medium</Button>
                  <Button variant="primary" size="lg" className="w-full">Large</Button>
                </div>
              </Card>

              <Card variant="elevated">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Secondary Buttons</h3>
                <div className="space-y-3">
                  <Button variant="secondary" size="sm" className="w-full">Small</Button>
                  <Button variant="secondary" size="md" className="w-full">Medium</Button>
                  <Button variant="secondary" size="lg" className="w-full">Large</Button>
                </div>
              </Card>

              <Card variant="minimal">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Outline Buttons</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full">Small</Button>
                  <Button variant="outline" size="md" className="w-full">Medium</Button>
                  <Button variant="outline" size="lg" className="w-full">Large</Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Card Showcase */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Card Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <h3 className="t-heading font-semibold text-gray-900 dark:text-white mb-3">Default Card</h3>
                <p className="t-body text-gray-600 dark:text-gray-400 mb-4">
                  Clean hover animation with subtle lift and gradient overlay effect.
                </p>
                <Button variant="primary" size="sm">Action</Button>
              </Card>

              <Card variant="elevated">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Elevated Card</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Enhanced shadow with rotation and warm gradient overlay.
                </p>
                <Button variant="secondary" size="sm">Action</Button>
              </Card>

              <Card variant="minimal">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Minimal Card</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Subtle design with left border accent on hover.
                </p>
                <Button variant="outline" size="sm">Action</Button>
              </Card>
            </div>
          </section>

          {/* Feature Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Framework Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Mobile First', desc: 'Responsive design from the ground up' },
                { title: 'Dark Mode', desc: 'Seamless light and dark theme support' },
                { title: 'Contemporary Animations', desc: 'Modern hover effects and transitions' },
                { title: 'Modular Design', desc: 'Reusable components and design tokens' }
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </Card>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};



export default  AppPlayground();