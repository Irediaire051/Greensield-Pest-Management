'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function LatestNews() {
  const articles = [
    {
      id: 1,
      title: 'Spring Pest Prevention: Preparing Your Home for Warmer Weather',
      excerpt: 'Learn essential tips to prevent common spring pests from invading your home as temperatures rise.',
      category: 'Prevention Tips',
      author: 'Dr. Sarah Mitchell',
      date: '2024-03-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      featured: true
    },
    {
      id: 2,
      title: 'Eco-Friendly Pest Control: Safe Solutions for Your Family',
      excerpt: 'Discover how modern pest control methods can be both effective and environmentally responsible.',
      category: 'Green Solutions',
      author: 'Mike Rodriguez',
      date: '2024-03-10',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      featured: false
    },
    {
      id: 3,
      title: 'Termite Season Alert: Early Detection Signs Every Homeowner Should Know',
      excerpt: 'Identify the warning signs of termite activity before they cause significant damage to your property.',
      category: 'Termite Control',
      author: 'Jennifer Lee',
      date: '2024-03-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      featured: false
    },
    {
      id: 4,
      title: 'Commercial Pest Control: Protecting Your Business Reputation',
      excerpt: 'Why professional pest management is crucial for maintaining your business image and compliance.',
      category: 'Commercial',
      author: 'David Chen',
      date: '2024-03-05',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      featured: false
    }
  ];

  const categories = [
    'All Articles',
    'Prevention Tips',
    'Green Solutions',
    'Termite Control',
    'Commercial',
    'Seasonal Advice'
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest pest control insights, seasonal tips, and industry news 
            from our team of experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map((article) => (
          <Card key={article.id} className="mb-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge variant="secondary">{article.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-green-600 hover:bg-green-700">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.filter(article => !article.featured).map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {article.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight hover:text-green-600 transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {formatDate(article.date)}
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-green-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Pest Control Tips
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for seasonal pest prevention tips, 
            exclusive offers, and the latest industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}