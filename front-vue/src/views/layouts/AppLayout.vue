<template>
    <div>
        <topnav />
        <sidebar />
        <main>
            <div class="content-wrapper">
                <slot></slot>
            </div>
        </main>
        <footer-component />
    </div>
</template>
<script>
import TopNav from "./TopNav";
import Sidebar from "./Sidebar"
import Footer from "./Footer";
/*import {
    mapGetters,
} from "vuex";*/
export default {
  components: {
    topnav: TopNav,
    sidebar: Sidebar,
    'footer-component': Footer,
  },
  data() {
    return {
      show: false,
      menuItems: '',
    };
  },
  /*computed: {
    ...mapGetters(["getMenuType"])
  },*/
  /*mounted() {
    setTimeout(() => {
      document.body.classList.add("default-transition");
    }, 100);
  }*/
};
</script>
