/*
 * @Author: htl
 * @Date: 2021-01-26 17:00:28
 * @Description:
 */
module.exports = {
  title: '江湖',
  description: '个人笔记6666',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '武学', link: '/base/' }
    ],
    sidebar: {
      '/base/': ['', 'css', 'browser', 'skills', 'question']
    }
  }
};
