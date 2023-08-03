<template>
    <section class="container">
      <div>
        <Logo />
        <h1 class="title">
            <p>{{ HelloText }}</p>
        </h1>
        <h2 class="info">
            <p>{{ routeId }}</p> 
        </h2>
        <a class="button button--green" href="/">
          back
        </a>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
        return {
            routeId: null,
            HelloText: ""
        };
    },
    name: "Testpage",
    components: {},
    computed: {},
    async created() {
       let a = await this.asyncData(); 
       this.routeId = a.id;
       this.HelloText = a.HelloText;
    },
    mounted() {},
    methods: {
        async asyncData () {
            let id = this.$route.params.id;
            let res = this.$http.$get('/api/testpage/' + id);
            return res;
        },
    },   
  }
  </script>
  
  <style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .title
  {
    margin-top: 30px;
    color: #9aabb1;
  }
  .info
  {
    font-weight: 300;
    color: #395F76;
    margin: 30px;
  }
  .button
  {
    margin-top: 30px;
  }
  </style>