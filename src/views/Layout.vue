<template>
    <!-- 顶部通栏 -->
    <AppTopnav />
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 吸顶头部组件 -->
    <AppHeaderSticky />
    <!-- 内容容器 -->
    <div class="main">
        <!-- 二级路由 -->
        <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <AppFooter />
</template>

<script>
import { useStore } from 'vuex';
import AppTopnav from '@/components/app-nav.vue';
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue';
import AppHeaderSticky from '@/components/app-header-sticky.vue';
export default {
    name: 'LayOut',
    components: {
        AppTopnav,
        AppHeader,
        AppFooter,
        AppHeaderSticky
    },
    setup() {
        const store = useStore();
        store.dispatch('category/getList')
        return {

        }
    }
}
</script>

<style scoped lang="less">
.main {
    height: 700px;
}
</style>
