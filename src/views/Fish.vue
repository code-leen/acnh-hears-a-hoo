<template>
<b-container class="fish">
  <h1>Fish</h1>
  <ItemList :items="allFish" />
</b-container>
</template>

<script>
import ItemList from "../components/ItemList.vue"

export default {
  name: 'Fish',
  components: {
    ItemList
  },
  computed: {
    allFish: function() {
      var itemList = this.$root.$data.fishData;
      let formattedList = [];
      for (var x = 0; x < itemList.length; x++) {
        let currentName = itemList[x].name["name-USen"];
        currentName = currentName.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        console.log(currentName);
        itemList[x].name["name-USen"] = currentName;
        formattedList.push(itemList[x]);
      }
      return formattedList;
    },
  }
}
</script>
