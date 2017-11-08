// Ignite CLI plugin for Collapsible
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-collapsible'
const NPM_MODULE_VERSION = '0.9.0'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'CollapsibleExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'Collapsible Example' })

  // Example of copying templates/Collapsible to App/Collapsible
  // if (!filesystem.exists(`${APP_PATH}/App/Collapsible`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/Collapsible`, `${APP_PATH}/App/Collapsible`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../Collapsible/Collapsible'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/Collapsible folder
  // const removeCollapsible = await context.prompt.confirm(
  //   'Do you want to remove App/Collapsible?'
  // )
  // if (removeCollapsible) { filesystem.remove(`${APP_PATH}/App/Collapsible`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../Collapsible/Collapsible'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

