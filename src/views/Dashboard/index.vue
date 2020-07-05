<template>
  <section>
    <div class="main" v-bind:style="main">
      <b-button class="show mx-2" @click="show = !show" variant="light" size="sm">
        <b-icon icon="chevron-double-right" v-if="show== false"></b-icon>
        <b-icon icon="chevron-double-left" v-if="show== true"></b-icon>
      </b-button>

      <Header />
      <b-container>
        <router-view />
      </b-container>
    </div>

    <NavBar :show="show" />
  </section>
</template>

<script>
import NavBar from "@/components/Dashboard/NavBar.vue";
import Header from "@/components/Dashboard/Header.vue";
export default {
  name: "Dashboard",
  components: {
    NavBar,
    Header
  },
  data() {
    return {
      show: true,
      main: {
        marginLeft: ""
      }
    };
  },
  methods: {},
  watch: {
    show() {
      if (this.show == false) {
        this.main.marginLeft = "0px";
      } else {
        this.main.marginLeft = "300px";
      }
    }
  }
};
</script>

<style lang="scss">
.main {
  transition: ease all 0.3s;
  margin-left: 300px;
  position: relative;
  
  .show {
    position: absolute;
    top: 8px;
    left: 0;
  }
}
</style>