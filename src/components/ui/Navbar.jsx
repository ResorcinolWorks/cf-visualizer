import React from "react";
import { Button } from "@/components/ui/button";
import ShineBorder from "@/components/magic-ui/shine-border";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-white">CF Visualizer</h1>
      <a
        href="https://github.com/ResorcinolWorks/cf-visualizer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShineBorder 
          shineColor="#3b82f6" 
          duration={2}
          borderWidth={2}
        >
          <Button 
            variant="ghost" 
            className="text-white hover:bg-gray-800 border-0 px-6 py-3 rounded-full transition-colors"
          >
            <FaGithub className="mr-2 h-5 w-5" />
            Star on GitHub
          </Button>
        </ShineBorder>
      </a>
    </nav>
  );
}