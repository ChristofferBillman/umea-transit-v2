import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react()
	],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@compositions': path.resolve(__dirname, './src/compositions'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@api': path.resolve(__dirname, './src/api/'),
		}
	}
})