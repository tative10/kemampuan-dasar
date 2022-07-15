//category error

var x = 2;
  var y = 3;
//  console.log(x + y;// sytax error karna kurang tanda kurung
console.log(x + y);


var windowObject;
  var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

  function openPopup() { // Runtime Error karena fungsi ini tidak bisa ditemukan waktu saat pemanggilan
    windowObject = window.openObject("http://www.bbc.com/", "BBC_WindowName", strWindowFeatures);

  }

function power(base, exponent) { //logical error
    var result = 1;
    for (var count = 0; count < exponent; count++)
      result *= base;
    return result;
  }
power (2,3)

//Handling the errors

// try.... catch...
function myFunction() {
    var passenger = 50;
    try {
      console.log("The coach can sit " + passenger + " people.");
    } catch (e) {
      console.log("Error: " + e.description);
    }
  }
  myFunction ()

  //contoh lagi dari try cacth
  function bro(base, exponent){
    try {
        var result = 1;
        for (var count = 0; count < exponent; count++)
          result *= base;
        return result;

    }
    catch (e){
        console.log("error :" + e.description);
    }
    }
 bro(2,3)
    


//try.. catch.. finally...
  function cFunction() 
            {
               var passenger = 50;
               
               try {
                  console.log("The bus can sit " + passenger + " people" );
               }
               
               catch ( e ) {
                  console.log("Error: " + e.description );
               }
               
               finally {
                  console.log("But my Tesla still rocks!" );
               }
            }
cFunction()

//throw... catch... (Throw statment)
function myFunction()
{
   var winPoints = 3;
   var drawPoints = 2;
   
   try{
      if ( drawPoints == 1 ){
         throw( "Real Madrid will not qualify." ); 
      }
      
      else
      {
         var qualification = winPoints + drawPoints;
      }
   }
   
   catch ( e ) {
      console.log("Error: " + e );
   }
}
console.log(myFunction())

//oneerror
// window.onerror = function () {
//   console.log("An error occurred.");
// }

//call stack property
function trace() {
  try {
    throw new Error('myError');
  } catch (e) {
    console.log(e.stack);
  }
}

function b() {
  trace();
}

function a() {
  b(3, 4, '\n\n', undefined, {});
}

a('first call, firstarg');