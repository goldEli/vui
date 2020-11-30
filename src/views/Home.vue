<template>
  <div class="box">
    <Topnav />
    <div class="banner">
      <h1>VUE</h1>
      <h2>UI components base on vue 3.0</h2>
      <p class="actions">
        <a href="https://github.com/goldEli/vui">GitHub</a>
        <router-link to="doc">Getting Started</router-link>
      </p>
      <div class="features">
        <ul>
          <li>
            <svg>
              <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>Base-on Vue 3</h3>
            <p>Using Vue 3 composition API</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-typescript"></use>
            </svg>
            <h3>Base-on Typescript</h3>
            <p>More secure and conveninent</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.banner {
  padding: 100px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff1e6;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #eddcd2;
      display: inline-block;
      $h: 36px;
      height: $h;
      line-height: $h;
      border-radius: 8px;
      padding: 0 12px;
    }
  }
}
.features {
  margin: 64px auto;
  width: 600px;
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 100px;
      display: grid;
      justify-content: start;
      align-content: space-around;
      grid-template-areas: "icon title" "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
</style>  