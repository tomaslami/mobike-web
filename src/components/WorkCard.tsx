import React from 'react'
import Image from 'next/image'
interface CardProps {
    iconSrc: string;
    iconAlt: string;
    title: string;
    description: string;
  }

const WorkCard = ({ iconSrc, iconAlt, title, description }: CardProps) => {
  return (
    <div className="border border-[#1D2F4E] bg-[#FAFAFA] p-6 rounded-lg shadow-md">
      <div className="bg-[#1D2F4E] w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-4">
        <Image src={iconSrc} alt={iconAlt} width={30} height={30} />
      </div>
      <h3 className="text-lg text-[#1D2F4E] font-semibold text-center mb-3">{title}</h3>
      <p className="text-center text-sm text-[#333333]">{description}</p>
    </div>    
  )
}

export default WorkCard
