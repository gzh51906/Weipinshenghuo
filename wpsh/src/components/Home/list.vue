<template>
  <div class="prolist pt">
    <div class="blockwrap prolist-blockwrap">
      <ul>
        <li v-for="item in friut" :key="item.subTitle">
          <div class="proitem" @click="gotoXiangqing(item.commodityCode)">
            <div class="pic">
              <a href="javascript:;">
                <img :src="item.pictureUrl" />
              </a>
            </div>
            <div class="info">
              <div class="info-wrap">
                <p class="name">
                  <a href="javascript:;">{{item.commodityName}}</a>
                </p>
                <p class="sub">
                  <span class="saletip">
                    <span v-if="item.saleSlogan">{{item.saleSlogan}}</span>
                  </span>
                  {{item.subTitle}}
                </p>
              </div>
              <div class="price pricePadding">
                <strong>¥{{item.commodityPrice}}</strong>
                {{item.commoditySpec}}
                <i class="price-addcart"></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      friut: []
    };
  },
  methods: {
    // 跳转到详情
    gotoXiangqing(id) {
      this.$router.push({ name: "Details", params: { id } });
    }
  },
  created() {
    axios.post("http://39.107.43.32:1906/getindexdata").then(({ data }) => {
      // console.log(data);

      this.friut = data.data[0].list;
      // console.log(this.friut);
    });
  }
};
</script>
<style scoped>
.prolist {
  background: #fafafa;
}
.prolist .prolist-blockwrap {
  margin: 16.002px;
  background: none;
}
.prolist .proitem {
  position: relative;
  padding: 12.077px 9.964px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: #fff;
  margin-bottom: 9.662px;
}
.prolist .proitem .pic {
  float: left;
  width: 93.9px;
  height: 93.9px;
  margin-right: 14.493px;
}
.prolist .proitem .pic a {
  display: inline-block;
}
.prolist .proitem .info,
.prolist .proitem .pic a img {
  height: 93.9px;
}
.proitem .pic img {
  width: 100%;
}
.proitem .info {
  position: relative;
}
.proitem .price {
  font-size: 11px;
  color: #8d8a8a;
}
.proitem .name,
.proitem .sub,
.proitem .price {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.proitem .pricePadding {
  padding-right: 6.039px;
  width: 211px;
  height: 24px;
  line-height: 24px;
  position: absolute;
  bottom: 0;
  left: 108.7px;
}
.prolist .proitem .info .name {
  line-height: 15.33px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.prolist .proitem .name a {
  font-size: 14px;
  color: #000;
}
.proitem .sub {
  color: #8d8a8a;
}
.proitem .sub {
  margin-top: 8.152px;
}
.prolist .proitem .info .saletip {
  font-size: 12px;
  color: #666;
}
.prolist .proitem .price strong {
  font-size: 14px;
  color: #fb3d3d;
}
.proitem .price strong {
  margin-right: 3px;
  font-weight: bold;
}
.proitem .info .pricePadding .price-addcart {
  width: 24px;
  height: 24px;
  background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png)
    no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 0;
  right: 6.4px;
  border-radius: 50%;
  background-color: #01b27a;
  float: right;
}
.prolist .proitem .info .saletip span {
  height: 18px;
  line-height: 18px;
  padding: 0 9.058px;
  font-size: 11px;
  color: #01b27a;
  border: 1px solid #01b27a;
  display: inline-block;
  margin-right: 3px;
  border-radius: 10px;
}
</style>