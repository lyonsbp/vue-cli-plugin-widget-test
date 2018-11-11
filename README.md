Vue cli plugin boilerplate for developing a ui widget

## Pre Reqs
1. Must have @vue/cli 3.1.1 or higher

## Installation 
1. Clone this repo.
2. `cd` into `widget-addon` and run `npm install`.
3. From the `widget-addon` folder, run `npm run serve` You should see a success message saying the app is running at http://localhost:8042
4. Open a new terminal window and start the cli dashboard with `vue ui`.
5. Select an existing project or create a new one.
6. Navigate to plugins menu from the sidebar, and click "Add Plugin".
7. Click the "Browse Local Plugin" button in the bottom of the add plugin view.
8. Select the root folder of this repo. The plugin should be installed.
9. Click "Finish Installation"
10. A message should pop up saying "Invoking {plugin name}" at this point, refresh the vue ui in your browser. (BUG)
11. Should be taken to a screen and asked to commit your changes. The installation is complete!

## Using the Widget
1. Aftering installing, navaigate to the project dashboard from the sidebar.
2. Click "customize" in the top right corner.
3. Add the new widget "test.widget.hello.title"

## Changing the Widget
1. The widget is just a vue component, located at `wiget-addon/src/components/TestWidget.vue`

## Full Docs
The full api docs for vue cli plugins are located here: https://cli.vuejs.org/dev-guide/plugin-dev.html.
UI plugins hagve their own api avaiable here: https://cli.vuejs.org/dev-guide/ui-api.html