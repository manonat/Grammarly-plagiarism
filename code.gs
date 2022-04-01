/** ฟังก์ชั่นกำหนดให้เปิดเว็บแอพแล้วให้เปิดไปที่หน้าที่ต้องการ กรณีนี้คือ index  */
function doGet(e) {
    if(!e.parameter.page){
      var htmlOutput =HtmlService.createTemplateFromFile('index') 
   return htmlOutput.evaluate()
}
 return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate()
 /** 2บรรทัดล่างนี้ ให้แสดงผลเต็มจอเสมอ ต้นฉบับเดิมไม่มี ตุ๊กโมเอา */
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
   .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
 }

/** ลองของ EP-1 Web App การสร้างฟอร์มพร้อมอัพโหลดไฟล์ส่งงาน แบบไม่ต้อง Login (อัพเดต 2021) https://youtu.be/nZmfCgQzNoA */

function uploadFiles(form) {
  try {

    var dropbox = "Files"; // ตั้งตามชื่อ folder
    var folder, folders = DriveApp.getFoldersByName(dropbox);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    var home = 'https://script.google.com/a/siam.edu/macros/s/AKfycbzm8VZDqo0SER70iAZoOpi0WuQ2lOe2kHMYjBjQpKs/dev?page=index' // linkเว็บแอพ exec

    var file = folder.createFile(form.myFile);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    var url = file.getUrl()
    var subject = form.mySubject
    var name = form.myName
    var classroom = form.myClass
    var ss = SpreadsheetApp.openById('1hkK8Zp_zsWDOWITWukGK1eyobgPYi4VOcGKcUbsXMTs') // id sheet
    var sh = ss.getSheetByName('Data') // ชื่อชีตแผ่นงาน
    sh.appendRow([new Date(), name, classroom, subject, url])
    return "Dear..." + name + " <p> Sent successfully  <p> When the advisor has already approved. Please contact the Maruay Library for printing and certification. Students are not allowed to receive the certificate themselves. <p><a href ='"+home+"' > Return to the Search Results page.</a>"    

  } catch (error) {
    return error.toString();
  }

}

/** ฟังก์ชั่นกำหนดให้คลิกไปที่ Url ใด ๆ ได้ */
function getUrl(){
  var url = ScriptApp.getService().getUrl()
  return url
}
  
/** ค้นแบบช่องเดียว DataTable */
function searhData(obj){
 var dataArray = SpreadsheetApp.getActive().getSheets()[0].getDataRange().getDisplayValues()
     dataArray.shift()
     var output = dataArray.filter(f=> f[2] == obj.input1)
     return output
 }
