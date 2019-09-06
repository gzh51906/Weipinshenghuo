<template>
  <div>
    <div class="prolist2 prolistBackground pb pt" v-for="(item,index) in list" :key="index">
      <div class="blockwrap">
        <div class="tt">
          <h3>{{item.title}}</h3>
        </div>
        <ul class="twoproduct">
          <li v-for="(ele,idx) in item.list" :key="idx">
            <div class="proitem" @click="gotoXiangqing(ele.commodityCode)">
              <div class="pic">
                <a href="javascript:;">
                  <img :src="ele.pictureUrl" />
                </a>
                <div class="saletip">
                  <span v-if="ele.saleSlogan">{{ele.saleSlogan}}</span>
                </div>
              </div>
              <div class="info">
                <p class="name">
                  <a href="javascript:;">{{ele.commodityName}}</a>
                </p>
                <div class="price">
                  <strong>¥{{ele.commodityPrice}}</strong>
                  {{ele.commoditySpec}}
                  <i class="price-addcart"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="pagefooter pt pb">
      <p>沪IPC备09008015号</p>
      <p>上海易果电子商务有限公司</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  methods:{
    // 跳转到详情
     gotoXiangqing(id){
            this.$router.push({name:'Details',params:{id}})
        }
  },
  created() {
    axios
      .get("https://www.easy-mock.com/mock/5d6f99f7f16efd32ea5f0eef/list")
      .then(({ data }) => {
        // console.log(data);
        data.group.Data.templateComponentList.forEach(element => {
          let obj = {};
          obj.title = element.componentBase.customComponentName;
          obj.list = element.commoditysComponentList;
          this.list.push(obj);
        });
      });
    console.log(this.list);
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.prolistBackground {
  background: #fafafa;
}
.blockwrap {
  box-sizing: border-box;
  background: #fff;
}
.prolist2 .tt {
  height: 51.32px;
  line-height: 51.32px;
  text-align: center;
}
.prolist2 .tt h3 {
  position: relative;
  display: inline-block;
  padding: 0 5.435px;
  font-size: 16px;
}
.prolist2 .tt h3:after,
.prolist2 .tt h3:before {
  position: absolute;
  top: 50%;
  display: block;
  width: 21.13px;
  height: 2.71px;
  margin-top: -1.208px;
  content: "";
  /* background: url(../../assets/imgs/home/1.png) 0 0 no-repeat; */
  background-size: auto 100%;
}
.prolist2 .tt h3:before {
  left: -21.135px;
}
.prolist2 .tt h3:after {
  right: -21.135px;
  transform: rotate(180deg);
}
.prolist2 .blockwrap .twoproduct {
  overflow: hidden;
  padding: 0 11.171px;
  box-sizing: border-box;
}
.prolist2 li {
  float: left;
  width: 50%;
  padding: 4.831px;
  box-sizing: border-box;
}
.prolist2 .proitem {
  max-width: 375.33px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 6px;
  background: #fff;
}
.prolist2 .proitem .pic {
  width: 100%;
}
.proitem .pic {
  position: relative;
}
.prolist2 .proitem .pic a {
  display: inline-block;
}
.prolist2 .proitem .pic a img {
  height: 166.06px;
  border-radius: 6px;
}
.proitem .pic img {
  width: 100%;
}
.prolist2 .proitem .saletip {
  position: absolute;
  bottom: 9.964px;
  font-size: 11px;
}
.prolist2 .proitem .info {
  padding: 0 9.964px 12.077px;
  text-align: left;
}
.proitem .info {
  position: relative;
}
.prolist2 .proitem .name {
  margin-top: 6px;
  color: #333;
  font-weight: 700;
  font-size: 11px;
}
.proitem .name,
.proitem .sub,
.proitem .price {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.proitem .name a {
  color: #333;
}
.prolist2 .proitem .price {
  margin-top: 7.85px;
  font-size: 14px;
  line-height: 23.8px;
  color: #aaa;
}
.proitem .price strong {
  margin-right: 1px;
  font-size: 12px;
  font-weight: bold;
  color: #fb3d3d;
}
.prolist2 .info .price .price-addcart {
  width: 23.8px;
  height: 23.8px;
  background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png)
    no-repeat;
  background-size: 100% 100%;
  float: right;
  border-radius: 50%;
  background-color: #01b27a;
}
.prolist2 .proitem .saletip span {
  border: none;
  background: #fb3d3d;
  color: #fff;
  border-radius: 7px 10px 10px 0;
  padding: 4.529px 9px;
  font-size: 12px;
  display: inline-block;
  height: 23px;
  line-height: 23px;
  margin-right: 1px;
}
.pagefooter {
  line-height: 20px;
  text-align: center;
  color: #8d8a8a;
  padding: 10px 0 70px 0;
}
</style>