# Jest
Jest 是功能最全的测试运行器。它所需的配置是最少的，默认安装了 JSDOM，内置断言且命令行的用户体验非常好，包含了下面的所有功能
# Mocha + Chai + Sinon
Mocha 也是一个测试运行器。没有内置断言命令，需要选择一个断言库，Chai 是一个流行的断言库，经常和 Mocha 配合使用。通常需要模拟回调，你可能也想把 Sinon 用于创建间谍和存根。
# 介绍
vue为单元测试提供的一些API： https://vue-test-utils.vuejs.org/zh/api/
vue提供了一些测试用例来参考： https://vue-test-utils.vuejs.org/zh/guides/
# 说明
1. 通过vue create命令来创建，有选择单元测试选项，推荐是Jest
1. 运行yarn test:unit