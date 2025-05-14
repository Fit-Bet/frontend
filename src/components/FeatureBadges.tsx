'use client'

import { FeatureBadge } from "./ui/FeatureBadge"

type FeatureBadgesProps = {
  isVisible?: boolean
}

type Feature = {
  text: string
  description?: string
  icon?: React.ReactNode
}

// Sem bibliotecas externas - vamos usar SVGs diretamente
const features: Feature[] = [
  {
    text: 'Track Progress',
    description: 'Monitor your fitness journey with detailed statistics and achievements',
    icon: (
      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7L14.5 13.5L9.5 8.5L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 13V7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    text: 'Challenge Friends',
    description: 'Create and join fitness competitions with your friends and family',
    icon: (
      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21V19C22.9986 17.1771 21.7681 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13C17.7699 3.58345 19.0016 5.17689 19.0016 7.005C19.0016 8.83311 17.7699 10.4266 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    text: 'Stay Motivated',
    description: 'Get encouragement and reminders to help you reach your fitness goals',
    icon: (
      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 8.5C14.5 10.433 12.9331 12 11 12C9.06692 12 7.5 10.433 7.5 8.5C7.5 6.567 9.06692 5 11 5C12.9331 5 14.5 6.567 14.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 12V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12L23 19H17L19 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 19L2 12L4 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
]

export function FeatureBadges({ isVisible = true }: FeatureBadgesProps) {
  return (
    <div 
      className="flex flex-wrap gap-4 mt-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
      }}
    >
      {features.map((feature, index) => (
        <FeatureBadge 
          key={feature.text}
          text={feature.text}
          description={feature.description}
          index={index}
          icon={feature.icon}
        />
      ))}
    </div>
  )
}