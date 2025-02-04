// document.addEventListener("DOMContentLoaded", function() {
// 	// Preload the key press sound (make sure key-press.mp3 is in your project folder)
// 	const baseKeySound = new Audio("Assets/Sequence-01.mp4");
  
// 	// Select all the key elements in the keyboard
// 	const keys = document.querySelectorAll(".keyboard .key");
  
// 	keys.forEach(key => {
// 	  // Listen for when the "pressIn" CSS animation starts on each key
// 	  key.addEventListener("animationstart", function() {
// 		// Clone the base audio object so that overlapping playback is allowed
// 		const keySound = baseKeySound.cloneNode();
// 		keySound.play().catch(error => {
// 		  // Some browsers may block auto-play; log the error if needed
// 		  console.error("Audio playback failed:", error);
// 		});
// 	  });
// 	});
//   });
  