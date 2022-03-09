import Image from 'next/image'
import React from 'react'

const UsesCard: React.FC = () => {
  const listItems = [
    'MacBook Pro (13, 2020) - The M1 chip is just amazing. Plus, 16 GB RAM and 1TB storage.',
    'MacBook Pro (13, 2020) - The M1 chip is just amazing. Plus, 16 GB RAM and 1TB storage.',
    'MacBook Pro (13, 2020) - The M1 chip is just amazing. Plus, 16 GB RAM and 1TB storage.',
    'MacBook Pro (13, 2020) - The M1 chip is just amazing. Plus, 16 GB RAM and 1TB storage.',
  ]

  return (
    <div className="text-gray-300">
      <span className="text-4xl font-bold">desk</span>
      <div className="mt-5 rounded-2xl border-2 border-gray-300 bg-gray-900">
        <div className="ml-3 py-1">
          <Image
            src="/assets/image/dots.svg"
            alt="Dots"
            width={42}
            height={10}
          />
        </div>
        <ul className="border-t-2 border-gray-300 px-10 pb-14">
          {listItems.map(item => (
            <li className="mt-5">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsesCard
