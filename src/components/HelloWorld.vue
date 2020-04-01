<template>
  <div class="hello">
    <button @click="addDataHandle">操作</button>
    <ul>
      <li v-for="(item,index) in carts" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapState("cart", ["carts"])
  },
  methods: {
    ...mapActions("cart", ["asyncSetCarts"]),
    addDataHandle() {
      this.asyncSetCarts({
        id: 1002,
        name: "卫龙"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
