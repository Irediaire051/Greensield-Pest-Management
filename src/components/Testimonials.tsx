'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Homeowner, Springfield',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      service: 'Termite Treatment',
      text: 'GreenShield saved our home from a serious termite problem. Their team was professional, thorough, and the treatment was completely effective. We\'ve been pest-free for over a year now!',
      verified: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'Restaurant Owner, Downtown',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      service: 'Commercial Pest Control',
      text: 'As a restaurant owner, pest control is critical for our business. GreenShield provides reliable, discreet service that keeps our establishment clean and compliant. Highly recommended!',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Property Manager, Oakville',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      service: 'Rodent Control',
      text: 'Managing multiple properties means dealing with various pest issues. GreenShield\'s comprehensive approach and quick response times make them our go-to pest control partner.',
      verified: true
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Homeowner, Riverside',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      service: 'General Pest Control',
      text: 'We\'ve been using GreenShield for 3 years now. Their monthly service keeps our home completely pest-free, and their technicians are always friendly and professional.',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Park',
      location: 'Office Manager, Tech District',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      service: 'Office Pest Control',
      text: 'Our office building had an ant problem that was affecting employee morale. GreenShield eliminated the issue quickly and discreetly. No more unwanted visitors in our break room!',
      verified: true
    },
    {
      id: 6,
      name: 'Robert Martinez',
      location: 'Warehouse Manager, Industrial Park',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      service: 'Industrial Pest Control',
      text: 'GreenShield handles pest control for our large warehouse facility. Their systematic approach and detailed reporting help us maintain compliance with industry standards.',
      verified: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Customer Retention' },
    { number: '24hr', label: 'Response Time' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about 
            their experience with GreenShield Pest Management.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Service Badge */}
                <Badge variant="secondary" className="mb-4">
                  {testimonial.service}
                </Badge>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Satisfied Customers
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the GreenShield difference for yourself. Get a free inspection 
            and see why we're the trusted choice for pest control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Inspection
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}