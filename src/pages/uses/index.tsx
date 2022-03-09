import React from 'react'
import UsesBanner from '../../components/UsesBanner'
import UsesCard from '../../components/UsesCard'

const Uses: React.FC = () => {
  console.log('uses')

  return (
    <div className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
      <UsesBanner />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
        <UsesCard />
        <UsesCard />
        <UsesCard />
        <UsesCard />
        <UsesCard />
      </div>
    </div>
  )
}

export default Uses
