import React from 'react';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProfileCard = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50 min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full bg-stone-50/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-visible transform hover:scale-105 transition-all duration-300">
        <CardContent className="p-8 relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200 to-amber-200 rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-stone-300 to-amber-200 rounded-full blur-3xl opacity-20 -z-10"></div>

          {/* Profile Header with Adjusted Image Container */}
          <div className="text-center mb-8 relative">
            <div className="relative mx-auto mb-6 w-36 h-36">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-amber-200 rounded-full blur opacity-75"></div>
              <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-amber-700/20 ring-offset-4 ring-offset-stone-50/80 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/api/placeholder/144/144" 
                  alt="Fathih Apriandi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800">
              Fathih Apriandi
            </h2>
            <p className="text-xl font-semibold text-amber-700 mt-2 tracking-wide">
              Vice President
            </p>
          </div>

          {/* Job Roles */}
          <div className="mb-8 space-y-4">
            <h3 className="text-lg font-semibold text-stone-800 mb-3 pl-2 border-l-4 border-amber-700/40">
              Job Roles
            </h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-emerald-800/10 to-amber-800/10 p-0.5 rounded-xl">
                <div className="bg-stone-50/90 p-4 rounded-xl">
                  <p className="font-semibold text-stone-800">Software Developer</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-800/10 to-stone-800/10 p-0.5 rounded-xl">
                <div className="bg-stone-50/90 p-4 rounded-xl">
                  <p className="font-semibold text-stone-800">Digital Marketing</p>
                  <div className="mt-3 ml-4 space-y-2">
                    <p className="text-stone-600 flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                      Website Marketing
                    </p>
                    <p className="text-stone-600 flex items-center">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                      Social Media Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-stone-100 rounded-full hover:bg-stone-800 hover:text-stone-50 transform hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-stone-100 rounded-full hover:bg-amber-700 hover:text-stone-50 transform hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-stone-100 rounded-full hover:bg-gradient-to-br hover:from-amber-600 hover:to-emerald-600 hover:text-stone-50 transform hover:scale-110 transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-stone-100 rounded-full hover:bg-stone-700 hover:text-stone-50 transform hover:scale-110 transition-all duration-300">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
