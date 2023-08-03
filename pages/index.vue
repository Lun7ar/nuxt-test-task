<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Тестовое задание
      </h1>
      <div>
        <h2 class="info">
          <p>{{ test }}</p>
        </h2>
        <div class="links">
          <a
            href="/testpage/0"
            class="button--green"
          >
            Go to testpage
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  }
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
  background-color: #ffffff;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 400;
  font-size: 80px;
  color: #fdce69;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.info
{
  margin: 30px;
  color: #9aabb1;
}
.button
{
  margin-top: 30px;
}
</style>
