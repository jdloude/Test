
var invocation = new XMLHttpRequest();
var url = 'https://liftie.info/api/resort/breck';
   
function callOtherDomain() {

                if(invocation) {  

                        invocation.open('GET', url, true);

                        invocation.onreadystatechange = function () {

                                        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

                                         console.log(xhr.responseText);

                                        };

                        invocation.send(); 
                        
                        }

                }
                

}
callOtherDomain();