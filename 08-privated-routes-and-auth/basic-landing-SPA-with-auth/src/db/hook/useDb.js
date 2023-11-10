import { useContext } from 'react'
import { DbContext } from '../context/DbContext'

export const useDb = () => {
  const context = useContext(DbContext)
  if (!context) {
    throw new Error('This component should be within DbContextProvider  HOC')
  }

  const {
    friends,
    getFriends,
    addFriend
  } = context

  return {
    friends,
    getFriends,
    addFriend
  }
}
