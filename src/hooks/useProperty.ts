import { useMemo } from 'react'
import { Property } from 'reactive-properties'
import { useSubscription } from 'use-subscription'

export function useProperty<T> (property: Property<T>): T {
  return useSubscription(useMemo(() => ({
    getCurrentValue: property.get.bind(property),
    subscribe: property.subscribe.bind(property),
  }), [property]))
}
