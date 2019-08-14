<template>
    <div>
        <ly-tab v-model="selectedId" :items="items" :options="options" @change="changeRouter"></ly-tab>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      selectedId: 0,
      items: [
        {label: '热门',routerLink:'/home/hot'},
        {label: '女装',routerLink:'/home/clothing'},
        {label: '百货'},
        {label: '母婴'},
        {label: '手机'},
        {label: '鞋包'},
        {label: '电器'},
        {label: '食品'},
        {label: '美妆'},
        {label: '内衣'},
        {label: '运动'},
        {label: '男装'},
        {label: '电脑'},
        {label: '医药'}
      ],
      options: {
        activeColor: '#ff0000'
      },
    }
  },
  computed: {},
  methods: {
      changeRouter(item,index){
          this.$router.push(item.routerLink)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">

</style>