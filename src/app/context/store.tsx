'use client'
import React, { createContext, useState } from 'react'

export const mangeAllState = createContext({
  show: false,
  handleXmarkClick : () => {},
  handleGearButton : () =>{},
  setShow : {}, 
  openAndClose : false,
  handleShow: () => {}, 
  showSideNav : false,
  setShowSideNav : {},
  handleBgColor : {},
  handleColors : {},
  color : "",
  bgColor: ""
})

export default function Store(props:any) {
  const [showSideNav, setShowSideNav] = useState(false)
  const [openAndClose, setOpenAndClose] = useState(false)

  const handleShow = () => {
    if (showSideNav == false) {
      setShowSideNav(!showSideNav)
      setOpenAndClose(true)
    } else {
      setShowSideNav(!showSideNav)
      setOpenAndClose(false)
    }
  }

  const [show, setShow] = useState(false);

  const handleXmarkClick = () => {
      setShow(false)
   }

   const handleGearButton = () => {
      setShow(true)
   }

   const [color , setColor] = useState("")

   const [bgColor , setBgColor] = useState("")

   
     function handleColors(e:any){
     setColor(e.target.value)
    } 

    function handleBgColor (e:any){
       setBgColor(e.target.value)
    }

 

  return (
    <>
    <mangeAllState.Provider value={{show , setShow , handleXmarkClick , handleGearButton  , openAndClose , handleShow , showSideNav , setShowSideNav , handleColors , handleBgColor , color , bgColor }}>
      {props.children}
    </mangeAllState.Provider>
    </>
  )
}
