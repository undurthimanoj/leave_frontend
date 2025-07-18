import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  // your logo image URL
  const logoUrl =
    "https://media.assettype.com/thenewsminute%2Fimport%2Fsites%2Fdefault%2Ffiles%2FAndhra_Pradesh_new_official_emblem.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100";

  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logoUrl}
            alt="Logo"
            className="h-10 w-auto rounded-md border border-white shadow-md"
          />
          <span className="text-xl font-bold">Student Hostel Portal</span>
        </Link>

        {/* Admin Dashboard link */}
        <Link to="/admin" className="hover:text-blue-200">
          Admin Dashboard
        </Link>
      </div>
    </header>
  );
}
