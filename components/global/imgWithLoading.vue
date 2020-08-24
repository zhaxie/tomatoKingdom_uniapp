<template>
  <view class="postion-relative imgCover">
    <!-- 加载中 -->
    <view class="d-flex align-items-center justify-content-center loading-img" v-if="isLoadingImg">
      <view class="iconfont icon-loading"></view>
    </view>
    <!-- 加载失败 -->
    <view
      class="d-flex flex-column align-items-center justify-content-center loading-img"
      style="color: #333;"
      v-if="imgLoadError"
    >
      <view class="iconfont icon-load-fail"></view>
    </view>
    <!-- 加载成功 -->
    <image
      class="imgCover"
      :src="src"
      :mode="mode || 'aspectFill'"
      :lazy-load="false"
      @error="imgLoadError"
      @load="imgLoadSuccess"
    />
  </view>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    mode: {
      type: String,
    },
    class: {
      type: String,
    },
    headerImg: {
      type: String,
    },
    type: {
      type: String,
    },
    disWithHost: {
      type: Boolean,
    },
  },
  data() {
    return {
      isLoadingImg: true,
    };
  },
  created() {
    console.info("1212", "");
  },
  methods: {
    imgLoadSuccess(e) {
      this.isLoadingImg = false;
      this.imgLoadError = false;
    },
    imgLoadError(e) {
      console.error("imgLoadError", e);
      
      this.isLoadingImg = false;
      this.imgLoadError = true;
    },
  },
};
</script>

<style scoped>
</style>