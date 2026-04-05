import { useRoutePaths } from '@vuepress/helper/client'
import { useMounted } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vuepress/client'

import { useData } from '@theme/useData'

import type { NavbarItem } from '@vuepress/theme-default/client'

/**
 * Flat language links (one per locale except the current one) instead of the
 * default theme’s single dropdown.
 */
export const useNavbarSelectLanguage = (): ComputedRef<NavbarItem[]> => {
  const route = useRoute()
  const routePaths = useRoutePaths()
  const { routeLocale, site, siteLocale, theme } = useData()
  const isMounted = useMounted()

  return computed(() => {
    const localePaths = Object.keys(site.value.locales)
    if (localePaths.length < 2) return []

    const path = route.path
    const fullPath = route.fullPath

    return localePaths
      .filter((localePath) => {
        const lang = `${site.value.locales?.[localePath]?.lang ?? ''}`
        return lang !== siteLocale.value.lang
      })
      .map((localePath) => {
        const localeConfig = site.value.locales?.[localePath] ?? {}
        const themeLocaleConfig = theme.value.locales?.[localePath] ?? {}
        const lang = `${localeConfig.lang}`
        const text = themeLocaleConfig.selectLanguageName ?? lang

        const targetPath = path.replace(routeLocale.value, localePath)
        const link = routePaths.value.some((p) => p === targetPath)
          ? isMounted.value
            ? fullPath.replace(path, targetPath)
            : targetPath
          : (themeLocaleConfig.home ?? localePath)

        return {
          text,
          ariaLabel: text,
          link,
        }
      })
  })
}
