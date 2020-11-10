<template>
<b-container class="home">

  <b-container class="heading">
    <b-row>
      <b-col>The Collection of Blathers' Blatherings</b-col>
    </b-row>
    <b-row>
      <b-col>
        Sleeping by day, Blathering by night
      </b-col>
    </b-row>

  </b-container>

</b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading {
  color: black;
  font-size: 20px;
}
</style>
