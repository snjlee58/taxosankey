import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
	plugins: [
		vue(),
	],
	build: {
		lib: {
			// The main entry point
			entry: path.resolve(__dirname, "src/index.js"),
			name: "TaxoView",
			fileName: (format) => `taxoview.${format}.js`,
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
