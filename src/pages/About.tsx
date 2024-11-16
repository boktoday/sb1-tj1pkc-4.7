import React from 'react';
import { Music2, Award, Mic2, Headphones } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
            alt="Music Studio"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Music2 className="h-16 w-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Transforming businesses through the power of music
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Watch Our Story</h2>
            <p className="text-xl text-gray-600">
              See how we're revolutionizing business communication through music
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://youtu.be/B9H91H64U_s"
              title="About The Business of Song"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Brendan O'Keefe</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over three decades of experience in artificaial intelligence, multimedia, music production, marketing and Information technology, 
                  Brendan O'Keefe founded The Business of Song with a vision to revolutionize 
                  business communication through the power of music.
                </p>
                <p>
                  Having worked with large multinational companies and startups alike, Brendan discovered 
                  that music could bridge the gap between traditional corporate communication and 
                  genuine human connection. This is his passion and it shows in his work.
                </p>
                <p>
                  His unique approach combines behavioral psychology, neuroscience, marketing and musical 
                  expertise to create custom songs that drive engagement, retention, and results 
                  for businesses worldwide.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Award className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">30+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Mic2 className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Songs Created</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Headphones className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">40+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://envokesong.com/demos/1715338646352.jpg"
                alt="Brendan O'Keefe"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's create something unique together that resonates with your team and customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request"
              className="px-8 py-3 bg-purple-500 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};