<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <div class="qd-plugins-list">
       <div class="qd-input-plugins qd-plugins-item" @click="itemClick(vm,'qdInput')" >
         <span class="left-o qd-plugin-item-o"></span>
         <div class="qd-plugin-name">qd-input(轻点输入框)</div>
         <div class="qd-plugin-des">轻点输入框描述</div>
         <span class="right-o qd-plugin-item-o"></span>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qd-plugin-list",
  data() {
    return {
      vm: this
    };
  },
  props: {
    msg: {
      type: String,
      default: "轻点-组件库"
    }
  },
  methods: {
    itemClick: (vm,id) => {
      vm.$router.push({ path: id });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.qd-plugins-list {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .qd-plugins-item {
    position: relative;
    height: 100px;
    width: 300px;
    border: 1px solid #2e8af9;
    border-radius: 5px;
    .qd-plugin-name {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40%;
      border-bottom: none;
    }
    .qd-plugin-des {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60%;
      border-top: 1px dashed #2e8af9;
    }
    .qd-plugin-item-o {
      position: absolute;
      height: 20px;
      width: 20px;
      top: 30%;
      border-radius: 10px;
      background: #ffffff;
      &.left-o {
        border-right: 2px dotted #2e8af9;
        left: -15px;
      }
      &.right-o {
        border-left: 2px dotted #2e8af9;
        right: -15px;
      }
    }
  }
}
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
