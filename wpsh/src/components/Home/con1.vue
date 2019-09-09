<template>
  <div>
    <div class="group-floor" v-for="item in group" :key="item.adPictures.adName">
      <a href="javascript:;" class="floor-img">
        <img :src="item.adPictures.pictureUrl" />
      </a>
      <div class="product-list">
        <div class="product-list-in">
          <div
            class="proitem"
            v-for="(list) in item.commoditysComponentList"
            :key="list.pictureUrl"
            @click="gotoXiangqing(list.commodityCode)"
          >
            <div class="pic">
              <a href="javascript:;" class="pic-a">
                <img :src="list.pictureUrl" />
              </a>
              <div class="saletip">
                <span v-if="list.saleSlogan">{{list.saleSlogan}}</span>
              </div>
            </div>
            <div class="info">
              <p class="name">
                <a href="javascript:;">{{list.commodityName}}</a>
              </p>
              <div class="price">
                <strong>{{list.commodityPrice}}</strong>
                <i class="price-addcart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    gotoXiangqing(id) {
      this.$router.push({ name: "Details", params: { id } });
    }
  },
  data() {
    return {
      group: []
    };
  },
  created() {
    axios.post("http://localhost:1906/getindexdata").then(({ data }) => {
      this.group = data.data[0].con;
      // console.log(this.group);
    });
  }
};
</script>
<style scoped>
.group-floor {
  width: 100%;
  background: #fff;
  position: relative;
}
.group-floor .floor-img,
.group-floor .floor-img img {
  width: 100%;
  height: 217.39px;
}
.group-floor .product-list {
  overflow: hidden;
  width: 100%;
}
.group-floor .product-list-in {
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 6.039px;
  white-space: nowrap;
  padding-left: 16.002px;
}
.group-floor .proitem {
  display: inline-block;
  background: #fff;
  margin-right: 9.964px;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.proitem .pic {
  position: relative;
}
.pic .pic-a {
  display: inline-block;
}
.group-floor .proitem .pic a img {
  width: 124px;
  height: 124px;
  border-radius: 6px 6px 0 0;
}
.group-floor .proitem .saletip {
  position: absolute;
  bottom: 0;
}
.group-floor .proitem .saletip span {
  border: none;
  height: 19.91px;
  background: #fb3d3d;
  color: #fff;
  font-weight: 700;
  border-radius: 6px 8px 8px 0;
  padding: 2.831px 9.058px;
  font-size: 11px;
  line-height: 14px;
}
.group-floor .proitem .info {
  box-sizing: border-box;
  width: 124.09px;
  text-align: left;
  padding-left: 0;
  padding: 8.152px;
}
.proitem .name,
.proitem .sub,
.proitem .price {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 11px;
}
.proitem .name a {
  color: #333;
}
.group-floor .proitem .price {
  margin-top: 3.925px;
  height: 19.93px;
  line-height: 19.93px;
  font-size: 11px;
}
.proitem .price strong {
  margin-right: 3.019px;
  font-weight: bold;
  color: #fb3d3d;
}
.info .price .price-addcart {
  width: 19.93px;
  height: 19.93px;
  background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png)
    no-repeat;
  background-size: 100% 100%;
  float: right;
  border-radius: 50%;
  background-color: #01b27a;
}
</style>