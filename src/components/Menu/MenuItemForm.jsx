import React from 'react'
import styles from './MenuItemForm.module.css'


const MenuItemForm = (props) => {

  const submitHandler = (e) => {
    e.preventDefault()
    props.onAddItem()
  }

  return (
    <form className={styles['add-form']} onSubmit={submitHandler}>
     <button className='btn btn-primary' type="submit">+</button>
    </form>
  )
}

export default MenuItemForm