import { nextTick } from 'vue'
import { useMediumZoom } from '@vuepress/plugin-medium-zoom/lib/client'

export default {
  setup() {
    const zoom = useMediumZoom()

    // ... do something to add new images in current page
  
    // then you may need to call `refresh` manually to make those new images zoomable
    nextTick(() => {
      zoom.refresh()
    })
  },
}