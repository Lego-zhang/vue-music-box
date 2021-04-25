import { computed } from '@vue/runtime-core'
import { ref } from 'vue'

export default function useShortcut (props, groupRef) {
  const ANCHOR_HEIGHT = 18
  const scrollRef = ref(null)

  const shortcutList = computed(() => {
    return props.data.map(group => {
      return group.title
    })
  })

  const touch = {}

  function onShortcutTouchStart (e) {
    // 2. 获取li的索引

    const anchorIndex = parseInt(e.target.dataset.index)
    // 获取手指触纵坐标
    touch.y1 = e.touches[0].pageY
    touch.anchorIndex = anchorIndex
    scrollTo(anchorIndex)
  }

  function onShortcutTouchMove (e) {
    // 获取移动结束纵坐标
    touch.y2 = e.touches[0].pageY
    const delta = ((touch.y2 - touch.y1) / ANCHOR_HEIGHT) | 0
    const anchorIndex = touch.anchorIndex + delta
    scrollTo(anchorIndex)
  }

  function scrollTo (index) {
    if (isNaN(index)) {
      return
    }

    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    console.log(index)
    // 3. 获取索引对应的DOM
    const targetEl = groupRef.value.children[index]

    const scroll = scrollRef.value.scroll

    scroll.scrollToElement(targetEl, 0)
  }

  return {
    shortcutList,
    scrollRef,
    onShortcutTouchStart,
    onShortcutTouchMove
  }
}
