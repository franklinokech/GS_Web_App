/*
This function renders the html file
*/
function doGet(event){
  

  return HtmlService.createTemplateFromFile("page").evaluate();
}

function userClick(Userinfo){
  /*
  Now we want to save whatever the username the user inputs in the text box into a spreadsheet.
  First we have to store the spreadsheet into a variable by getting its id
  */
  var id="1beVqbhcXrDTUNDiqbgO9Q-VgXau6ixOOc03BMTNFCqM";//spreadsheet id
  var ss=SpreadsheetApp.openById(id);
  var wsName="Data";//the worksheet from the spreadsheet stored in a var
  var ws=ss.getSheetByName(wsName);
  var currentTimeStampt=new Date();//get the current timestamp
  
  ws.appendRow([Userinfo.FirstName,Userinfo.LastName,Userinfo.Application,currentTimeStampt]);//rowContent is a one dimentional array
  //Logger.log(name +' clicked the button');
}

/*
   A function to create the html output by passing the file name by grabbing its content
*/
function include(filename){

return HtmlService.createHtmlOutputFromFile(filename).getContent();
}