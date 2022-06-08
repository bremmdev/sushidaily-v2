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