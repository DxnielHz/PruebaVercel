const app = document.getElementById('typewriter');
 
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Ciudad de los Reyes')
  .pauseFor(200)
  .deleteChars(10)
  .start();