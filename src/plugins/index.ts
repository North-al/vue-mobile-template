import { autoComponents } from './modules/autoComponents'
import { autoImport } from './modules/autoImport'
import { unocss } from './modules/unocss'
import { useJsx } from './modules/useJsx'
import { autoIcons } from './modules/autoIcon'
import { Plugin } from 'vite'

export const plugins: Plugin[] = [autoComponents(), autoImport(), unocss(), useJsx(), autoIcons()]
