<template>

  <b-container class="home">

    <b-container class="heading">
      <b-row class="mb-2">
        <b-col>
          The Collection of Blathers' Blatherings
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          Sleeping by Day, Blathering by Night
        </b-col>
      </b-row>
    </b-container>

    <b-container class= "element">
      <b-row>
        <b-col>
          <img src="../assets/acnh-muesum.png" class="img-fluid" style="max-width:800px">
        </b-col>
      </b-row>
    </b-container>

  </b-container>

</template>

<script>

  // @ is an alias to /src

  export default {
    name: 'Home',
    components: {}
  }

</script>

<style scoped>
  img {
    border-radius: 3px;
  }
</style>

<style>

  .home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    font-size: 25px;
    font-weight: bold;
  }

  .element {
    margin: 30px;
  }

</style>
