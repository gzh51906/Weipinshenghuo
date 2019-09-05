<template>
  <div class="productInfor">
    <p class="title">百年渔港蒜蓉粉丝扇贝200g(6枚装)</p>
    <p class="subhead">
      <i class="label">第2件0元</i>
      <span>无需解冻，开袋即烹</span>
    </p>
    <div class="price">
      <p class="priceIn">
        <span class="priceRed">
          <i>¥</i>19.9
        </span>
       
      </p>
      <p class="area">
        产地：
        <span class="name">辽宁大连</span>
      </p>
    </div>
    <div class="sale lineTop">
      <div class="saleIn">
        <i class="couponRedemption">促销</i>
        <div class="saleList saleListTwo">
          <i class="label">优惠</i>
          <p class="title">
            第2件0元 ;
            <span class="list">
              <span class="txt">满2件减19.9</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="sevenDay line-top backGauge"><span class="dian"></span>不支持7天无理由退货
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


.productInfor {
    padding: .45rem 0 0.4rem 0rem;
    background: #fff;
    margin-bottom: .3rem;
    padding-bottom: 0;
    position: relative;
}
.productInfor .title {
    line-height: .8rem;
    padding-right: .53rem;
    font-size: .53rem;
    font-weight: 500;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-left: .53rem;
}
.productInfor .subhead {
    padding-right: .53rem;
    font-size: .38rem;
    color: #808080;
    padding-top: .25rem;
    line-height: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-left: .53rem;
    height: .8rem;
}
.productInfor .subhead .label {
    font-size: .4rem;
    line-height: .4rem;
    background: #fff;
    display: inline-block;
    padding: 0.1rem .36rem .1rem .33rem;
    border: 1px solid #01B27A;
    border-radius: .4rem;
    color: #01B27A;
    margin-right: .25rem;
    font-style: normal;
    vertical-align: initial;
}
.productInfor .subhead span {
    font-size: .46rem;
    color: #666;
}
.productInfor .price {
    position: relative;
    padding: 0rem 0 0rem;
    overflow: hidden;
    padding: .4rem 0 .39rem;
    padding-left: .53rem;
    padding-right: .53rem;
}
.productInfor .price .priceIn {
    float: left;
}
.productInfor .price .priceIn .priceRed {
    font-size: .66rem;
    color: #EB3939;
}
.productInfor .price .area {
    float: right;
    font-size: .4rem;
    color: #999999;
    margin-top: .22rem;
}
 .sale {
    background: #fff;
    padding-bottom: .54rem;
    padding-left: .53rem;
    padding-right: .53rem;
}
 .sale .saleIn .couponRedemption {
    font-style: normal;
    font-size: .43rem;
    color: #999999;
    margin-right: .32rem;
    float: left;
    padding-top: .45rem;
}
 .sale .saleIn .saleListTwo {
    position: relative;
    padding: .54rem 0rem 0rem 1.8rem;
    margin-left: 1.4rem;
}
 .sale .saleIn .saleList .label {
    position: absolute;
    top: .45rem;
    left: 0;
    background: #ffffff;
    font-size: .4rem;
    color: #01B27A;
    font-style: normal;
    border: 1px solid;
    border-radius: .4rem;
    padding: .09rem .33rem;
    line-height: .4rem;
}
 .sale .saleIn .saleList .title {
    font-size: .4rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: .5rem;
    padding-left: 0;
    height: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.productInfor .backGauge {
    position: relative;
    height: 1.67rem;
    line-height: 1.67rem;
    padding: 0 .53rem;
          color: #aaaaaa;
    font-size: .4rem;
}
.productInfor .sevenDay .dian {
    display: inline-block;
    width: .33rem;
    height: .33rem;
    border-radius: 50%;
    margin-right: .2rem;
    border: 1px solid;
  
}
.productInfor .lineTop::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.line-top:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

</style>