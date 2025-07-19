'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bug, 
  Home, 
  Building, 
  Zap, 
  Shield, 
  Leaf,
  Clock,
  Award
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Bug,
      title: 'General Pest Control',
      description: 'Comprehensive treatment for ants, spiders, cockroaches, and other common pests.',
      features: ['Monthly treatments', 'Interior & exterior', 'Pet-safe options'],
      price: 'Starting at $89/month',
      popular: false
    },
    {
      icon: Home,
      title: 'Termite Protection',
      description: 'Advanced termite detection, treatment, and prevention systems.',
      features: ['Annual inspections', 'Baiting systems', 'Damage warranty'],
      price: 'Starting at $299',
      popular: true
    },
    {
      icon: Zap,
      title: 'Rodent Control',
      description: 'Effective mouse and rat elimination with exclusion services.',
      features: ['Humane removal', 'Entry point sealing', 'Ongoing monitoring'],
      price: 'Starting at $149',
      popular: false
    },
    {
      icon: Building,
      title: 'Commercial Services',
      description: 'Customized pest management for businesses and commercial properties.',
      features: ['Regular inspections', 'Documentation', 'Emergency response'],
      price: 'Custom pricing',
      popular: false
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Safe, environmentally responsible pest control methods.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency pest control services available.'
    },
    {
      icon: Award,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction guarantee on all our pest control services.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Pest Control Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pest control solutions tailored to your specific needs. 
            From residential homes to commercial properties, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`relative transition-all duration-300 hover:shadow-lg ${
                service.popular ? 'ring-2 ring-green-500 shadow-lg' : ''
              }`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-lg font-semibold text-green-600 mb-3">
                      {service.price}
                    </p>
                    <Button 
                      className={`w-full ${
                        service.popular 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose GreenShield?
            </h3>
            <p className="text-lg text-gray-600">
              We're committed to providing the highest quality pest control services with exceptional customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}