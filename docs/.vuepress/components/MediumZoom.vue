<script setup>
import { nextTick } from 'vue'
import { useMediumZoom } from '@vuepress/plugin-medium-zoom/client'

const zoom = useMediumZoom()

nextTick(() => {
  zoom?.refresh()
})
</script>
