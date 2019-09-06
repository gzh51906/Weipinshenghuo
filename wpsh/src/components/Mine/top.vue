<template>
  <div class="header clear">
    <div class="headerImg">
      <span class="imgBorder">
        <img alt=" 用户头像" src="//img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg" />
      </span>
      <a href="javascript:;">
        <p class="name">登录/注册</p>
      </a>
    </div>
    <i class="setting"></i>
    <div class="account">
      <p class="list">
        <span class="num">-</span>
        <span class="txt">卡包余额</span>
      </p>
      <p class="list">
        <span class="num">-</span>
        <span class="txt">悠币</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.header {
  position: relative;
  width: 100%;
  height: 194.44px;
  background: #2dd282
    url(//img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg) 100% 100%;
  background-size: 100% 100%;
  padding: 0 0rem 36.232px 0rem;
  box-sizing: border-box;
}
.header .headerImg {
  position: relative;
  display: inline-block;
  height: 68.23px;
  margin-top: 27.174px;
  padding: 0 9.662px 80px 86.051px;
  box-sizing: border-box;
  overflow: hidden;
}
.header .headerImg .imgBorder {
  display: inline-block;
  position: absolute;
  left: 15.097px;
  top: 0;
  border: 3.917px solid rgba(255, 255, 255, 0.5);
  width: 68.229px;
  height: 68.229px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}
.clear:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
.header .headerImg img {
  position: absolute;
  top: 0;
  left: 0rem;
  width: 68.229px;
  height: 68.229px;
  border-radius: 50%;
}
.header .name {
  display: inline-block;
  text-align: left;
  color: #fff;
  font-size: 16px;
  width: 301.93px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 60.93px;
  padding: 10.266px 0 0 24.155px;
  /* float: right; */
}
.header .setting {
  position: absolute;
  top: 10.87px;
  right: 15.097px;
  display: inline-block;
  width: 16.6px;
  height: 18.42px;
  background: url(//img07.yiguoimg.com/d/web/180508/01319/184003/setting.png)
    no-repeat;
  background-size: 100% 100%;
}
.account {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 53.74px;
  background: white;
  padding: 9.085px;
  box-sizing: border-box;
}
.account .list {
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
}
.account .list span.num {
  font-size: 15px;
  color: #0e9f4e;
}
.account .list span {
  display: block;
}
.account .list span.txt {
  font-size: 12px;
  color: #333333;
}
</style>