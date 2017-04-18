//   $(document).ready(function() {
//       $('#contact_form').bootstrapValidator({
//           // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
//           feedbackIcons: {
//               valid: 'glyphicon glyphicon-ok',
//               invalid: 'glyphicon glyphicon-remove',
//               validating: 'glyphicon glyphicon-refresh'
//           },
//           fields: {
//               first_name: {
//                   validators: {
//                       stringLength: {
//                           min: 2,
//                       },
//                       notEmpty: {
//                           message: 'ขอชื่อจริงหน่อย'
//                       }
//                   }
//               },
//               last_name: {
//                   validators: {
//                       stringLength: {
//                           min: 2,
//                       },
//                       notEmpty: {
//                           message: 'นามสกุลด้วยนะ'
//                       }
//                   }
//               },
//               phone: {
//                   validators: {
//                       stringLength: {
//                           min: 10,
//                           max: 12,
//                           message: 'ใส่เบอร์โทร(เช่น 0812341234)'
//                       },
//                       notEmpty: {
//                           message: 'ใส่เบอร์โทร(เช่น 0812341234)'
//                       }
//                   }
//               },
//               answer1: {
//                   validators: {
//                       stringLength: {
//                           min: 10,
//                           max: 200,
//                           message: 'ตอบอย่างน้อย 10 ตัวอักษรและไม่เกิน 200 ตัวอักษร'
//                       },
//                       notEmpty: {
//                           message: 'ตอบคำถามด้วย!'
//                       }
//                   }
//               },
//               answer2: {
//                   validators: {
//                       stringLength: {
//                           min: 10,
//                           max: 200,
//                           message: 'ตอบอย่างน้อย 10 ตัวอักษรและไม่เกิน 200 ตัวอักษร'
//                       },
//                       notEmpty: {
//                           message: 'ตอบคำถามด้วย!'
//                       }
//                   }
//               },
//               answer3: {
//                   validators: {
//                       stringLength: {
//                           min: 10,
//                           max: 200,
//                           message: 'ตอบอย่างน้อย 10 ตัวอักษรและไม่เกิน 200 ตัวอักษร'
//                       },
//                       notEmpty: {
//                           message: 'ตอบคำถามด้วย!'
//                       }
//                   }
//               },
//               answer4: {
//                   validators: {
//                       stringLength: {
//                           min: 10,
//                           max: 200,
//                           message: 'ตอบอย่างน้อย 10 ตัวอักษรและไม่เกิน 200 ตัวอักษร'
//                       },
//                       notEmpty: {
//                           message: 'ตอบคำถามด้วย!'
//                       }
//                   }
//               },
//               answer5: {
//                   validators: {
//                       stringLength: {
//                           min: 10,
//                           max: 200,
//                           message: 'ตอบอย่างน้อย 10 ตัวอักษรและไม่เกิน 200 ตัวอักษร'
//                       },
//                       notEmpty: {
//                           message: 'ตอบคำถามด้วย!'
//                       }
//                   }
//               },
//               answer6: {
//                   validators: {
//                       stringLength: {
//                           min: 10,
//                           max: 200,
//                           message: 'ตอบอย่างน้อย 10 ตัวอักษรและไม่เกิน 200 ตัวอักษร'
//                       },
//                       notEmpty: {
//                           message: 'ตอบคำถามด้วย!'
//                       }
//                   }
//               },
//               nickname: {
//                   validators: {
//                       stringLength: {
//                           min: 1,
//                       },
//                       notEmpty: {
//                           message: 'ใส่ชื่อเล่นด้วย!'
//                       }
//                   }
//               },
//               birthdate: {
//                   validators: {
//                       stringLength: {
//                           min: 1,
//                       },
//                       notEmpty: {
//                           message: 'ใส่วันเกิดด้วย!'
//                       }
//                   }
//               },
//               houseNo: {
//                   validators: {
//                       stringLength: {
//                           min: 1,
//                           message: 'สั้นไป'
//                       },
//                       notEmpty: {
//                           message: 'ใส่ด้วย!'
//                       }
//                   }
//               },
//               district: {
//                   validators: {
//                       stringLength: {
//                           min: 3,
//                           message: 'สั้นไป'
//                       },
//                       notEmpty: {
//                           message: 'ใส่ด้วย!'
//                       }
//                   }
//               },
//               subdistrict: {
//                   validators: {
//                       stringLength: {
//                           min: 3,
//                           message: 'สั้นไป'
//                       },
//                       notEmpty: {
//                           message: 'ใส่ด้วย!'
//                       }
//                   }
//               },
//               schoolName: {
//                   validators: {
//                       stringLength: {
//                           min: 1,
//                       },
//                       notEmpty: {
//                           message: 'ใส่ด้วย!'
//                       }
//                   }
//               },
//               schoolAddress: {
//                   validators: {
//                       stringLength: {
//                           min: 5,
//                       },
//                       notEmpty: {
//                           message: 'ใส่ด้วย!'
//                       }
//                   }
//               },

