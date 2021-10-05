var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition() ;

function start(){
    document.getElementById("TextArea").innerHTML = "";
    recognition.start();
}
 recognition.onresult = function(event){
     console.log(event)

     SaidThing = event.results[0][0].transcript; 
     document.getElementById("TextArea").value = SaidThing;
      if(SaidThing == "take my selfie"){
          console.log(SaidThing)
          speak()
      }
     };

 function speak(){
     var synth = window.speechSynthesis;
     speakdata = "taking selfie in 5 seconds";
     utterThis = new SpeechSynthesisUtterance(speakdata);
     synth.speak(utterThis);
     Webcam.attach(camera);
     setTimeout(function(){
         takeSnapshot() ;
         save();
     }, 5000)
 }

 camera = document.getElementById("camera");

 Webcam.set({
     width: 512,
     height: 512,
     image_format: "png",
     png_quality: 100
     })

     function takeSnapshot(){
         Webcam.snap(function(final_result){
             document.getElementById("result").innerHTML= "<img id='final_output' src=" + final_result + ">" 
         });
        
        }
 function save(){
     imageToBeDownloaded = document.getElementById("imgDownloader");
     image = document.getElementById('final_output').src;
     imageToBeDownloaded.href = image;
     imageToBeDownloaded.click();
 }
        
     