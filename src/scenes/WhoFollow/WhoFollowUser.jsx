import { Button } from '@/src/components/buttons/button'
import UserCard from '@/src/components/userCard/UserCard'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

const WhoFollowUser = () => {
  return (
    <Wrapper>
      <UserCard/>
      <Button bgcolor="transparent">
        Seguir
      </Button>
    </Wrapper>
  )
}

export default WhoFollowUser