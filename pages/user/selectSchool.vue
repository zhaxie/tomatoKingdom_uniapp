<template>
  <view>
    <navBar></navBar>
    <!-- <searchAndSelectByList
      id="contentList"
      :initOptions="initOptions_selectSchool"
      @search="handleGetAndSetSchoolList"
      @selectedItem="handleSeletedSchool"
    ></searchAndSelectByList>-->
  </view>
</template>

<script>
import searchAndSelectByList from "@/components/searchAndSelectByList";

export default {
  components: {
    searchAndSelectByList,
  },
  data() {
    return {
      initOptions_selectSchool: {
        placeholder: "请输入学校名称",
      },
    };
  },
  onLoad() {
    this.handleGetAndSetSchoolList({
      detail: {
        keyword: "",
      },
    });
  },

  onReachBottom: function () {
    this.handleGetAndSetSchoolList({
      detail: {
        keyword: "",
        isGetNewList: false,
      },
    });
  },
  methods: {
    async handleGetAndSetSchoolList(e) {
      try {
        const { keyword, isGetNewList } = e.detail;
        const schoolData = this.initOptions_selectSchool;

        if (isGetNewList === true) {
          schoolData.currentPage = null;
          schoolData.lastPage = null;
        }

        const _currentPage = schoolData.currentPage || 0;
        const _lastPage = schoolData.lastPage || 1;

        if (_currentPage >= _lastPage) {
          console.info("最后一页了");
          return false;
        }

        const { res } = await uni.$ajax({
          apiKey: "searchSchool",
          data: {
            page: _currentPage - 1 + 2,
            name: keyword,
          },
        });

        const {
          current_page: currentPage,
          last_page: lastPage,
          data: schollList,
        } = res;

        const existedDataList = schoolData.dataList || [];

        const dataObj = {
          dataList:
            isGetNewList === true
              ? schollList
              : existedDataList.concat(schollList),
          currentPage: Number(currentPage),
          lastPage: Number(lastPage),
        };

        this.initOptions_selectSchool = Object.assign(
          schoolData,
          dataObj
        );

      } catch (error) {
        uni.$toast({
          msg: error,
        });
      }
    },

    handleSeletedSchool(e) {
      const schoolDetails = e.detail;

      uni.$router.back(-1, schoolDetails);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>