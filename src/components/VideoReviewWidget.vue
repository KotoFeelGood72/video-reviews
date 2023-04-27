<template>
  <div class="reviews-video" @click="stateToggleVideo" :class="isExpanded ? 'expanded-video' : 'collapse'">
    <div v-show="isExpanded" @click.stop class="controls-video">
        <div class="reviews_videoTime">{{ formattedTime }}</div>
        <div class="close-video toggleState_btn" @click="stateToggleVideo">
            <img src="@/assets/img/close.svg" alt="Hidden reviews">
        </div>
        <div class="toggle-audio toggleState_btn" @click="ToggleMuted">
            <img v-if="audio" src="@/assets/img/audio.svg" alt="Audio reviews">
            <img v-else src="@/assets/img/no-audio.svg" alt="Remove audio reviews">
        </div>
    </div>
    <video ref="plyrElement" :src="src" playsinline autoplay audio></video>
    <div @click.stop v-if="isExpanded" class="reviews_btnAction">
        <button 
        type="button" 
        @mouseover="isHovered = true"
        @mouseout="isHovered = false"
        :style="isHovered ? hover : btn"
        >
        {{btnName}} 
        </button>
    </div>
  </div>
</template>

<script>
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      plyrInstance: null,
      isExpanded: false,
      formattedTime: '00:00',
      audio: true,
      btnName: 'Целевое действие',
      isHovered: false,
      btn: {
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
  },
  mounted() {
    this.initPlyr();
  },
  beforeDestroy() {
    if (this.plyrInstance) {
      this.plyrInstance.destroy();
    }
  },
  methods: {
    initPlyr() {
      this.plyrInstance = new Plyr(this.$refs.plyrElement, {
        controls: [],
        clickToPlay: false,
      });
      this.plyrInstance.on("timeupdate", this.onTimeUpdate);

      if(!this.isExpanded) {
          this.plyrInstance.muted = true;
      }
    },
    stateToggleVideo() {
        this.isExpanded = !this.isExpanded
        if (this.isExpanded) {
            this.plyrInstance.currentTime = 0; 
            this.plyrInstance.muted = false;
        } else {
            this.plyrInstance.muted = true;
        }
    },
    onTimeUpdate() {
        this.formattedTime = this.formatTime(this.plyrInstance.currentTime)
    },
    formatTime(timeInSeconds) {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);

      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    },
    ToggleMuted() {
        this.plyrInstance.muted = !this.plyrInstance.muted;
        this.audio = !this.audio;
    },
  },
};
</script>

<style lang="scss">


.reviews-video {
    position: fixed;
    bottom: 10%;
    left: 3%;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #dddddd;
    transition: all .3s ease;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.collapse {
        width: 130px;
        height: 180px;
    }

    &.expanded-video {
        width: 312px;
        height: 560px;
        border-color: #171717;
    }

}
.plyr {
    min-width: 100%!important;
    height: 100%;
}


.controls-video {
    position: absolute;
    top: 25px;
    right: 17px;
    z-index: 3;
    background: rgba(189, 188, 188, 0.404);
    padding: 10px 7px;
    border-radius: 5px;
    user-select: none;
}
.reviews_videoTime {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
}

.toggleState_btn {
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1717174D;
    border-radius: 5px;
    transition: all .3s ease;
    &:hover {
        background-color: #171717a2;
    }
}

.close-video {
    margin-bottom: 15px;
}

.reviews_btnAction {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 95%;
    button {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all .3s ease;
    }
}

@media(max-width: 1024px) {
    .reviews-video {
        &.expanded-video {
        // width: auto!important;
        max-width: 300px;
        max-height: 500px;
        border-color: #171717;
    }
    }
}

@media (max-width: 767px) and (orientation:landscape) {
    .reviews-video {
        &.expanded-video {
        width: auto!important;
        max-width: 100%;
        max-height: 80%;
        border-color: #171717;
    }
    }
}


</style>
