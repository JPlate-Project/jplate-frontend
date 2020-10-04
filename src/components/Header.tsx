import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AuthContext } from '../pages/_app'

const Header = (props: any) => {
  const [auth, setAuth] = useContext(AuthContext)
  const [cookie, setCookie] = useState(null)

  let sum = 0
  if (props.cart) {
    props.cart.map((item: { userSelectedQuantity: number }) => {
      sum += item.userSelectedQuantity
    })
  }

  // function handleSignOut() {
  //   setAuth(false)
  //   window.localStorage.removeItem('cookie')
  //   location.reload()
  // }

  useEffect(() => {
    setCookie(window.localStorage.cookie)
  }, [])

  return (
    <div className="flex justify-around items-center border-b border-teal-500">
      <span className="h-40 flex justify-center ">
        <Link href="/">
          <img className="hover:opacity-50" src="/jplate-hexagon.ico" style={{ height: '100%' }} />
        </Link>
      </span>

      <span className="text-xl items-center">
        <Link href="/WhatIsThis">
          <span className="hover:opacity-50">What is this? </span>
        </Link>
        {/* {auth || cookie ? (
        //   <Link href="/UserProfile">
        //     <span className="hover:opacity-50">Profile</span>
        //   </Link>
        // ) : (
        //   <Link href="/SignIn">
        //     <span className="hover:opacity-50">Sign in</span>
        //   </Link>
        // )}
        // {auth || cookie ? (
        //   <Link href="/">
        //     <button type="button" onClick={handleSignOut}>
        //       <span className="hover:opacity-50">Sign out</span>
        //     </button>
        //   </Link>
        // ) : (
        //   ''
        )} */}
      </span>
      <span className="text-xl">
        <Link href="/AboutMe">
          <span className="hover:opacity-50"> About Me</span>
        </Link>
      </span>
      <span></span>
      <span className="flex justify-end text-2xl p-10 mr-10">
        {sum >= 1 ? sum : ''}
        <img
          id="headerCart"
          style={{ height: '3rem' }}
          className="hover:opacity-50"
          src="https://image.flaticon.com/icons/svg/25/25619.svg"
          onClick={props.handleShowCart}
        />
      </span>
    </div>
  )
}

export default Header
