<template>
  <nav>
    <div class="menu-l shadow-sm" v-bind:style="silder">
      <div>
        <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
      </div>
      <hr class="my-2" />
      <b-list-group>
        <b-list-group-item>
          <b-link to="/dashboard/" class="w-100 py-2 px-3">
            <b-icon class="mr-2" icon="house"></b-icon>Inicio
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link to="/dashboard/articulos" class="w-100 py-2 px-3">
            <b-icon class="mr-2" icon="house"></b-icon>Articulos
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link to="/dashboard/pedidos" class="w-100 py-2 px-3">
            <b-icon class="mr-2" icon="cart2"></b-icon>Pedido
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link to="/dashboard/usuarios" class="w-100 py-2 px-3">
            <b-icon class="mr-2" icon="people"></b-icon>Usuarios
          </b-link>
        </b-list-group-item>
      </b-list-group>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      silder: {
        width: ""
      },
    };
  },
  props: ["show"],
  watch: {
    show() {
      if (this.show == false) {
        this.silder.width = "0px";
      } else {
        this.silder.width = "300px";
      }
    }
  },

};
</script>
<style lang="scss">
.menu-l {
  padding-top: 10px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  border-right: 1px solid #eee;
  overflow: hidden;
  transition: ease all 0.3s;
  .list-group {
    .list-group-item {
      display: flex;
      flex-wrap: wrap;
      padding: 0px;

      border: none;

      a {
        text-decoration: none;
        color: #000;
        &:hover {
          background: rgba(222, 222, 222, 0.3);
        }
      }
      a.router-link-exact-active {
        color: #00f;
        font: bold;

        border-right: 3px solid #00f;
      }
    }
  }
}
</style>

