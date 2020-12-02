import * as fs from "fs"
import * as path from "path"
const fsp = fs.promises
import * as showdown from "showdown";
var converter = new showdown.Converter()
const md = ({
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
      const htmlStr = converter.makeHtml(content)
      ctx.body = `
      const htmlStr = \`
      ${htmlStr}
      \`; 
      export default htmlStr
      `
    }
    await next()
  })

}



export default md