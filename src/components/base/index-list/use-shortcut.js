import { computed } from '@vue/runtime-core'

export default function useShortcut (props) {
  const shortcutList = computed(() => {
    return props.data.map(group => {
      return group.title
    })
  })
  return {
    shortcutList
  }
}
