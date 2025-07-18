import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  // background image URL
  const imageUrl =
    "https://media.assettype.com/thenewsminute%2Fimport%2Fsites%2Fdefault%2Ffiles%2FAndhra_Pradesh_new_official_emblem.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100";

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${imageUrl})`,
      }}
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            Student Leave Application Portal
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Submit your leave application easily through our online portal
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileText className="mr-2" />
            Apply for Leave
          </Link>
        </div>
      </div>
    </div>
  );
}
