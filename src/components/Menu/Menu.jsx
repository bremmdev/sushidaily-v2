import React, { useEffect } from 'react'
import styles from './Menu.module.css'
import MenuIntro from './MenuIntro.jsx'
import MenuList from './MenuList.jsx'
import useFetch from '../../hooks/use-fetch.js'
import { getMenu } from '../../api/api.js'
import LoadingSpinner from '../UI/LoadingSpinner.jsx'


const Menu = () => {

  const { data: menuItems, status, error, sendRequest } = useFetch(getMenu, true)

  //fetch menu on mount
  useEffect(() => {
    sendRequest()   
  }, [sendRequest])

  let menuContent;

  if(status === 'pending') {
    menuContent = <LoadingSpinner />
  }

  if(status === 'completed' && (!menuItems || menuItems.length === 0)){
    menuContent = <div className='centered error'>At this moment there is no menu.</div>
  }

  if(status === 'completed' && error) {
    menuContent = <div className='centered error'>{error}</div>
  }

  if(status === 'completed' && menuItems && menuItems.length) {
    menuContent = <MenuList items={menuItems}/>
  }

  return (
    <section id="menu" className={styles.menu}>
      <div className="container">
        <MenuIntro />
        {menuContent}
      </div>
    </section>
  )
}

export default Menu