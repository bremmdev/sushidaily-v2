const FIREBASE_URL = 'https://sushidaily-43f10-default-rtdb.europe-west1.firebasedatabase.app';

export const getMenu = async() => {
  const res = await fetch(`${FIREBASE_URL}/menu.json`)
  
  if(!res.ok){
    throw new Error(`Request failed: ${res.status}`)
  }

  const data = await res.json()

  const transformedMenu = []

  for(const key in data){
        transformedMenu.push({ id: key, ...data[key]})
  }

  return transformedMenu
}

export const saveOrder = async(orderData) => {
  const res = await fetch(`${FIREBASE_URL}/orders.json`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })
  
  if(!res.ok){
    throw new Error(`Request failed: ${res.status}`)
  } 

  const data = await res.json()

  return data
}