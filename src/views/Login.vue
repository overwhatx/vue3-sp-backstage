<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="index-box">
    <!-- @finish 提交表单且数据验证成功后回调事件 -->
    <!--  @finishFailed 提交表单且数据验证失败后回调事件 -->
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        name="username"
        :rules="[{ required: true, message: '请输入用户名!' }]"
      >
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember" class="checkboxText">
            记住密码
          </a-checkbox>
        </a-form-item>
      </a-form-item>

      <a-form-item>
        <a-button
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import API from '@/api'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
// 实例化路由
const router = useRouter()
const formState = reactive({
  username: '',
  password: '',
  remember: false
})

// 提交表单且数据验证成功后回调事件
const onFinish = async (values) => {
  // 解构出需要的数据
  let { username, password } = values
  console.log(username, password)
  let { data: res } = await API.login.signIn({ username, password })
  console.log(res)
  if (res.meta.status != 200) {
    return message.warning(res.meta.msg)
  }
  // 登录成功
  message.success(res.meta.msg)
  router.push('/home')
}

// 提交表单且数据验证失败后回调事件
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

// 通过计算属性监听两个输入框是否都输入了值 判断登录按钮的禁用与开启
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>

<style lang="scss" scoped>
.index-box {
  width: 100%;
  height: 100%;
  background: url(../assets/images/loginBg.png) no-repeat 100% 50% / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-form {
    width: 500px;
    background-color: #1f1d1e34;
    padding: 20px;
    padding-top: 40px;
    border-radius: 15px;
  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
.checkboxText {
  color: #fff;
}
</style>
