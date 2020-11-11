<template>

  <div class="wrapper">
    <div class="items">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="info">
          <h1>{{item.name['name-USen']}}</h1>
          <p>{{item["museum-phrase"]}}</p>
        </div>
        <div class="image">
          <img :src="item.image_uri">
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'ItemList',
    props: {
      items: Array
    }
  }

</script>

<style scoped>

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .items {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .item {
    margin: 10px;
    margin-top: 50px;
    width: 400px;
  }

  .item img {
    border: 2px solid #333;
    height: 250px;
    width: 400px;
    object-fit: cover;
  }

  .item .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  .info {
    background: #f2921d;
    color: #000;
    padding: 50px 50px;
  }

  .info h1 {
    font-size: 16px;
  }

  .info h2 {
    font-size: 14px;
  }

  .info p {
    margin: 0px;
    font-size: 15px;
  }

  .price {
    display: flex;
  }

  button {
    height: 50px;
    background: #000;
    color: white;
    border: none;
  }

  .auto {
    margin-left: auto;
  }

</style>
