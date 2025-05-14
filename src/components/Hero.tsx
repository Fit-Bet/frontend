'use client'
import { ImageMosaic } from "./ImageMosaic"
import { Button } from "./ui/Button"
import { useEffect, useState, useRef } from "react"
import { FeatureBadges } from "./FeatureBadges"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  const handleGetStarted = () => {
    // Add implementation here
  }

  return (
    <div 
      ref={heroRef}
      className="bg-background min-h-screen relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-[80px] animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '7s' }} />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text and CTA */}
          <div className="flex flex-col items-start text-left space-y-6 max-w-xl">
            <div 
              className="overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Bet on your{" "}
                <span className="relative inline-block">
                  health
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-accent/30 -z-10 transform -rotate-1"></span>
                </span>{" "}
                <span className="block mt-2">with friends</span>
              </h1>
            </div>
            
            <div 
              className="overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
              }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-secondary">
                No money lost -{" "}
                <span className="block">only a healthier life gained</span>
              </h2>
            </div>
            
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
              }}
            >
              <Button 
                size="lg" 
                variant="primary" 
                className="font-bold mt-6 relative group"
                style={{
                  animation: isVisible ? 'breathe 3s infinite' : 'none',
                  animationDelay: '2s'
                }}
                onClick={handleGetStarted}
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-accent/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              </Button>
            </div>
            
            {/* Feature badges */}
            <FeatureBadges isVisible={isVisible} />
          </div>

          {/* Right column - Image Mosaic */}
          <div 
            className="hidden lg:block rounded-xl overflow-hidden shadow-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(40px) rotate(2deg)',
              transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
            }}
          >
            <ImageMosaic />
          </div>
        </div>
      </div>
    </div>
  )
}