<template>
  <view>
    <!-- 顶部占位导航 -->
    <navBar></navBar>
    <!-- 主内容 -->
    <mainContainer>
      <view>wqqw</view>
      <view>1212</view>
      <input type="text" placeholder="1212" />
      <view @click="handleRouterToAddFriend()">去添加好友</view>
    </mainContainer>
  </view>
</template>

<script>
export default {
  methods: {
    handleRouterToAddFriend() {
      uni.$router.push({
        name: "addFriend",
      });
    },
  },
};
</script>

<style>
page {
  background-image: linear-gradient(
    180deg,
    #79cffd 0%,
    #a7ecfa 20%,
    #ccfbf7 40%,
    #d0fff5 50%,
    #cffff5 100%
  );
  background-color: #79cffd;
}
</style>

<style lang="scss" scoped>
/* 左上角 */
.left-top-modules {
  left: 54rpx;
}
.left-top-modules .list-item {
  min-width: 300rpx;
  color: #ffffff;
  position: relative;
  font-size: 14px;
}

.left-top-modules .list-item::after {
  position: absolute;
  z-index: -1;
  left: 30rpx;
  top: 6rpx;
  right: 0;
  bottom: 6rpx;
  display: block;
  content: "";
  background-color: rgba(1, 168, 210, 0.5);
  border-radius: 0rpx 30rpx 30rpx 0rpx;
}
.left-top-modules .icon {
  width: 58rpx;
  height: 64rpx;
}

/* 右上角 */
.right-top-modules {
  right: 50rpx;
}
.right-top-modules .list-item .icon {
  width: 80rpx;
  height: 80rpx;
}
.right-top-modules .list-item .text {
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  color: #3d7679;
}
.right-top-modules .list-item .number {
  right: 0;
  top: 0;
  transform: translate3d(20%, -10%, 0);
  -webkit-transform: translate3d(20%, -10%, 0);
  padding: 0 4rpx;
  min-width: 22rpx;
  line-height: 30rpx;
  text-align: center;
  background-color: #ff6f56;
  border-radius: 30rpx;
  font-size: 8px;
  color: #fff;
}

/* 底部的树苗 */
.footer-modules {
  left: 0;
  right: 0;
  bottom: 0;
  height: 40%;
  /* border: 1px solid #000; */
}
.footer-modules::after {
  position: absolute;
  z-index: -1;
  left: -40%;
  right: -40%;
  bottom: 0;
  top: 20%;
  content: "";
  display: block;
  border-top-left-radius: 70%;
  border-top-right-radius: 70%;
  background-image: linear-gradient(
      180deg,
      rgba(125, 229, 137, 0.5) 0%,
      rgba(125, 229, 137, 0.18) 65%,
      rgba(97, 196, 126, 0.11) 78%,
      #45a273 100%,
      #45a273 100%
    ),
    linear-gradient(#4eccb0, #4eccb0);
}

.footer-modules .clock-modules {
  top: -20rpx;
  left: 50%;
  transform: translate3d(-50%, -110%, 0);
  -webkit-transform: translate3d(-50%, -110%, 0);
}

.footer-modules .clock-modules .clock-txt-icon {
  background-color: #ffb452;
  border: 6rpx solid #fff;
  border-radius: 56rpx;
  font-size: 11px;
  line-height: 52rpx;
  color: #fff;
}

.footer-modules .clock-modules .clock-txt-icon .footer-icon {
  left: 50%;
  bottom: 0;
  transform: translate3d(-50%, 100%, 0);
  -webkit-transform: translate3d(-50%, 100%, 0);
  width: 0px;
  height: 0px;
  border-top: 14rpx solid #fff;
  border-right: 14rpx solid #fff;
  border-bottom: 14rpx solid transparent;
  border-left: 14rpx solid transparent;
  z-index: -1;
}

.footer-modules .clock-modules .clock-txt-icon .footer-icon-inner {
  left: 50%;
  bottom: 1px;
  transform: translate3d(-50%, 100%, 0);
  -webkit-transform: translate3d(-50%, 100%, 0);
  width: 0px;
  height: 0px;
  border-top: 8rpx solid #ffb452;
  border-right: 8rpx solid #ffb452;
  border-bottom: 8rpx solid transparent;
  border-left: 8rpx solid transparent;
  z-index: 100;
}

.footer-modules .plant-btn {
  left: 50%;
  bottom: 20%;
  transform: translate3d(-50%, 0, 0);
  -webkit-transform: translate3d(-50%, 0, 0);
  width: 230rpx;
  line-height: 66rpx;
  background-color: #bfffe9;
  box-shadow: 0rpx 11rpx 29rpx 0rpx rgba(32, 106, 62, 0.2);
  border-radius: 30rpx;
  font-size: 19px;
  color: #187457;
  text-align: center;
}

.footer-modules .tomato-tree {
  left: 50%;
  bottom: 45%;
  transform: translate3d(-50%, 0, 0);
  -webkit-transform: translate3d(-50%, 0, 0);
}
</style>