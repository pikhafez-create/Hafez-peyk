import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { session, loading } = useAuth()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  if (!session) {
    return null
  }

  return <>{children}</>
}
