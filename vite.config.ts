import markdown from "./src/plugins/markdown";


export default {
  plugins: [{configureServer: [markdown]}]
}