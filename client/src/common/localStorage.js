
export const getLocalStorage =(key)=> {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.error('Error in getting data from localStorage', error)
      return null
    }
  }

  export const setLocalStorage=(key, data) =>{
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Error in setting data to localStorage', error)
    }
  }

  export const removeLocalStorage=(key) =>{
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error in setting data to localStorage', error)
    }
  }