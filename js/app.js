Game = {}
Game.health = 10;
Game.grid = createGrid();
Game.currentSong = "../music/";
Game.notes = [2000,3000,4000,5000,6000];
Game.score = 0;

Game.screen = document.createElement('canvas')
Game.song = document.createElement('audio')
var source = document.createElement('source')
  source.setAttribute('src', currentSong);
  source.setAttribute('type', 'audio/mpeg');
Game.song.appendChild(source);

document.body.appendChild(Game.screen);
document.body.appendChild(Game.song);

