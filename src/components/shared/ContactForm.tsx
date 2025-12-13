'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContactFormProps } from '@/lib/types';
import { Clock } from 'lucide-react';
import LiveClock from './LiveClock';

// Zod validation schema for Say Hello
const sayHelloSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Bot detected'),
});

// Zod validation schema for Get a Quote
const getQuoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget'),
  source: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Bot detected'),
});

type SayHelloFormSchema = z.infer<typeof sayHelloSchema>;
type GetQuoteFormSchema = z.infer<typeof getQuoteSchema>;

export default function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [activeTab, setActiveTab] = useState<'hello' | 'quote'>('hello');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useState(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  });

  const {
    register: registerHello,
    handleSubmit: handleSubmitHello,
    formState: { errors: errorsHello },
    reset: resetHello,
  } = useForm<SayHelloFormSchema>({
    resolver: zodResolver(sayHelloSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      honeypot: '',
    },
  });

  const {
    register: registerQuote,
    handleSubmit: handleSubmitQuote,
    formState: { errors: errorsQuote },
    reset: resetQuote,
  } = useForm<GetQuoteFormSchema>({
    resolver: zodResolver(getQuoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      source: '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (data: SayHelloFormSchema | GetQuoteFormSchema) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, formType: activeTab }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Message sent successfully!',
        });
        if (activeTab === 'hello') {
          resetHello();
        } else {
          resetQuote();
        }
        onSuccess?.();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred. Please try again.';
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const errors = activeTab === 'hello' ? errorsHello : errorsQuote;
  const register = activeTab === 'hello' ? registerHello : registerQuote;
  const handleSubmit = activeTab === 'hello' ? handleSubmitHello : handleSubmitQuote;

  return (
    <div className="space-y-8">
      {/* Tabs and Clock Header */}
      <div className="flex items-center justify-between border-b border-gray-200">
        <div className="flex gap-8">
          <button
            type="button"
            onClick={() => setActiveTab('hello')}
            className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === 'hello'
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            SAY HELLO!
            {activeTab === 'hello' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quote')}
            className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === 'quote'
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            GET A QUOTE
            {activeTab === 'quote' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Clock */}
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4 text-primary" />

            <LiveClock />

          
          {/* </span> */}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field */}
        <input
          type="text"
          {...(activeTab === 'hello' ? registerHello('honeypot') : registerQuote('honeypot'))}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Common Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...(activeTab === 'hello' ? registerHello('name') : registerQuote('name'))}
              className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'
                } rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all`}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              {...(activeTab === 'hello' ? registerHello('email') : registerQuote('email'))}
              className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'
                } rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              {...(activeTab === 'hello' ? registerHello('phone') : registerQuote('phone'))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all"
              disabled={isSubmitting}
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company/Organisation
            </label>
            <input
              id="company"
              type="text"
              placeholder="Ex. Devlyfi"
              {...(activeTab === 'hello' ? registerHello('company') : registerQuote('company'))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Quote-specific fields */}
        {activeTab === 'quote' && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div className="space-y-2">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                  Project type<span className="text-red-500">*</span>
                </label>
                <select
                  id="projectType"
                  {...registerQuote('projectType')}
                  className={`w-full px-4 py-3 bg-gray-50 border ${errorsQuote.projectType ? 'border-red-500' : 'border-gray-200'
                    } rounded-lg text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all`}
                  disabled={isSubmitting}
                >
                  <option value="">Project type</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="branding">Branding</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
                {errorsQuote.projectType && (
                  <p className="text-sm text-red-500">{errorsQuote.projectType.message}</p>
                )}
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                  Project budget (USD)<span className="text-red-500">*</span>
                </label>
                <select
                  id="budget"
                  {...registerQuote('budget')}
                  className={`w-full px-4 py-3 bg-gray-50 border ${errorsQuote.budget ? 'border-red-500' : 'border-gray-200'
                    } rounded-lg text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all`}
                  disabled={isSubmitting}
                >
                  <option value="">Select budget</option>
                  <option value="less-5k">Less than $5K</option>
                  <option value="5k-10k">$5K - $10K</option>
                  <option value="10k-20k">$10K - $20K</option>
                  <option value="20k-50k">$20K - $50K</option>
                  <option value="more-50k">More than $50K</option>
                </select>
                {errorsQuote.budget && (
                  <p className="text-sm text-red-500">{errorsQuote.budget.message}</p>
                )}
              </div>
            </div>

            {/* How did you hear about us */}
            <div className="space-y-2">
              <label htmlFor="source" className="block text-sm font-medium text-gray-700">
                How did you hear about us?
              </label>
              <select
                id="source"
                {...registerQuote('source')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all"
                disabled={isSubmitting}
              >
                <option value="">Select</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </>
        )}

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Tell us about your project<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Ex. Hello, Devlyfi Design. We need help to make this project unique."
            rows={6}
            {...(activeTab === 'hello' ? registerHello('message') : registerQuote('message'))}
            className={`w-full px-4 py-3 bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'
              } rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all resize-none`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>

        {/* Success/Error messages */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            role="alert"
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}
