import { provide } from "vue"
import type { ClientAppSetup } from "@vuepress/client"
import { usePagesData } from "@vuepress/client"
import { pagesSymbol,usePages,resolvePages } from "./components/usePosts"
import sanitizeHtml from 'sanitize-html';


const clientAppSetup: ClientAppSetup = () => {
  const pages = resolvePages()
  provide(pagesSymbol, pages)
}

export default clientAppSetup