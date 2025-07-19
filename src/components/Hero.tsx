'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Phone, Star, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-green-600 font-semibold">Professional Pest Control</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Protect Your Home with
                <span className="text-green-600 block">GreenShield</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Safe, effective, and eco-friendly pest control solutions for your home and business. 
                Licensed professionals with 15+ years of experience.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Licensed & Insured',
                '24/7 Emergency Service',
                'Eco-Friendly Solutions',
                '100% Satisfaction Guarantee'
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Get Free Inspection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">4.9/5 (500+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Card */}
          <div className="relative">
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-12 w-12 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Free Pest Inspection
                    </h3>
                    <p className="text-gray-600">
                      Get a comprehensive assessment of your property and customized treatment plan.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-left space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Assessment</span>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Treatment Plan</span>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost Estimate</span>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Schedule Inspection
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-sm font-bold text-gray-900">FREE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}