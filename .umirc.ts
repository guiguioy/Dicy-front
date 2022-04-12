import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index', title: '骰娘DLC配置' }],
  fastRefresh: {},
  title: '油盐社成都聚会项目组🤺  -  骰娘配置管理',
  proxy: {
    '/rest': {
      target: 'http://localhost:8081',
      changeOrigin: true,
      pathRewrite: { '^/rest': '' },
    },
  },
});
