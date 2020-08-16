# corona-travel

## Adding a new country to the origin options

When adding a new country, you will need to first open data.js to add a new const with the acronym for the country then start adding json information. At the end of the file, you will need to add that country's acronym to the options array.

In order to compare that country to others after it was selected, you will need to edit the script.js file. Here, you'll need to add an else-if statement for both of the drop-downs that checks if the selection is equal to the country's acronym you entered in the options array.

## Adding more information for where an existing country's resident can travel

Open up the data.js file and add a new line to the array or edit an existing one.
