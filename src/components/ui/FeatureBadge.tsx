'use client'

import { ReactNode, useState } from 'react'

type FeatureBadgeProps = {
  text: string
  description?: string
  index?: number
  icon?: ReactNode
}

export const FeatureBadge = ({ text, description, index = 0, icon }: FeatureBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-secondary flex items-center transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
        style={{
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          animation: `float 3s ease-in-out infinite`,
          animationDelay: `${index * 0.3}s`,
          transform: isHovered ? 'translateY(-3px)' : 'translateY(0)'
        }}
      >
        <div className="flex items-center justify-center w-5 h-5 mr-2 text-primary">
          {icon || <div className="w-2 h-2 rounded-full bg-primary" />}
        </div>
        {text}
      </div>
      
      {description && isHovered && (
        <div 
          className="absolute top-full left-0 mt-2 p-3 bg-white rounded-lg shadow-lg text-xs text-secondary z-10 w-48 transition-opacity duration-200"
          style={{
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div className="absolute -top-1 left-4 w-2 h-2 bg-white transform rotate-45" />
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}