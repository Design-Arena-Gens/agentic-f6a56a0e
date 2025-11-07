'use client'

import { useState } from 'react'
import {
  Menu, X, MapPin, Calendar, Users, Star, Mountain,
  Compass, Camera, Heart, Phone, Mail, Facebook,
  Twitter, Instagram, Youtube, ChevronRight, Search,
  Globe, Shield, Award, Sparkles
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const destinations = [
    {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      category: 'Heritage',
      description: 'Symbol of eternal love and architectural marvel',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      name: 'Kerala Backwaters',
      location: 'Kerala',
      category: 'Nature',
      description: 'Serene waterways through lush landscapes',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Rajasthan Palaces',
      location: 'Rajasthan',
      category: 'Royal',
      description: 'Majestic forts and colorful culture',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Ladakh Mountains',
      location: 'Ladakh',
      category: 'Adventure',
      description: 'Breathtaking high-altitude desert',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Goa Beaches',
      location: 'Goa',
      category: 'Beach',
      description: 'Golden sands and vibrant nightlife',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Varanasi Ghats',
      location: 'Varanasi, Uttar Pradesh',
      category: 'Spiritual',
      description: 'Ancient spiritual capital on sacred Ganges',
      gradient: 'from-amber-400 to-red-500'
    },
  ]

  const experiences = [
    {
      icon: Mountain,
      title: 'Adventure Tours',
      description: 'Trek through Himalayas and explore wilderness',
    },
    {
      icon: Compass,
      title: 'Cultural Heritage',
      description: 'Discover 5000 years of rich history',
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture stunning landscapes and culture',
    },
    {
      icon: Heart,
      title: 'Wellness Retreats',
      description: 'Yoga, Ayurveda and spiritual healing',
    },
  ]

  const stats = [
    { icon: MapPin, value: '500+', label: 'Destinations' },
    { icon: Users, value: '10M+', label: 'Happy Travelers' },
    { icon: Award, value: '50+', label: 'UNESCO Sites' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-india-orange animate-pulse" />
              <span className="text-2xl font-bold gradient-text">Incredible India</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-gray-700 hover:text-india-orange transition-colors font-medium">Destinations</a>
              <a href="#experiences" className="text-gray-700 hover:text-india-orange transition-colors font-medium">Experiences</a>
              <a href="#culture" className="text-gray-700 hover:text-india-orange transition-colors font-medium">Culture</a>
              <a href="#plan" className="text-gray-700 hover:text-india-orange transition-colors font-medium">Plan Trip</a>
              <button className="bg-gradient-to-r from-india-orange to-india-green text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Book Now
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#destinations" className="block py-2 text-gray-700 hover:text-india-orange">Destinations</a>
              <a href="#experiences" className="block py-2 text-gray-700 hover:text-india-orange">Experiences</a>
              <a href="#culture" className="block py-2 text-gray-700 hover:text-india-orange">Culture</a>
              <a href="#plan" className="block py-2 text-gray-700 hover:text-india-orange">Plan Trip</a>
              <button className="w-full bg-gradient-to-r from-india-orange to-india-green text-white px-6 py-2.5 rounded-full font-semibold">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover the
              <span className="block gradient-text">Incredible India</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the magic of diverse landscapes, rich heritage, vibrant cultures, and warm hospitality
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                  <MapPin className="w-5 h-5 text-india-orange" />
                  <input type="text" placeholder="Destination" className="outline-none w-full" />
                </div>
                <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                  <Calendar className="w-5 h-5 text-india-orange" />
                  <input type="text" placeholder="Check In" className="outline-none w-full" />
                </div>
                <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                  <Users className="w-5 h-5 text-india-orange" />
                  <input type="text" placeholder="Guests" className="outline-none w-full" />
                </div>
                <button className="bg-gradient-to-r from-india-orange to-india-green text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                  <stat.icon className="w-8 h-8 text-india-orange mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore <span className="gradient-text">Top Destinations</span>
            </h2>
            <p className="text-xl text-gray-600">Discover the most iconic places across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover-lift cursor-pointer">
                <div className={`h-96 bg-gradient-to-br ${destination.gradient} p-8 flex flex-col justify-end relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                  <div className="relative z-10">
                    <span className="bg-white/90 text-sm px-4 py-1.5 rounded-full font-semibold mb-3 inline-block">
                      {destination.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-white/90 flex items-center mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {destination.location}
                    </p>
                    <p className="text-white/80 mb-4">{destination.description}</p>
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center space-x-2 group-hover:scale-105">
                      <span>Explore</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unforgettable <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600">Choose your adventure and create lasting memories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-india-orange to-india-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <experience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-india-orange/10 to-india-green/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Immerse in <span className="gradient-text">Rich Culture</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                India is a land of incredible diversity with 22 official languages, countless festivals,
                ancient traditions, and a heritage spanning over 5000 years. From classical dance forms
                to vibrant street festivals, every corner of India tells a unique story.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-india-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700"><strong>Festivals:</strong> Diwali, Holi, Dussehra and hundreds more celebrated year-round</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-india-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700"><strong>Cuisine:</strong> From spicy curries to sweet delicacies, taste varies by region</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-india-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700"><strong>Arts:</strong> Classical music, dance, handicrafts and traditional arts flourish</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-india-orange to-india-green text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Learn More About Culture
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl h-64 hover-lift"></div>
              <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl h-64 hover-lift mt-12"></div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl h-64 hover-lift -mt-12"></div>
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl h-64 hover-lift"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose India Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">India</span>
            </h2>
            <p className="text-xl text-gray-600">Your journey to India promises unforgettable moments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 hover-lift">
              <Globe className="w-12 h-12 text-india-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Diverse Landscapes</h3>
              <p className="text-gray-600">From snow-capped mountains to tropical beaches, deserts to rainforests</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 hover-lift">
              <Shield className="w-12 h-12 text-india-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Safe & Welcoming</h3>
              <p className="text-gray-600">Experience warm Indian hospitality and world-class tourism infrastructure</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover-lift">
              <Award className="w-12 h-12 text-india-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Value for Money</h3>
              <p className="text-gray-600">Luxury experiences at affordable prices with excellent services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="plan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-india-orange via-india-green to-india-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore India?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start planning your incredible journey today. Our travel experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Plan Your Trip</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-india-orange" />
                <span className="text-2xl font-bold">Incredible India</span>
              </div>
              <p className="text-gray-400">
                Experience the magic of India with curated tours and authentic experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#experiences" className="text-gray-400 hover:text-white transition-colors">Experiences</a></li>
                <li><a href="#culture" className="text-gray-400 hover:text-white transition-colors">Culture</a></li>
                <li><a href="#plan" className="text-gray-400 hover:text-white transition-colors">Plan Trip</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Visa Information</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Tips</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>info@incredibleindia.com</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-india-orange transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-india-orange transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-india-orange transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-india-orange transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Incredible India. All rights reserved. Made with ❤️ for travelers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
