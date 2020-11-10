<template>
<div id="app">
  <div id="nav">
    <b-navbar variant="faded" type="dark">
      <b-navbar-brand href="#">
        <img src="../public/blathers-blue.png" class="d-inline-block logo" alt="Blathers"> ACNH Hears A Hoo
      </b-navbar-brand>
      <div class="nav-items">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/bugs">Bugs</b-nav-item>
      </div>
    </b-navbar>
  </div>
  <router-view />
</div>
</template>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #f4cc21;
  margin-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f7f7f7;
}

body {
  margin: 50px 100px;
}

.logo {
  width: 200px;
}

.nav-items {
  display: flex;
  margin-left: 100px;
}

.nav-item {
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
