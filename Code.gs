// Serves the HTML web app
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

// Saves data to the active sheet
function saveData(name, email) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([name, email, new Date()]);
}
