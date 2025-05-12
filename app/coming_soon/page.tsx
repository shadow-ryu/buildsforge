"use client";
import React from 'react';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

const ComingSoon = () => {
 

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center p-8 bg-[#181A20] rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-[#F4F4F5] mb-4">Coming Soon</h1>
        <p className="text-[#A1A1AA] mb-6">We are working hard to bring you something amazing. Stay tuned!</p>
        <Button
        variant="default"
          onClick={() => redirect("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
