// 分类模块
import { topCategory } from "@/api/constants"
import { findAllCategory } from "@/api/category"
export default {
  namespaced: true,
  state() {
    return {
      //分类信息集合，依赖topCategory重新设置，保证初始化就有数据,避免白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  //修改分类数据的方法
  mutations: {
    //payload为有效数据
    setList(state, payload) {
      state.list = payload
    },
    //定义show和hide控制open
    show(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  //从接口获取分类数据
  actions: {
    async getList({ commit }) {
      //获取分类数据
      const data = await findAllCategory()
      //给每个分类加上open，以控制二级分类的展示
      data.result.forEach(top => top.open = false)
      //修改分类数据
      commit('setList', data.result)
    }
  }
}
