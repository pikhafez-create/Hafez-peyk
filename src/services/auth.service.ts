import { supabase } from '../lib/supabase'

export const authService = {
  login: async (phone: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      phone,
      password,
    })
  },

  register: async (phone: string, password: string) => {
    return await supabase.auth.signUp({
      phone,
      password,
    })
  },

  logout: async () => {
    return await supabase.auth.signOut()
  },

  getUser: async () => {
    return await supabase.auth.getUser()
  },
}
