<template>
    <div class="icons">
        <div class="icons-container">
            <div class="icons-inner">
                <div class="item" v-for="(item,index) in iconList" :key="index">
                    <img :src="item.src" alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
        <div class="bottom-mark">
            <div class="botton-container" :style="activeStyle"></div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      iconList: [],
      screen: document.documentElement.clientWidth || document.body.clientWidth, //可视区域宽度
      docWidth: 750, //大盒子文档宽度
      markWidth: 100, //灰色的条
      markMinWidth: 0, //红色的条
      startX: 0, //开始的位置
      leftX: 0, //最终滚动条移动的距离
      endX: 0 //结束离开当前位置
    };
  },
  computed: {
    activeStyle() {
      return {
        width: this.markMinWidth + "px",
        left: this.leftX + "px"
      };
    }
  },
  methods: {
    getBottomMark() {
      this.markMinWidth = this.screen / this.docWidth * this.markWidth;
    },
    touchStart(e) {
      //开始位置
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      //记录移动点
      let left = e.touches[0].pageX;
      //上面内容块滑动距离
      let moveX = left - this.startX;

      this.leftX = -(this.markWidth / this.docWidth * moveX) + this.endX;
      if (this.leftX < 0) {
        this.leftX = 0;
      } else if (this.leftX > this.markWidth - this.markMinWidth) {
        this.leftX = this.markWidth - this.markMinWidth;
      }
    },
    touchEnd() {
      this.endX = this.leftX;
    }
  },
  created() {},
  mounted() {
    axios.get("/api/shop").then(res => {
      this.iconList = res.data.results;
    });
    this.getBottomMark();
    this.$el.addEventListener("touchstart", this.touchStart, false);
    this.$el.addEventListener("touchmove", this.touchMove, false);
    this.$el.addEventListener("touchend", this.touchEnd, false);
  }
};
</script>
<style scoped lang="">
.icons {
  width: 100%;
  height: 140px;
  font-size: 0.4rem;
  position: relative;
  margin-top: 10px;
}
.icons-container{
    overflow-x: auto;
}
.icons-inner{
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.item{
   padding: 0 10px;
}
.item img{
    width: 40px;
    height: 40px;
}
p{
    font-size: 12px;
}
.bottom-mark {
  width: 2.66666rem;
  height: 0.2rem;
  background: #ccc;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -1.33333rem;
}
.botton-container {
  position: relative;
  left: 0;
  top: 0;
  width: 0rem;
  height: 0.2rem;
  background: red;
}
.icons-container::-webkit-scrollbar {display:none}
</style>