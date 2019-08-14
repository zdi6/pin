<template>
    <div>
        <Swiper></Swiper>
        <Icons></Icons>
        <List></List>
    </div>
</template>
<script>
import Swiper from './hotPages/swiper'
import Icons from './hotPages/icons'
import List from './hotPages/list'
export default {
  props: {},
  components: {
      Swiper,
      Icons,
      List
  },
  data() {
    return {
       
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>