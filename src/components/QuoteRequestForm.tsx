'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Phone, Mail, Home, Building, Clock } from 'lucide-react';

interface QuoteFormData {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Property Information
  propertyType: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertySize: string;
  
  // Service Information
  serviceType: string[];
  pestType: string;
  urgency: string;
  preferredDate: string;
  preferredTime: string;
  
  // Additional Information
  description: string;
  hasChildren: boolean;
  hasPets: boolean;
  previousTreatment: boolean;
  
  // Communication Preferences
  contactMethod: string;
  marketingConsent: boolean;
}

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    propertySize: '',
    serviceType: [],
    pestType: '',
    urgency: '',
    preferredDate: '',
    preferredTime: '',
    description: '',
    hasChildren: false,
    hasPets: false,
    previousTreatment: false,
    contactMethod: '',
    marketingConsent: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  const serviceTypes = [
    'General Pest Control',
    'Termite Treatment',
    'Rodent Control',
    'Bed Bug Treatment',
    'Ant Control',
    'Spider Control',
    'Cockroach Control',
    'Wasp/Bee Removal',
    'Wildlife Removal',
    'Preventive Treatment'
  ];

  const pestTypes = [
    'Ants',
    'Spiders',
    'Cockroaches',
    'Termites',
    'Rodents (Mice/Rats)',
    'Bed Bugs',
    'Fleas',
    'Wasps/Bees',
    'Flies',
    'Beetles',
    'Moths',
    'Silverfish',
    'Other/Unknown'
  ];

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceTypeChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      serviceType: checked 
        ? [...prev.serviceType, service]
        : prev.serviceType.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit form data to your backend
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        alert('Quote request submitted successfully! We\'ll contact you within 24 hours.');
        // Reset form or redirect
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Property Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="commercial">Commercial Building</SelectItem>
                      <SelectItem value="warehouse">Warehouse</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="office">Office Building</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="propertySize">Property Size</Label>
                  <Select onValueChange={(value) => handleInputChange('propertySize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (< 1,500 sq ft)</SelectItem>
                      <SelectItem value="medium">Medium (1,500 - 3,000 sq ft)</SelectItem>
                      <SelectItem value="large">Large (3,000 - 5,000 sq ft)</SelectItem>
                      <SelectItem value="extra-large">Extra Large (> 5,000 sq ft)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Requirements</h3>
              
              <div className="mb-6">
                <Label className="text-base font-medium mb-3 block">Services Needed *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceTypes.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.serviceType.includes(service)}
                        onCheckedChange={(checked) => 
                          handleServiceTypeChange(service, checked as boolean)
                        }
                      />
                      <Label htmlFor={service} className="text-sm">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="pestType">Primary Pest Concern</Label>
                <Select onValueChange={(value) => handleInputChange('pestType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the main pest you're dealing with" />
                  </SelectTrigger>
                  <SelectContent>
                    {pestTypes.map((pest) => (
                      <SelectItem key={pest} value={pest.toLowerCase()}>
                        {pest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Urgency Level *</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => handleInputChange('urgency', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="emergency" id="emergency" />
                    <Label htmlFor="emergency">
                      <Badge variant="destructive" className="mr-2">Emergency</Badge>
                      Immediate attention needed (within 24 hours)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="urgent" id="urgent" />
                    <Label htmlFor="urgent">
                      <Badge variant="secondary" className="mr-2">Urgent</Badge>
                      Within 2-3 days
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard">
                      <Badge variant="outline" className="mr-2">Standard</Badge>
                      Within a week
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">
                      <Badge variant="outline" className="mr-2">Flexible</Badge>
                      No rush, schedule when convenient
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Scheduling & Additional Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="description">Problem Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe your pest problem in detail. Include where you've seen pests, how long the problem has persisted, and any other relevant information."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Property Considerations</h4>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasChildren"
                    checked={formData.hasChildren}
                    onCheckedChange={(checked) => handleInputChange('hasChildren', checked)}
                  />
                  <Label htmlFor="hasChildren">
                    Children live in the property
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasPets"
                    checked={formData.hasPets}
                    onCheckedChange={(checked) => handleInputChange('hasPets', checked)}
                  />
                  <Label htmlFor="hasPets">
                    Pets live in the property
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="previousTreatment"
                    checked={formData.previousTreatment}
                    onCheckedChange={(checked) => handleInputChange('previousTreatment', checked)}
                  />
                  <Label htmlFor="previousTreatment">
                    Previous pest control treatment within the last 6 months
                  </Label>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Communication Preferences</h3>
              
              <div className="mb-6">
                <Label className="text-base font-medium mb-3 block">Preferred Contact Method *</Label>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(value) => handleInputChange('contactMethod', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-contact" />
                    <Label htmlFor="phone-contact" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-contact" />
                    <Label htmlFor="email-contact" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text-contact" />
                    <Label htmlFor="text-contact" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Text Message
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => handleInputChange('marketingConsent', checked)}
                  />
                  <Label htmlFor="marketingConsent" className="text-sm">
                    I would like to receive pest control tips, seasonal reminders, and special offers via email
                  </Label>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Quote Request Summary</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                  <div><strong>Property:</strong> {formData.propertyType} at {formData.address}</div>
                  <div><strong>Services:</strong> {formData.serviceType.join(', ') || 'Not specified'}</div>
                  <div><strong>Primary Pest:</strong> {formData.pestType || 'Not specified'}</div>
                  <div><strong>Urgency:</strong> {formData.urgency || 'Not specified'}</div>
                  <div><strong>Contact Method:</strong> {formData.contactMethod || 'Not specified'}</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Request a Free Quote</CardTitle>
        <CardDescription>
          Get a personalized quote for your pest control needs. Our experts will contact you within 24 hours.
        </CardDescription>
        
        {/* Progress Indicator */}
        <div className="flex items-center space-x-2 mt-4">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index + 1 <= currentStep 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div className={`w-12 h-1 mx-2 ${
                  index + 1 < currentStep ? 'bg-green-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}