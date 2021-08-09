<template>
  <div v-if="videos.length" class="row align-items-center">

      <video v-for="(video, idx) in videos"
             :key="idx"
             controls="controls"
             class="w-100 h-100 col-4 mb-3"
             poster="">
        <!--      <source src="video/duel.ogv" type='video/ogg; codecs="theora, vorbis"'>-->
        <source :src="videos/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
        <!--      <source src="video/duel.webm" type='video/webm; codecs="vp8, vorbis"'>-->
        Тег video не поддерживается вашим браузером.
      </video>
    </div>

</template>

<script>
  export default {
    data: () => ({
      videos: [
        'videos/video.mp4',
        'videos/video.mp4',
        'videos/video.mp4',
        'videos/video.mp4',
        'videos/video.mp4',
        'videos/video.mp4',
      ]
    })
  }
</script>
