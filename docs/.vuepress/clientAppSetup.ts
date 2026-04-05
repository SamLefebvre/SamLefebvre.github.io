import { provide } from "vue"
import type { ClientAppSetup } from "@vuepress/client"
import { pagesSymbol, resolvePages } from "./components/usePosts"

const clientAppSetup: ClientAppSetup = () => {
  const pages = resolvePages()
  provide(pagesSymbol, pages)
}

export default clientAppSetup