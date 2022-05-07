import React from 'react'
import UsesCard from '../../components/UsesCard'
import UsesContainer from './styles'

const Uses: React.FC = () => (
  <UsesContainer>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
      <UsesCard />
      <UsesCard />
      <UsesCard />
      <UsesCard />
      <UsesCard />
    </div>
  </UsesContainer>
)

export default Uses
