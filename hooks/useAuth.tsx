import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
  } from 'firebase/auth'
  
  import { useRouter } from 'next/router'
  import { createContext, useContext, useEffect, useMemo, useState } from 'react'
  import { auth } from '../firebase'
  
  interface IAuth {
    user:User | null
    signUp: (email:string, password: string) => Promise<void>
    signIn: (email:string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: String | null
    loading: boolean
  }

  const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error: null,
    loading: false,
  })

  interface AuthProviderProps {
    children: React.ReactNode
  }

export const AuthProvider = ({children}:AuthProviderProps) => {    
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState(null)
    const [initialLoading, setInitialLoading] = useState(true)
    const router = useRouter()

    // Persisting the User_
    useEffect(
      () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // logged is..
          setUser(user)
          setLoading(false)
        } else {
          // Not logged in
          setUser(null)
          setLoading(true)
          router.push('/login')
        }

        setInitialLoading(false)
      }),
      [auth]
    )
    
    const signUp = async (email: string, password: string) => {
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
           }
        ).catch((error) => alert(error.massage))
        .finally(() => setLoading(false))
    }

    const signIn = async (email: string, password: string) => {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
           }
        ).catch((error) => alert(error.massage))
        .finally(() => setLoading(false))
    }

    const logout = async () => {
        setLoading(true)

        signOut(auth).then(() => {
            setUser(null)
        })
        .catch((error) => alert(error.massage))
        .finally(() => setLoading(false))
    }
    
    const memoedValue = useMemo(
      () => ({ user, signUp, signIn, error, loading, logout }),
      [user, loading, error]
    )
  

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext)
}
