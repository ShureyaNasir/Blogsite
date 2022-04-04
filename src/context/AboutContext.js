import {createContext} from 'react'

export const AboutContext = createContext();

function AboutContextProvider({children}) {
    const about= {
        name:"Shureya Nasir",
        hobbies:["Dancing", "Music" , "Eating"],
        bio: "I am young lady who is passionate about sustainable development"
    }

  return (
      <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    
      
    
  )
}

export default AboutContextProvider
