<template>
  <div>
    <h2>用户登录</h2>
    <div>
      <input type="text" v-model="username" />
       <svg-icon icon-class="denglong"></svg-icon><button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
export default {
    components: {
    Sidebar
  },
  data() {
    return {
      username: "admin"
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("user/login", { username: this.username })
        .then(() => {
          this.$router.push({
            path: this.$route.query.redirect || "/"
          });
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>