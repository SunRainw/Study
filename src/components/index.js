import Vue from 'vue'
// import upperFirst from 'lodash/upperCase'
// import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // 其组件目录的相对路径
    './global',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /main.vue/
)
requireComponent.keys().forEach(fileName => {
    // console.info(fileName)
    /* // 获取组件配置
    const componentConfig = requireComponent(fileName)
    // 获取组件的PascaCase 命名
    const componentName = upperFirst(
        camelCase(
            // 获取和目录深度无关的文件名
            fileName.split('/').pop().replace(/\.\w+$/, '')
        )
    )

    // 全局注册组件
    Vue.component(
        componentName,
        // 如果这个组件选项是通过`export default` 导出的，
        // 那么就会优化使用`.default`，
        // 否则回退到使用模块的根
        componentConfig.default || componentConfig
    )
    自动加载 global 目录下的 main.vue 结尾的文件 */
    const componentConfig = requireComponent(fileName)
    // 兼容 import export 和 require module.export 两种规范
    const ctrl = componentConfig.default || componentConfig
    ctrl.name && Vue.component(ctrl.name, ctrl)

});