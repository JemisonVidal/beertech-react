import CustomPlayer from './components/Player/CustomPlayer'

const video = new CustomPlayer(800, 600, "Your browser does not support the video tag.");

video.setSources([
  { src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", type: "video/mp4" },
  { src: "I_didnt_find_the_ogg_extension_link.ogg", type: "video/ogg" }
]);

video.render("MyPlayerId");
