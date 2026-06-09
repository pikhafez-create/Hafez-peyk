import { supabase } from '../lib/supabase'

export const ordersService = {
  createOrder: async (payload: any) => {
    return await supabase.from('orders').insert(payload)
  },

  getCustomerOrders: async (customerId: string) => {
    return await supabase
      .from('orders')
      .select('*')
      .eq('customer_id', customerId)
      .order('created_at', { ascending: false })
  },

  getDriverOrders: async () => {
    return await supabase
      .from('orders')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
  },

  updateOrderStatus: async (orderId: string, status: string) => {
    return await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId)
  },
}
