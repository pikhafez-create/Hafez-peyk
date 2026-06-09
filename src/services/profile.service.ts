import { supabase } from '../lib/supabase'

export const profileService = {
  getProfile: async (userId: string) => {
    return await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
  },

  updateProfile: async (userId: string, data: any) => {
    return await supabase
      .from('profiles')
      .update(data)
      .eq('id', userId)
  },
}
