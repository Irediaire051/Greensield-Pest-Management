'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Home, 
  Building2, 
  Factory, 
  Store,
  Bug,
  Rat,
  TreePine,
  Waves
} from 'lucide-react';

export default function ServiceCategories() {
  const categories = [
    {
      id: 'residential',
      title: 'Residential',
      icon: Home,
      description: 'Comprehensive pest control for homes and apartments',
      services: [
        {
          name: 'General Pest Control',
          description: 'Monthly treatments for common household pests',
          price: '$89/month'
        },
        {
          name: 'Termite Protection',
          description: 'Complete termite inspection and treatment',
          price: '$299'
        },
        {
          name: 'Rodent Control',
          description: 'Mouse and rat elimination services',
          price: '$149'
        },
        {
          name: 'Bed Bug Treatment',
          description: 'Specialized bed bug elimination',
          price: '$399'
        }
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial',
      icon: Building2,
      description: 'Professional pest management for businesses',
      services: [
        {
          name: 'Office Buildings',
          description: 'Regular pest control for office environments',
          price: 'Custom'
        },
        {
          name: 'Retail Stores',
          description: 'Discreet pest management for retail spaces',
          price: 'Custom'
        },
        {
          name: 'Warehouses',
          description: 'Large-scale pest control solutions',
          price: 'Custom'
        },
        {
          name: 'Healthcare Facilities',
          description: 'Specialized pest control for medical facilities',
          price: 'Custom'
        }
      ]
    },
    {
      id: 'industrial',
      title: 'Industrial',
      icon: Factory,
      description: 'Heavy-duty pest control for industrial facilities',
      services: [
        {
          name: 'Manufacturing Plants',
          description: 'Comprehensive pest management for production facilities',
          price: 'Custom'
        },
        {
          name: 'Food Processing',
          description: 'FDA-compliant pest control for food facilities',
          price: 'Custom'
        },
        {
          name: 'Chemical Plants',
          description: 'Specialized pest control for chemical facilities',
          price: 'Custom'
        },
        {
          name: 'Power Plants',
          description: 'Critical infrastructure pest management',
          price: 'Custom'
        }
      ]
    },
    {
      id: 'hospitality',
      title: 'Hospitality',
      icon: Store,
      description: 'Pest control for hotels, restaurants, and entertainment venues',
      services: [
        {
          name: 'Hotels & Motels',
          description: 'Discreet pest control for hospitality industry',
          price: 'Custom'
        },
        {
          name: 'Restaurants',
          description: 'Food service pest management solutions',
          price: 'Custom'
        },
        {
          name: 'Entertainment Venues',
          description: 'Pest control for theaters, clubs, and venues',
          price: 'Custom'
        },
        {
          name: 'Catering Services',
          description: 'Mobile pest management for catering',
          price: 'Custom'
        }
      ]
    }
  ];

  const pestTypes = [
    {
      id: 'insects',
      title: 'Insects',
      icon: Bug,
      pests: ['Ants', 'Cockroaches', 'Spiders', 'Beetles', 'Flies', 'Wasps', 'Bed Bugs', 'Fleas']
    },
    {
      id: 'rodents',
      title: 'Rodents',
      icon: Rat,
      pests: ['Mice', 'Rats', 'Squirrels', 'Chipmunks', 'Voles', 'Moles']
    },
    {
      id: 'wildlife',
      title: 'Wildlife',
      icon: TreePine,
      pests: ['Raccoons', 'Opossums', 'Skunks', 'Bats', 'Birds', 'Snakes']
    },
    {
      id: 'aquatic',
      title: 'Aquatic',
      icon: Waves,
      pests: ['Mosquitoes', 'Gnats', 'Midges', 'Drain Flies', 'Fruit Flies']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Service Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide specialized pest control solutions for every type of property and pest problem.
          </p>
        </div>

        {/* Service Categories Tabs */}
        <Tabs defaultValue="residential" className="mb-20">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  {category.title}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">{category.title} Pest Control</CardTitle>
                  <CardDescription className="text-lg">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.services.map((service, index) => (
                      <Card key={index} className="bg-white">
                        <CardHeader>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-green-600">
                              {service.price}
                            </span>
                            <Button size="sm">Get Quote</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Pest Types Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pests We Control
            </h3>
            <p className="text-lg text-gray-600">
              Our experienced team can handle any pest problem, big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pestTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.pests.map((pest, index) => (
                        <div key={index} className="text-sm text-gray-600 bg-gray-50 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                          {pest}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}