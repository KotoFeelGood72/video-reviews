// import Plyr from 'plyr';
// import 'plyr/dist/plyr.css';

class VideoReviewWidget {
  constructor(elementId, videoSrc) {
    this.elementId = elementId;
    this.videoSrc = videoSrc;
    this.isExpanded = false;
    this.formattedTime = '00:00';
    this.audio = true;
    this.btnName = 'Целевое действие';
    this.isHovered = false;
    this.btn = {
      static: {
        backgroundColor: '#DE0101',
        color: '#fff',
        padding: '17px 67px',
        fontSize: '15px',
        fontWeight: '500'
      },
      hover: {
        backgroundColor: '#171717',
        color: '#fff',
        padding: '17px 67px',
        fontSize: '15px',
        fontWeight: '500'
      }
    };
    this.plyrInstance = null;
  }

  initWidget() {
    const element = document.getElementById(this.elementId);
    if (!element) return;

    const videoElement = document.createElement('video');
    const actionButton = document.createElement('button');

    element.appendChild(videoElement);
    element.appendChild(actionButton);

    this.plyrInstance = new Plyr(videoElement, {
      controls: [],
      clickToPlay: false,
    });
    this.plyrInstance.on('timeupdate', this.onTimeUpdate.bind(this));
    if (!this.isExpanded) {
      this.plyrInstance.muted = true;
    }

    actionButton.addEventListener('click', this.stateToggleVideo.bind(this));
  }

  stateToggleVideo() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.plyrInstance.currentTime = 0;
      this.plyrInstance.muted = false;
    } else {
      this.plyrInstance.muted = true;
    }
  }

  onTimeUpdate() {
    this.formattedTime = this.formatTime(this.plyrInstance.currentTime);
  }

  formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  ToggleMuted() {
    this.plyrInstance.muted = !this.plyrInstance.muted;
    this.audio = !this.audio;
  }

  render() {
    const element = document.getElementById(this.elementId);
    if (!element) return;

    element.innerHTML = `
      <div class="reviews-video ${this.isExpanded ? 'expanded-video' : 'collapses'}">
        <div class="controls-video" ${this.isExpanded ? '' : 'style="display:none;"'}>
          <div class="reviews_videoTime">${this.formattedTime}</div>
          <div class="close-video toggleState_btn">
            <img src="@/assets/img/close.svg" alt="Hidden reviews">
          </div>
          <div class="toggle-audio toggleState_btn">
            <img src="${this.audio ? '@/assets/img/audio.svg' : '@/assets/img/no-audio.svg'}" alt="${this.audio ? 'Audio reviews' : 'Remove audio reviews'}">
          </div>
        </div>
        <video src="${this.videoSrc}" playsinline autoplay audio></video>
        <div class="reviews_btnAction" ${this.isExpanded ? '' : 'style="display:none;"'}>
          <button 
            type="button"
            style="${this.isHovered ? this.btn.hover : this.btn.static}"
            onmouseover="this.isHovered = true"
            onmouseout="this.isHovered = false"
          >
            ${this.btnName}
          </button>
        </div>
      </div>
    `;

    const closeButton = element.querySelector('.close-video');
    if (closeButton) {
      closeButton.addEventListener('click', this.stateToggleVideo.bind(this));
    }

    const audioToggle = element.querySelector('.toggle-audio');
    if (audioToggle) {
      audioToggle.addEventListener('click', this.ToggleMuted.bind(this));
    }
  }
}

// const widget = new VideoReviewWidget('widget-container', 'path/to/video.mp4');
// widget.render();