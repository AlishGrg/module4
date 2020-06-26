(function(window) {
var helloSpeaker = new object();
var speakWord = "Hello";
function speak(name) {
  console.log(speakWord + " " + name);
}
  window.helloSpeaker = helloSpeaker;
}) (window);