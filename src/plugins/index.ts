import { autoComponents } from './modules/autoComponents'
import { autoImport } from './modules/autoImport'
import { unocss } from './modules/unocss'
import { Plugin } from 'vite'

export const plugins: Plugin[] = [autoComponents(), autoImport(), unocss()]
