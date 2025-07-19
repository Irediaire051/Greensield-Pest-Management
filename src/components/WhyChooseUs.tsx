'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Clock, 
  Leaf, 
  Users, 
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed pest control professionals with comprehensive insurance coverage for your peace of mind.',
      highlight: 'State Licensed'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Over a decade of experience in pest control with thousands of satisfied customers.',
      highlight: 'Proven Track Record'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency pest control services available when you need us most.',
      highlight: 'Always Available'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      description: 'Safe, environmentally responsible pest control methods that protect your family and pets.',
      highlight: 'Green Certified'
    },
    {
      icon: Users,
      title: 'Expert Technicians',
      description: 'Highly trained and certified pest control specialists with ongoing education and training.',
      highlight: 'Certified Professionals'
    },
    {
      icon: Star,
      title: '100% Satisfaction Guarantee',
      description: 'We stand behind our work with a complete satisfaction guarantee on all services.',
      highlight: 'Money Back Guarantee'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const certifications = [
    'EPA Certified',
    'State Licensed',
    'Insured & Bonded',
    'BBB A+ Rating',
    'Green Pro Certified',
    'NPMA Member'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose GreenShield?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another pest control company. We're your trusted partners in creating 
            a safe, pest-free environment for your family and business.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {reason.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {reason.highlight}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted & Certified
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence is backed by industry certifications and 
                memberships that ensure we meet the highest standards of service and safety.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 rating from 500+ customers</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 mb-6">
                  Call us now for a free consultation and quote. Our experts are standing by to help.
                </p>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-green-600">
                    (555) 123-4567
                  </div>
                  <div className="text-sm text-gray-500">
                    Available 24/7 for emergencies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}