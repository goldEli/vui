import * as fs from "fs"
import * as path from "path"
const fsp = fs.promises
import * as showdown from "showdown";
var converter = new showdown.Converter()

const mdToJs = str => {
  const content = JSON.stringify(converter.makeHtml(str))
  return `export default ${content}`
}

const md = function () {
  return {
    configureServer: [
      ({
        root, // project root directory, absolute path
        app, // Koa app instance
        server, // raw http server instance
        watcher // chokidar file watcher instance
      }) => {


        app.use(async (ctx, next) => {
          if (ctx.path.endsWith(".md")) {
            console.log(path.join(root, ctx.path))
            const content = await fsp.readFile(path.join(root, ctx.path), "utf-8")
            ctx.type = "js"
            ctx.body = mdToJs(content)
          }
          await next()
        })

      }
    ],
    transforms: [{  // 用于 rollup // 插件
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code)
    }]
  }
}



export default md