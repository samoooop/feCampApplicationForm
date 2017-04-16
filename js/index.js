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
$('#hideButton').on('click', function(e) {
    console.log('Hello')
    divId = "registerForm"
    $("#" + divId).toggle();
    $('#myModal').modal('show');

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
    $('#myModal').modal('show');
})

$(function() {
    $("#birthdatepicker").datepicker();
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
    } else {
        $("#pHouseNo").val("")
        $("#pMoo").val("")
        $("#pSoi").val("")
        $("#pStreet").val("")
        $("#pSubDistrict").val("")
        $("#pDistrict").val("")
    }
});

$('#contact_form').validator().on('submit', function(e) {
    if (e.isDefaultPrevented()) {
        console.log("Hey it's wrong")
    } else {
        console.log("Hey Goodjob")
        event.preventDefault()
        divId = "registerForm"
        $("#" + divId).toggle();
        confirmationDivId = "confirmation"
        $("#" + confirmationDivId).toggle();
        $('#myModal').modal('show');
    }
})

confirmationDivId = "confirmation"
$("#" + confirmationDivId).toggle();