//           }
//       })

//   });
$('#hideButton').on('submitBotton', function(e) {
    console.log('Hello')
    divId = "registerForm"
    $("#" + divId).toggle();
    $('#myModal').modal('show');
    confirmationDivId = "confirmation"
    $("#" + confirmationDivId).toggle();
    getConfirmation();
    var i = 0;
    i += $("#question").has(".has_error")
    console.log(i)
})

var hideIt = function() {
    divId = "registerForm"
    $("#" + divId).toggle();
    $('#myModal').modal('show');
}

$('#backButton').on('click', function(e) {
    console.log('Hello')
    divId = "registerForm"
    $("#" + divId).toggle();
    confirmationDivId = "confirmation"
    $("#" + confirmationDivId).toggle();
})

$(function() {
    $("#birthdatepicker").datepicker({
        yearRange: '1994:1996',
        changeYear: true
    });
});

$('#prefacture').on('blur', function() {
    inputPrefactureName = $('#prefacture').val()
    index = prefactureNames.indexOf(inputPrefactureName)
    console.log(index)
});

$('#schoolNameInput').on('blur', function() {
    inputSchoolName = $('#schoolNameInput').val()
    console.log(schoolNames.indexOf(inputSchoolName))
    index = schoolNames.indexOf(inputSchoolName)
    if (index != -1) {
        $('#schoolAddressInput').val(schoolAddresses[index])
        $("#schoolAddressInput").change();
        $("#schoolAddressInput").trigger("change");
    }
});

$("#addressCheckbox").change(function() {
    if (this.checked) {
        console.log('Hello')
        $("#pHouseNo").val($("#houseNo").val())
        $("#pMoo").val($("#moo").val())
        $("#pSoi").val($("#soi").val())
        $("#pStreet").val($("#street").val())
        $("#pSubDistrict").val($("#subDistrict").val())
        $("#pDistrict").val($("#district").val())
        $("#pprefacture").val($("#prefacture").val())
        $("#pposcode").val($("#poscode").val())
    } else {
        $("#pHouseNo").val("")
        $("#pMoo").val("")
        $("#pSoi").val("")
        $("#pStreet").val("")
        $("#pSubDistrict").val("")
        $("#pDistrict").val("")
        $("#pprefacture").val("")
        $("#pposcode").val("")
    }
});

$('#contact_form').validator().on('submit', function(e) {
    if (e.isDefaultPrevented()) {
        console.log("Hey it's wrong")
            // $('#warningIncompleteSubmitModal').modal('show');
    } else {
        console.log("Hey Goodjob")
        event.preventDefault()
        console.log('Hello')
        divId = "registerForm"
        $("#" + divId).toggle();
        $('#warningSubmitModal').modal('show');
        confirmationDivId = "confirmation"
        $("#" + confirmationDivId).toggle();
        getConfirmation();
        var i = 0;
        i += $("#question").has(".has_error")
        console.log(i)
    }
})

confirmationDivId = "confirmation"
$("#" + confirmationDivId).toggle();

