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

const POLICIES = ['target_only', 'co_train', 'pi_05_fine_tune', 'pi_05_co_fine_tune'];

function changeTask(taskName) {
  document.querySelectorAll('.task-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });
  
  const clickedButton = document.querySelector(`.task-selector .button[onclick*="${taskName}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }

  POLICIES.forEach(policy => {
    for (let i = 1; i <= 4; i++) {
      const player = document.getElementById(`task-video-player-${(POLICIES.indexOf(policy) * 4) + i}`);
      if (player) {
        player.src = `static/videos/${taskName}/${policy}/sample${i}.mp4`;
      }
    }
  });

  const videoLabels = document.querySelectorAll('.video-label');
  videoLabels.forEach(label => {
    label.innerHTML = label.innerHTML.replace(/(\d+)x/, '1x');
  });

  // Hide pi policies for ArrangeDesk task
  const piPolicies = document.querySelectorAll('.policy-selector .button[onclick*="pi_05"]');
  if (taskName === 'scene') {
    piPolicies.forEach(button => button.style.display = 'none');
  } else {
    piPolicies.forEach(button => button.style.display = 'inline-block');
  }
}

function changePolicy(policyName) {
  document.querySelectorAll('.policy-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });
  
  const clickedButton = document.querySelector(`.policy-selector .button[onclick*="${policyName}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }

  POLICIES.forEach((policy, index) => {
    const container = document.getElementById(`task-video-${index + 1}`);
    if (container) {
      container.style.display = policy === policyName ? 'block' : 'none';
    }
  });
}


document.addEventListener('DOMContentLoaded', (event) => {
  changeTask('scene');
  changePolicy('target_only');
});