<template>
<b-container class="bugs">
  <h1>Bugs</h1>
  <ItemList :items="allBugs" />
</b-container>
</template>

<script>
import ItemList from "../components/ItemList.vue"

export default {
  name: 'Bugs',
  components: {
    ItemList
  },
  computed: {
    allBugs: function() {
      var itemList = this.$root.$data.items;
      let formattedList = [];
      for (var x = 0; x < itemList.length; x++) {
        let currentName = itemList[x].name["name-USen"];
        currentName = currentName.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        // formattedList.push(currentName);
        console.log(currentName);
        itemList[x].name["name-USen"] = currentName;
        formattedList.push(itemList[x]);
      }
      return formattedList;
    },
  }
}
</script>
