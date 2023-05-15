<template>
    <div class="video-present">
        <div class="video_present--content">
            <h1>Плагин видео отзыва</h1>
            <p>Arkada</p>
        </div>

        <div class="position-video">
            <div v-for="(item, i) in positionVideo" :key="'position' + i">
                <button 
                type="button"
                :class="{ 'active': item.active }"
                @click="activateButton(item)"
                >{{ item.name }}
                </button>
            </div>
            <VideoReviewWidget :src="src" :style="activeBtn?.posVideos"/>
        </div>
    </div>
</template>

<script>
import VideoReviewWidget from '@/components/VideoReviewWidget';
    export default {
        components: {
            VideoReviewWidget,
        },
        data() {
            return {
                activeBtn: null,
                src: 'island.mp4',
                positionVideo: [
                    {
                        name: 'Вверх-лево',
                        active: true,
                        posVideos: {
                            top: '10%',
                            left: '3%',
                            right: 'auto',
                            bottom: 'auto',
                        }
                    },
                    {
                        name: 'Вверх-право',
                        active: false,
                        posVideos: {
                            top: '10%',
                            right: '3%',
                            left: 'auto',
                            bottom: 'auto'
                        }
                    },
                    {
                        name: 'Низ-лево',
                        active: false,
                        posVideos: {
                            bottom: '10%',
                            left: '3%',
                            right: 'auto',
                            top: 'auto'
                        }
                    },
                    {
                        name: 'Низ-право',
                        active: false,
                        posVideos: {
                            bottom: '10%',
                            right: '3%',
                            left: 'auto',
                            top: 'auto'
                        }
                    },
                ]
            }
        },
        methods: {
            activateButton(item) {
            item.active = true;
            this.positionVideo.forEach((btn) => {
                if (btn !== item) {
                btn.active = false;
                }
            });
            this.activeBtn = item;
            },
        },
    }
</script>

<style lang="scss">
    .video-present {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        text-align: center;
        &:before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            background: url('../assets/img/start.jpg') center/cover no-repeat;
            z-index: -1;
        }

        h1 {
            font-size: 70px;
            margin-bottom: 30px;
        }
        p {
            font-size: 40px;
            margin-bottom: 50px;
        }
    }

    .position-video {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
        max-width: 600px;
        grid-gap: 10px;
        background-color: #171717f6;
        padding: 20px 30px;
        border-radius: 10px;
        div {
            // width: 100%;
            button {
                background-color: #dfdfdf17;
                color: #fff;
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
                border: none;
                padding: 15px;
                font-size: 15px;
                font-weight: 500;
                border-radius: 10px;
                width: 100%;
                cursor: pointer;
                transition: all .3s ease;
                border: 1px solid transparent;
                &:hover {
                    background-color: #3a3a3a49;
                }
                &.active {
                    background-color: rgba(57, 157, 190, 0.267);
                    pointer-events: none;
                }
            }
        }
    }

    @media(max-width: 768px) {
        .position-video {
            grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
            max-width: 100%;
            width: 100%;
            padding: 50px 15px;
            border-radius: 0;
            background-color: #171717c4;
        }
        .video-present {

            h1 {
                font-size: 40px;
                margin-bottom: 10px;
            }

            p {
                font-size: 30px;
            }
        }
    }
</style>