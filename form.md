<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">

<head>
    <base target="_top">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/ad42651166.js" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link href="https://ltschool.web.app/css/Bootstrapcolor.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Prompt' rel='stylesheet' type='text/css'>

    <title>แบบฟอร์มส่งงานออนไลน์</title>
    
    <style type='text/css'>
          .prompt { font-family: 'Prompt', sans-serif; }
        body {
            font-family: 'Prompt' !important; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#"></a>
            <h4 class="prompt text-white"><img src="https://drive.google.com/uc?id=1SQSVYCkY46_eqDIWDFvxfovotPAGnqMy" weight="90" height="90">แบบฟอร์มส่งงาน ห้องเรียนออนไลนครูอภิวัฒน์ วงศ์กัณหา  </h4>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto w-100 justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.apivat.com/" target="_blank"><i class="fas fa-home mr-2"></i> เว็บไซต์ออนไลน์ครูอภิวัฒน์</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section>
    <br>
        <div class="container">
            <div class="card text-black mb-12" style="max-width: 100rem; background-color: #ffed00">
                <h2 class="card-header prompt">ขั้นตอนการส่งงานออนไลน์</h2>
                <div class="card-body">
                    <p class="card-text mali">
                        <ul>
<li>เลือกรายวิชาที่เรียนให้ตรงกับที่นักเรียนกำลังศึกษาอยู่ในปัจจุบัน</li>
<li>กรอกชื่อ-นามสกุลนักเรียนให้สมบูรณ์ เช่น นายสมชาย เรียนดี</li>
<li>พิมพ์ระดับชั้นและห้องเรียนให้เรียบร้อย เช่น ม.4/3</li>
<li>เลือกไฟล์ที่นักเรียนจะอัพโหลดส่งงาน ควรลดขนาดภาพ กรณีที่ไฟล์มีขนาดใหญ่</li>
                        </ul>
                </div>
            </div>
        </div>
    </section>    
    <br>
    <!-- กรอกข้อมูล -->
    <div class="container">
       <form id="myForm" >
    <div class="row g-3">
      <div class="col-md-6">
			<label >เลือกรายวิชาที่เรียน:</label>
        <select name="mySubject">
          <option value="เทคโนโลยี">เทคโนโลยี</option>
          <option value="การสร้างเกม">การสร้างเกม</option>
          <option value="การ์ตูนเอนิเมชั่น">การ์ตูนเอนิเมชั่น</option>
          <option value="การตัดต่อภาพยนตร์">การตัดต่อภาพยนตร์</option>
        </select>
    </div>
    </div>
      <div class="col-md-3">
          <label for="myName" class="form-label">Student ID number</label>
          <input type="text" class="form-control" name="myName" id="myName" required>
      </div>
      <div class="col-md-2">
          <label for="myClass" class="form-label">Advisor Email</label>
          <input type="text" class="form-control" name="myClass" id="myClass" required>
      </div>
      <div class="col-md-1">
          <label for="myNum" class="form-label">Student's first and last name</label>
          <input type="text" class="form-control" name="myNum" id="myNum" required>
      </div>
  <label >เลือกไฟล์ส่งงาน:</label><input type="file" name="myFile">

  <label >ส่งงาน:</label>

  <input type="submit" value="Submit" class="btn btn-success btn-lg" onclick="this.value='กำลังอัพโหลดไฟล์...';
      google.script.run.withSuccessHandler(fileUploaded)
      .uploadFiles(this.parentNode);
      return true;">

</form>
<div id="output"></div>

    <!-- Footer -->
    <footer><br>
        <div class="btn bd-teal-800">
            <div class="container">
                <br>
                <div class="row">
                    <div >
                        <h4 class="prompt text-white"><i class="fa fa-user-circle-o mr-3"></i> Plagiarism checker by M.B.A. Maruey@Siam University
                        </h4>
                        <h5 class="prompt text-white"> The results will be sent to the advisor's email only. 
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- ปิดแทก Footer -->
    </div>
</body>
</html>



    <!-- ลองปุ่ม -->


<script>
			function preventFormSubmit(){
    var forms=document.querySelectorAll('form');
    for (var i=0;i<forms.length;i++){
      forms[i].addEventListener('submit',function(event){
        event.preventDefault();
      });
    }
  }
window.addEventListener('load',preventFormSubmit);

function handleFormSubmit(formObject){
  google.script.run.processForm(formObject);
  document.getElementById("myForm").reset();

}
		</script>



    <script>
		function fileUploaded(status) {
      document.getElementById('myForm').style.display = 'none';
      document.getElementById('output').innerHTML = status;
      Swal.fire({
      position: 'center',
        icon: 'success',
        title: 'Successfully',
        showConfirmButton: false,
        timer: 2000
      })
    }
</script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
  </script>
