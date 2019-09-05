<template>
  <div>
    <div class="group-floor" v-for="item in group" :key="item.img">
      <a href="javascript:;" class="floor-img">
        <img :src="item.img" />
      </a>
      <div class="product-list">
        <div class="product-list-in">
          <div class="proitem" v-for="(list,index) in item.content" :key="index">
            <div class="pic">
              <a href="javascript:;" class="pic-a">
                <img :src="list.image" />
              </a>
              <div class="saletip">
                <span v-if="list.bot">{{list.bot}}</span>
              </div>
            </div>
            <div class="info">
              <p class="name">
                <a href="javascript:;">{{list.name}}</a>
              </p>
              <div class="price">
                <strong>{{list.price}}</strong>
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
export default {
  methods: {
  
  },
  data() {
    return {
      group: [
        {
          img:
            "https://img14.yiguoimg.com/d/items/2019/190801/9288738701977345_1125x652.jpg?w=1125&h=652",
          content: [
            {
              image:
                "https://img13.yiguoimg.com/d/items/2019/190806/9288738754176774_300.jpg",
              bot: "基地发货",
              name: "红钻突尼斯软籽石榴礼盒装",
              price: "¥88"
            },
            {
              image:
                "https://img10.yiguoimg.com/d/items/2018/181206/9288735117256070_300.jpg",
              bot: "佳沛金果促销",
              name: "巨无霸金果原箱",
              price: "¥259"
            },
            {
              image:
                "https://img10.yiguoimg.com/d/items/2019/190401/9288737708156545_300.jpg",
              bot: "",
              name: "泰国精选椰青",
              price: "¥68"
            },
            {
              image:
                "https://img09.yiguoimg.com/d/items/2019/190412/9288737767237260_300.jpg",
              bot: "2份立减10元",
              name: "佳沛新西兰阳光金果",
              price: "¥78"
            },
            {
              image:
                "https://img11.yiguoimg.com/d/items/2019/190329/9288737695639165_300.jpg",
              bot: "",
              name: "越南红心火龙果",
              price: "¥49.9"
            },
            {
              image:
                "https://img14.yiguoimg.com/d/items/2018/180807/9288727914489095_300.jpg",
              bot: "",
              name: "泰国金枕头冷冻榴莲果肉",
              price: "¥49.9"
            },
            {
              image:
                "https://img11.yiguoimg.com/d/items/2019/190424/9288737844242072_300.jpg",
              bot: "",
              name: "新西兰红玫瑰Queen苹果",
              price: "¥56"
            }
          ]
        },
        {
          img:
            "https://img12.yiguoimg.com/d/items/2019/190801/9288738696800001_1125x652.jpg?w=1125&h=652",
          content: [
            {
              image:
                "https://img12.yiguoimg.com/d/items/2019/190724/9288738609178360_300.jpg",
              bot: "产地直发",
              name: "攀枝花凯特芒礼盒装",
              price: "¥59.9"
            },
            {
              image:
                "https://img12.yiguoimg.com/d/items/2019/190704/9288738434492132_300.jpg",
              bot: "吊干杏单独配送",
              name: "新疆伊犁吊干小红杏",
              price: "¥118"
            },
            {
              image:
                "https://img11.yiguoimg.com/d/items/2019/190329/9288737682728573_300.jpg",
              bot: "",
              name: "菲律宾凤梨",
              price: "¥39.9"
            },
            {
              image:
                "https://img14.yiguoimg.com/d/items/2019/190516/9288738022041264_300.jpg",
              bot: "第2件0元",
              name: "南非西柚",
              price: "¥29.9"
            },
            {
              image:
                "https://img10.yiguoimg.com/d/items/2019/190418/9288737798923922_300.jpg",
              bot: "",
              name: "百香果",
              price: "¥39"
            },
            {
              image:
                "https://img11.yiguoimg.com/d/items/2019/190424/9288737842669208_300.jpg",
              bot: "",
              name: "云南精品夏黑葡萄",
              price: "¥34.9"
            },
            {
              image:
                "https://img13.yiguoimg.com/d/items/2019/190329/9288737670637181_300.jpg",
              bot: "",
              name: "山东蓬莱红富士苹果",
              price: "¥83"
            }
          ]
        },
        {
          img:
            "https://img11.yiguoimg.com/d/items/2019/190827/9288738965333787_1125x652.jpg?w=1125&h=652",
          content: [
            {
              image:
                "https://img12.yiguoimg.com/d/items/2018/180704/9288725486937316_300.jpg",
              bot: "",
              name: "原膳新西兰精修带骨牛肋排(含炖料包)400g",
              price: "¥39"
            },
            {
              image:
                "https://img09.yiguoimg.com/d/items/2018/180705/9288725529240805_300.jpg",
              bot: "3件29.9",
              name: "原膳澳洲原切牛肉丝120g",
              price: "¥18"
            },
            {
              image:
                "https://img12.yiguoimg.com/d/items/2018/180929/9288731969103165_300.jpg",
              bot: "",
              name: "澳奎澳洲草饲眼肉牛排150g(含黄油和酱料包)",
              price: "¥34.9"
            },
            {
              image:
                "https://img09.yiguoimg.com/d/items/2018/180929/9288731968185661_300.jpg",
              bot: "第2件0元",
              name: "原膳澳洲精选S级牛腩块500g",
              price: "¥42.9"
            },
            {
              image:
                "https://img14.yiguoimg.com/d/items/2018/180929/9288731968382269_300.jpg",
              bot: "第2件半价",
              name: "澳奎澳洲金钱腱500g",
              price: "¥79"
            },
            {
              image:
                "https://img07.yiguoimg.com/e/web/170118/150234/170118150234302_1233566_300.jpg",
              bot: "",
              name: "澳洲谷饲小公牛雪花牛肉粒250g",
              price: "¥58"
            },
            {
              image:
                "https://img11.yiguoimg.com/d/items/2018/180820/9288729669018900_300.jpg",
              bot: "",
              name: "澳洲YG级谷饲牛肉卷250g",
              price: "¥29"
            }
          ]
        },
        {
          img:
            "https://img11.yiguoimg.com/d/items/2019/190822/9288738906777366_1125x652.jpg?w=1125&h=652",
          content: [
            {
              image:
                "https://img13.yiguoimg.com/d/items/2019/190808/9288738770429704_300.jpg",
              bot: "",
              name: "虾妞牛冷冻茴香小龙虾",
              price: "¥139"
            },
            {
              image:
                "https://img10.yiguoimg.com/d/items/2019/190820/9288738874205972_300.jpg",
              bot: "999-150",
              name: "清水大闸蟹",
              price: "¥399"
            },
            {
              image:
                "https://img05.yiguoimg.com/e/web/170427/094652/170427094652305_1247045_300.jpg",
              bot: "",
              name: "美心原味鸡蛋卷",
              price: "¥145"
            },
            {
              image:
                "https://img11.yiguoimg.com/d/items/2018/181108/9288733730514280_300.jpg",
              bot: "",
              name: "原膳深海大虾",
              price: "¥25.9"
            },
            {
              image:
                "https://img05.yiguoimg.com/e/web/170418/092630/170418092630489_1269400_300.jpg",
              bot: "爆款直降",
              name: "老杜崇明草鸭",
              price: "¥38"
            },
            {
              image:
                "https://img07.yiguoimg.com/e/web/170508/095120/170508095120808_154370_300.jpg",
              bot: "第2件0元",
              name: "崇明生态乳鸽",
              price: "¥49.9"
            },
            {
              image:
                "https://img11.yiguoimg.com/d/items/2019/190428/9288737867245212_300.jpg",
              bot: "单品包邮",
              name: "月亮湾淡干冰岛红参",
              price: "¥499"
            }
          ]
        }
      ]
    };
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