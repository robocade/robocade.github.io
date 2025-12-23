window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var carousels = bulmaCarousel.attach('.carousel', options);

    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }


    bulmaSlider.attach();

})

let currentTask = null;

function changeTask(taskName) {

  const videoPlayer1 = document.getElementById('task-video-player-1');
  const videoPlayer2 = document.getElementById('task-video-player-2');
  const videoPlayer3 = document.getElementById('task-video-player-3');
  const videoPlayer4 = document.getElementById('task-video-player-4');
  const videoPlayer5 = document.getElementById('task-video-player-5');
  const videoPlayer6 = document.getElementById('task-video-player-6');
  const videoPlayer7 = document.getElementById('task-video-player-7');
  const videoPlayer8 = document.getElementById('task-video-player-8');
  
  document.querySelectorAll('.task-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });
  
  const clickedButton = document.querySelector(`.task-selector .button[onclick*="${taskName}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }

  videoPlayer1.src = 'static/videos/' + taskName + '/target_only/sample1.mp4';
  videoPlayer2.src = 'static/videos/' + taskName + '/target_only/sample2.mp4';
  videoPlayer3.src = 'static/videos/' + taskName + '/target_only/sample3.mp4';
  videoPlayer4.src = 'static/videos/' + taskName + '/target_only/sample4.mp4';

  videoPlayer5.src = 'static/videos/' + taskName + '/co_train/sample1.mp4';
  videoPlayer6.src = 'static/videos/' + taskName + '/co_train/sample2.mp4';
  videoPlayer7.src = 'static/videos/' + taskName + '/co_train/sample3.mp4';
  videoPlayer8.src = 'static/videos/' + taskName + '/co_train/sample4.mp4';
  
  // Iterate through the video labels and mark them as 1x
  const videoLabels = document.querySelectorAll('.video-label');
  videoLabels.forEach(label => {
    label.innerHTML = label.innerHTML.replace(/(\d+)x/, '1x');
  });
}

function changePolicy(policyName) {

  document.querySelectorAll('.policy-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });
  
  const clickedButton = document.querySelector(`.policy-selector .button[onclick*="${policyName}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }

  const videoContainer1 = document.getElementById('task-video-1');
  const videoContainer2 = document.getElementById('task-video-2');

  if (policyName == "target_only") {
    videoContainer1.style.display = 'block';
    videoContainer2.style.display = 'none';
  }
  else if (policyName == "co_train") {
    videoContainer1.style.display = 'none';
    videoContainer2.style.display = 'block';
  }

}


document.addEventListener('DOMContentLoaded', (event) => {
  changeTask('scene');
  changePolicy('target_only')
});