import { useEffect, useState } from 'react'
import { DbContext } from './DbContext'
import { db } from '../../auth/config/firebase'
// * IMPORTANT!!
import { getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore'

export function DbContextProvider ({ children }) {
  const [friends, setFriends] = useState([])

  //* 1. Making reference to "friends" collection to be used by getDocs
  const friendsCollectionRef = collection(db, 'friends')

  useEffect(() => {
    //* onSnapshot is an observer looking for collection reference changes in realtime!
    //* This makes getFriends method unnecesary
    const unsuscribe = onSnapshot(friendsCollectionRef, (querySnapshot) => {
      const updatedFriends = querySnapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      setFriends(updatedFriends)
    })
    return () => unsuscribe ?? unsuscribe()
  }, [])

  const getFriends = async () => {
    try {
      //* 2. Read db info from friends collection reference
      const data = await getDocs(friendsCollectionRef)
      // * Here we must get just the information we need from each doc
      // * doc.data()
      const filteredData = data.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      setFriends(filteredData)
    } catch (e) {
      //! Be careful with firestore db rules!
      // ? Change allow read, write: if TRUE; to make anyone read and write
      throw new Error(`Error trying to getDocs from Firebase Firestore: ${e}`)
    }
  }

  const addFriend = async (friend) => {
    console.log('add friend')
    //* 3.Creates a document register within friend collection on db
    try {
      await addDoc(
        friendsCollectionRef,
        {
          ...friend,
          age: +friend.age
        }
      )
      // ? No required to make a fetch request again thanks to firebase onSnapshot listener
      // await getFriends()
    } catch (e) {
      throw new Error(`Error adding a document ${e}`)
    }
  }

  return (
    <DbContext.Provider value={{
      friends,
      getFriends,
      addFriend
    }}
    >
      {children}
    </DbContext.Provider>
  )
}
