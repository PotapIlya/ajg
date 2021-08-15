<template>
    <div class="d-flex justify-content-between">
      <div class="col-6">

        <div class="d-flex mb-3">

          <label for=""></label>
          <select v-model="selectCompany" name="" id="">
            <option
                v-if="arrayCompany.length"
                v-for="item in arrayCompany"
                :key="item.id"
                :value="item.id">
              {{ item.name }}
            </option>
            <option value="e">Нет подходящей</option>
          </select>

          <div v-if="formInputCompany">
            <label>
              <input v-model="selectNewCompany" type="text" placeholder="Завести компанию">
            </label>
          </div>

        </div>

        <div class="d-flex">

          <label for=""></label>
          <select v-model="selectPosition" name="" id="">
            <option
              v-if="arrayPosition.length"
              v-for="item in arrayPosition"
              :key="item.id"
             :value="item.id">
              {{ item.name }}</option>
            <option value="e">Нет подходящей</option>
          </select>

          <div v-if="formInputPosition">
            <label>
              <input v-model="selectNewPosition" type="text" placeholder="Завести должность">
            </label>
          </div>

        </div>

        <div>
          <label class="d-flex flex-column" for="">
            <span class="h4">{{ inputRating }}</span>
            <input class="w-50" v-model="inputRating" type="range" min="1" max="10" step="1">
          </label>
        </div>

        <div>
          <label>
            <textarea v-model="textReviews" placeholder="Отзыв" style="resize: none"></textarea>
          </label>
        </div>

        <button class="btn btn-success" @click="send">Отправить</button>

      </div>

      <ul v-if="listReviews.length" class="col-6">
        <li v-for="review in listReviews">
          <p>User => {{ review.User.name }}</p>
          <p>Company => {{ review.Company.name }}</p>
          <p>Position => {{ review.Position.name }}</p>
          <p>rating => {{ review.rating }}</p>
          <p>text => {{ review.text }}</p>
          <hr>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "index",
      async fetch() {
        const reviews = await this.$axios.get('/reviews/all');
        const company = await this.$axios.get('/company/all');

        this.listReviews = reviews.data;
        this.selectCompany = company.data[0].id;
        this.arrayCompany = company.data;
      },
      data: () => ({
        arrayCompany: [],
        selectCompany: '',
        selectNewCompany: '',
        formInputCompany: false,

        arrayPosition: [],
        selectPosition: '',
        selectNewPosition: '',
        formInputPosition: false,

        listReviews: [],
        inputRating: 5,
        textReviews: '',
      }),
      watch: {
        selectCompany(){
          this.formInputCompany = false;
          if (isNaN(Number(this.selectCompany))){
            this.formInputCompany = true;
            this.arrayPosition.length = 0;
            this.selectPosition = 'e';
          }
          else{
            this.$axios.post('/position/companyId', {
              'companyId' : this.selectCompany
            }).then(res => {
              if (res.data){
                this.selectPosition = res.data[0].id;
                this.arrayPosition = res.data;
              }
            }).catch(e => {
              console.log(e.response)
            })
          }
        },
        selectPosition(){
          this.formInputPosition = isNaN(Number(this.selectPosition));
        }
      },
      methods:{
        send(){
          this.$axios.post('/reviews/create', {
            'companyId' : this.selectCompany,
            'newCompanyInput' : this.selectNewCompany,
            'positionId' : this.selectPosition,
            'newPositionInput' : this.selectNewPosition,
            'inputRating' : this.inputRating,
            'textReviews' : this.textReviews,
          }).then(res => {
            console.log(res.data)

          }).catch(e => {
            console.log(e.response)
          })
        }
      }
    }
</script>
