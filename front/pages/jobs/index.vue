<template>
  <div class="d-flex justify-content-between">
    <ul v-if="arrayCompany.length" class="col-6">
      <li v-for="company in arrayCompany">
        <p>Name => {{ company.name }}</p>
        <p v-if="company.rating">Rating => {{ company.rating }}</p>
        <p v-if="company.Reviews_Companies">Count reviews => {{ company.Reviews_Companies }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index",
    async fetch() {
      const companies = await this.$axios.get('/jobs/company/all');
      this.arrayCompany = companies.data;
    },
    data: () => ({
      arrayCompany: [],
    }),
    watch: {

    },
    methods:{

    }
  }
</script>
