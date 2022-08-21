import XtxSkeleton from '@/components/library/xtx-skeleton.vue'
import XtxCarousel from '@/components/library/xtx-carousel.vue'
import XtxMore from '@/components/library/xtx-more.vue'

export default {
    install(app) {
        //在app上进行拓展，app提供component directive 函数
        //如果要挂载原型 app.config.globalProperties方式
        app.component(XtxSkeleton.name, XtxSkeleton);
        app.component(XtxCarousel.name, XtxCarousel);
        app.component(XtxMore.name, XtxMore)
    }
}