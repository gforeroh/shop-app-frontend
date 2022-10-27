<template>
  <div>
    <b-table striped hover :items="itemsAll" :fields="header" >
      <template #cell(id)="data">
        <!-- <router-link to="/order/{link}"  >{{ data.item.id }}{{link}}</router-link> -->
        <router-link :to="{path: `/order/${data.item.id}`}"  >{{ data.value }}</router-link>
        <!-- <router-link to="{ path: data.item.id }">{{data.item.id}}</router-link> -->
      </template>
    </b-table>
  </div>
</template>
<!-- data.item.link -->
<script>
export default {
  props: {
    items: Array,
    fields: Array,
  },
  data() {
    return {
      header: this.fields,
      itemsAll: this.items,
    };
  }
};
</script>
<style>
  a {
    text-decoration: none !important;
  }
</style>
