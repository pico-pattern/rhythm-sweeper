Game = {}
Game.health = 10;
Game.grid = createGrid();
Game.currentSong = "../music/ThePirateAndTheDancer.mp3";
Game.notes = [2000,3000,4000,5000,6000];
Game.score = 0;

Game.screen = document.createElement('canvas')

Game.screen.height = 640
Game.screen.width = 480

Game.song = document.createElement('audio')
var source = document.createElement('source')
Game.song.setAttribute('controls', true);
  source.setAttribute('src', Game.currentSong);
  source.setAttribute('type', 'audio/mpeg');
Game.song.appendChild(source);

document.body.appendChild(Game.screen);
document.body.appendChild(Game.song);
Game.song.addEventListener('loadeddata',
  Game.song.play(),
  true
);

function createGrid() {};

function main() {
  render()
  window.requestAnimationFrame(main)
};


function render() {
  var ctx = Game.screen.getContext("2d");

  ctx.font = "20px Georgia";
  ctx.fillStyle = "#0000ff";
  ctx.fillText(Game.song.currentTime,10,50);
}

main();
