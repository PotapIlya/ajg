<template>
  <div v-if="videos.length" class="row align-items-center">
     <div
       v-for="(video, idx) in videos"
       @click="$router.push('/videos/' + video.id )">
      <div>
{{ idx }}
      </div>
     </div>
    </div>

</template>

<script>
  export default {
    async fetch() {
      const videos = await this.$axios.get('/videos/all');
      this.videos = videos.data;
      console.log(videos.data)
    },
    data: () => ({
      videos: []
    })
  }
</script>
