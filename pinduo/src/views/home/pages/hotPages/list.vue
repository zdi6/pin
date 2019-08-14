<template>
    <div class="wrap">
        <dl v-for="(item,index) in navlist" :key="index">
            <dt>
                <img :src="item.src" alt="">
            </dt>
            <dd>
                <h5>{{item.title}}</h5>
                <p>{{item.price}}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      navlist: []
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    axios.get("/api/nav").then(res => {
      this.navlist = res.data.results;
      console.log(this.navlist);
    });
  }
};
</script>
<style scoped lang="">
.wrap{
    width: 100%;

}
dl{
    width: 100%;
    height: 100px;
    display: flex;
    margin: 20px 0;
}
dt{
    width: 35%;
    height: 100px;
}
dt img{
    width: 100%;
    height: 100%;
}
dd{
    flex: 1;
    margin-left: 10px;
}
dd h5{
    font-size: 16px;
    font-weight: 500;
}
dd p{
    font-size: 20px;
    color: red;
    margin-top: 10%;
    font-weight: 600;
}
</style>