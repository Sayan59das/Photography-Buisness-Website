import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/**
 * True only after hydration. Lets client-only content (e.g. randomized
 * decorative elements) render without ever mismatching the server markup.
 */
export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
