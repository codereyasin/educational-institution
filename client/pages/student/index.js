import React from 'react'
import StudentLogin from '../../app/components/Home/Student/StudenLogin'
import { useDispatch } from "react-redux";
import { auth } from "../../app/utils/firebase";
import {updateUser} from '../../app/redux/slices/authSlice'
import { useEffect } from 'react';
const Student = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(!authUser) return dispatch(updateUser(null)) 
        dispatch(updateUser({
            ...authUser?.providerData[0]
        }));
        return
    })
    return () => {
        unsubscribe()
    }
}, [])

  return (
    <div>
     <StudentLogin/>
    </div>
  )
}

export default Student
