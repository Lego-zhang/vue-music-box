import { ref, watch, computed, nextTick } from 'vue'

export default function useFixed (props) {
  const TITLE_HEIGHT = 30

  const groupRef = ref(null)
  const listHeights = ref([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distance = ref(0)
  // 5.
  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  // 5. 计算偏移值
  const fixedStyle = computed(() => {
    const distanceVal = distance.value
    const diff =
      distanceVal > 0 && distanceVal < TITLE_HEIGHT
        ? distanceVal - TITLE_HEIGHT
        : 0
    return {
      transform: `translate3d(0,${diff}px,0)`
    }
  })

  // 3. 数据发生变化时，重新计算OOM高度
  watch(
    () => props.data,
    async () => {
      await nextTick()
      calculate()
    }
  )

  // 4. 监听滚动
  watch(scrollY, newY => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (newY >= heightTop && newY <= heightBottom) {
        currentIndex.value = i
        distance.value = heightBottom - newY
      }
    }
  })

  // 1. 计算滚动栏高度
  function calculate () {
    const list = groupRef.value.children
    const listHeightsVal = listHeights.value
    let height = 0

    // 2.记录列表高度区间
    listHeightsVal.length = 0

    listHeightsVal.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeightsVal.push(height)
    }
  }

  function onScroll (pos) {
    scrollY.value = -pos.y
  }
  return {
    groupRef,
    fixedTitle,
    fixedStyle,
    currentIndex,
    onScroll
  }
}
