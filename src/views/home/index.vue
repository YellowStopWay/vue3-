<template>
    <!-- 首页入口 -->
    <div class="home-entry">
        <div class="container">
            <!-- 左侧分类 -->
            <HomeCategory />
            <!-- 轮播图 -->
            <HomeBanner />
            <!-- 精选好物 -->
            <HomeNew />
            <HomeHot />
        </div>
    </div>
</template>

<script>
import HomeNew from '@/views/home/components/home-new.vue'
import HomeCategory from './components/home-category.vue';
import HomeBanner from './components/home-banner.vue';
import HomePanel from './components/home-panel.vue';
import XtxMore from '@/components/library/xtx-more.vue';
import HomeHot from './components/home-hot.vue';
export default {
    name: 'HomePage',
    components: {
        HomeCategory,
        HomeBanner,
        HomePanel,
        XtxMore,
        HomeNew,
        HomeHot
    }
}
</script>

<style scoped lang="less">
</style>
