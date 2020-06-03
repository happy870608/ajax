$(document).ready(function() {
    $('#ajax-form button[type="submit"]').click((event) => {
          event.preventDefault()
          // Step 9 and step 10 code goes here
     $.get('./step5', {
         fname: $('#ajax-form input[name=fName]').val(),
         lname: $('#ajax-form input[name=lName]').val(),
     }, (data) => {
         $('#ajax-output').html(data)
     })
      
                })
 $('.submit_button').click((event) => {
       event.preventDefault()
       $.post('./step7', {
               i1: $('#i1').val(),
               i2: $('#i2').val(),
             }, (data) => {
                    $('#answer').html(data)
                   })
     })

                 });
