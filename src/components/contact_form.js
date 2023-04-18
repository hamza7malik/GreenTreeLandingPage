var form = document.getElementById("zoho-frm-landing");
if(form){
form.addEventListener("submit", function (e) {
   //  e.preventDefault();
       var efrmFields = new Array('First Name','Last Name','Email','Phone','Company','Description');
       var efrmFieldsLabels = new Array('First\x20Name','Last\x20Name','Email','Phone','Company','Project\x20Details');
  //  var efrmFields = new Array('First Name', 'Last Name', 'Email', 'Company', 'LEADCF21', 'LEADCF23', 'Description', 'Phone');
//   var efrmFieldsLabels = new Array('First\x20Name', 'Last\x20Name', 'Email', 'Company', 'Select\x20your\x20Budget', 'Services', 'Project\x20Details', 'Phone');
  //  console.log("length:", efrmFields.length);
    for (i = 0; i < efrmFields.length; i++) {
      //  var fieldObj = document.forms['WebToLeads4937518000014727001'][efrmFields[i]];
        var fields = document.getElementById("zoho-frm-landing").elements;
        var fieldObj = fields[efrmFields[i]];
       // console.log('>>>>>>>', fieldObj, fel[efrmFields[i]],fel);
        if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                e.preventDefault();
                console.log("empty field:", fieldObj);
                if (fieldObj.nodeName == 'select-one' || fieldObj.nodeName == 'select-multiple') {
                    //  if (fieldObj.type == 'select-one' || fieldObj.type == 'select-multiple') {
                    if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                        fieldObj.nextElementSibling.innerHTML = efrmFieldsLabels[i] + ' cannot be none.';
                        fieldObj.focus();
                    }
                } else if (fieldObj.type == 'tel') {
                    inputPhone.classList.add("error");
                    errorMsg.innerHTML = efrmFieldsLabels[i] + ' cannot be empty.';
                    errorMsg.classList.remove("hide");
                    fieldObj.focus();
                } else {
                        fieldObj.nextElementSibling.innerHTML = efrmFieldsLabels[i] + ' cannot be empty.';
                }
            }else if(fieldObj.id == 'Email'){
                var emailVal = fieldObj.value;
                if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
                    var atpos = emailVal.indexOf('@');
                    var dotpos = emailVal.lastIndexOf('.');
                    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                        fieldObj.nextElementSibling.innerHTML ="Please enter a valid email address. ";
                        emailFld[i].focus();
                    }
                }
            } else {
                console.log("filled field:", fieldObj);
                if (fieldObj.type == 'tel') {
                    if (!iti.isValidNumber()) {
                        e.preventDefault();
                        inputPhone.classList.add("error");
                        var errorCode = iti.getValidationError();
                        errorMsg.innerHTML = errorMap[errorCode];
                        errorMsg.classList.remove("hide");
                    } else {
                        errorMsg.classList.add("hide");
                        inputPhone.classList.remove("error");
                        inputPhone.value = iti.getNumber()
                        var countryData = iti.getSelectedCountryData();
                        jQuery('#Country').val(countryData.name);
                    }
                } else {
                    fieldObj.nextElementSibling.innerHTML = '';
                }
                // isValid = true;
            }

        }// end if statement

    } // end foreach fields loop

});
}