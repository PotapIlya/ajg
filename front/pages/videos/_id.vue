<template>
    <div class="d-flex justify-content-between" v-if="item">
      <div>
        <h4>{{ item.name }}</h4>
        <video
          controls="controls"
          class="w-100 h-100 col-4 mb-3"
          poster="">
          <!--      <source src="video/duel.ogv" type='video/ogg; codecs="theora, vorbis"'>-->
          <source :src="item.src" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
          <!--      <source src="video/duel.webm" type='video/webm; codecs="vp8, vorbis"'>-->
          Тег video не поддерживается вашим браузером.
        </video>
      </div>
      <div>
        <div>
          <div>
            <label class="d-flex flex-column" for="">
              <span class="h4">{{ inputRating }}</span>
              <input class="w-50" v-model="inputRating" type="range" min="1" max="10" step="1">
            </label>
          </div>
          <textarea v-model="reviewInput"></textarea>
          <button @click="saveReview">Save</button>
        </div>
        <ul v-if="item.Videos_Reviews">
          <li v-for="review in item.Videos_Reviews">
            <p>text => {{ review.text }}</p>
            <p>rating => {{ review.rating }}</p>
            <hr>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "_id",
    async fetch() {
      const videoById = await this.$axios.$get('/videos/' + this.$route.params.id)
      this.item = videoById;
      console.log(videoById)
    },
    data: () => ({
      item: {},
      reviewInput: '',
      inputRating: 5,
    }),
    methods: {
      saveReview(){
        this.$axios.$post('/videos/review/create', {
          'reviewInput': this.reviewInput,
          'inputRating': this.inputRating,
          'videoId': this.$route.params.id,
        })
          .then(res => {
            if (res){
              this.item.Videos_Reviews.push(res)
            }
          })
            .catch(e => {
            console.log(e.response)
          })
      }
    }
  }
</script>
