import { autoComponents } from './modules/autoComponents'
import { autoImport } from './modules/autoImport'
import { Plugin } from 'vite'

export const plugins: Plugin[] = [autoComponents(), autoImport()]
