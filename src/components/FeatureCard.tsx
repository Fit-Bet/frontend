'use client'

import { ReactNode } from 'react'

type FeatureCardProps = {
  title: string
  description: string
  icon: ReactNode
  index?: number
}

export function FeatureCard({ title, description, icon, index = 0 }: FeatureCardProps) {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
      }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-secondary mb-2">{title}</h3>
      <p className="text-sm text-secondary/70">{description}</p>
    </div>
  )
}