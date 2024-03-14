import { useCursorStore } from '@/stores/cursor'

export function useCursor() {
  const store = useCursorStore()

  return { ...store }
}
