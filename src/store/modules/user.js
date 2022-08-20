export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '', // 头像
        nickName: '', // 昵称
        account: '', // 账号
        mobole: '', // 手机
        token: ''
      }
    }
  },
  mutations: {
    // 提供修改用户信息的方法，payload就是用户信息对象
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