var getConfirmation = function() {
    var table = document.getElementById("personalInfoTable");
    var head = [
        "ชื่อ-สกุล:",
        "ชื่อเล่น",
        "วัน/เดือน/ปี เกิด:",
        "ที่อยู่:",
        "โทรศัพท์บ้าน:",
        "โทรศัพท์มือถือ:",
        "อีเมล์แอดเดรส:",
        "ขนาดเสื้อ:",
        "ศาสนา:",
        "โรคประจำตัว:",
        "อาหารที่แพ้:"
    ];

    var isMoo = (($("#moo").val() == "") ? "" : "หมู่ที่ ");
    var isSoi = (($("#soi").val() == "") ? "" : "ซอย");
    var isStreet = (($("#street").val() == "") ? "" : "ถนน");
    var isSubDistrict = (($("#prefacture").val() == "กรุงเทพมหานคร") ? "แขวง" : "ตำบล");
    var isDistrict = (($("#prefacture").val() == "กรุงเทพมหานคร") ? "เขต" : "อำเภอ");
    var isPrefacture = (($("#prefacture").val() == "กรุงเทพมหานคร") ? "" : "จังหวัด");

    var info = [
        $("#first_name").val() + "   " + $("#last_name").val(),
        $("#nickname").val(),
        $("#birthdatepicker").val(),
        $("#houseNo").val() + " " + isMoo + $("#moo").val() + " " + isSoi + $("#soi").val() + " " + isStreet + $("#street").val() + " " + isSubDistrict + $("#subDistrict").val() + " " + isDistrict + $("#district").val() + " " + isPrefacture + $("#prefacture").val() + " " + $("#poscode").val(),
        $("#telephone").val(),
        $("#phone").val(),
        $("#email").val(),
        $("#shirtSize").val(),
        $("#sel1").val(),
        ($("#disease").val() == "") ? "-" : $("#disease").val(),
        ($("#donteat").val() == "") ? "-" : $("#donteat").val()
    ];
    $("#personalInfoTable tr").remove();
    for (var i = 0; i < head.length; i++) {
        var row = table.insertRow(i)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = head[i];
        cell2.innerHTML = info[i];
    }

    var table = document.getElementById("schoolInfoTable");
    var head = [
        "ข้อมูลโรงเรียน",
        "ชื่อโรงเรียน:",
        "ที่อยู่โรงเรียน: ",
        "หมายเลขโทรศัพท์โรงเรียน"
    ];
    var info = [
        " ",
        $("#schoolNameInput").val(),
        $("#schoolAddressInput").val(),
        $("#schooltel").val()
    ];
    $("#schoolInfoTable tr").remove();
    for (var i = 0; i < head.length; i++) {
        var row = table.insertRow(i)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = head[i];
        cell2.innerHTML = info[i];
    }

    var table = document.getElementById("parentInfoTable");
    var head = [
        "ชื่อ - นามสกุล:",
        "ความสัมพันธ์กับนักเรียน:",
        "โทรศัพท์มือถือ:"
    ];
    var info = [
        $("#pFirstName").val() + "   " + $("#pLastName").val(),
        $("#pRelation").val(),
        $("#pPhone").val()
    ];
    $("#parentInfoTable tr").remove();
    for (var i = 0; i < head.length; i++) {
        var row = table.insertRow(i)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = head[i];
        cell2.innerHTML = info[i];
    }

    var table = document.getElementById("answerTable");
    var head = [
        "<b><font size=\"4\">คำตอบข้อที่ 1</font></b>",
        $("#answer1").val(),
        "<b><font size=\"4\">คำตอบข้อที่ 2</font></b>",
        $("#answer2").val(),
        "<b><font size=\"4\">คำตอบข้อที่ 3</font></b>",
        $("#answer3").val(),
        "<b><font size=\"4\">คำตอบข้อที่ 4</font></b>",
        $("#answer4").val(),
        "<b><font size=\"4\">คำตอบข้อที่ 5</font></b>",
        $("#answer5").val(),
        "<b><font size=\"4\">คำตอบข้อที่ 6</font></b>",
        $("#answer6").val()
    ];
    // var info = [
    //     " ",
    //     $("#schoolNameInput").val(),
    //     $("#schoolAddressInput").val(),
    //     $("#schooltel").val()
    // ];
    $("#answerTable tr").remove();
    for (var i = 0; i < head.length; i++) {
        var row = table.insertRow(i)
        var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        cell1.innerHTML = head[i];
        // cell2.innerHTML = info[i];
    }
}