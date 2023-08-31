// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'
// 使用 --at-apply
import transformerDirectives from '@unocss/transformer-directives'
// 处理jsx中的属性 如果没有这个转换器，JSX 会将无值属性视为布尔属性。
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
	presets: [
		presetAttributify({}),
		presetUno(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		})
	],
	transformers: [transformerDirectives(), transformerAttributifyJsx()],
	shortcuts: {
		'flex-around': 'flex items-center justify-around',
		'flex-between': 'flex items-center justify-between',
		'flex-center': 'flex items-center justify-center',
		'flex-end': 'flex items-center justify-end'
	}
})
