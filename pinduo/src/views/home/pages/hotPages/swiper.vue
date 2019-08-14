<template>
        <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in swiperList" :key="index">
                    <img :src="item.src" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>

</template>
<script>
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      swiperList: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    axios.get("/api/swiper").then(res => {
      this.swiperList = res.data.results
    });
  }
};
</script>
<style scoped lang="">
.swiper{
    width: 100%;
    height: 120px;
}
img{
    width: 100%;
    height: 120px;
}
</style>