<template>
  <section>
    <b-container class="d-flex justify-content-center">
      <b-row class="cont-login rounded overflow-hidden" lg="7" md="8">
        <b-col lg="5" md="5" class="py-4">
          <b-avatar class="mb-3" text="DE" size="6rem"></b-avatar>
          <h3 class="mb-3">INGRESAR</h3>
          <b-form @submit="onSubmit" v-if="show">
            <b-input-group class="my-2">
              <b-input-group-prepend is-text>
                <b-icon icon="envelope" variant="primary"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                id="correo"
                v-model="form.email"
                type="email"
                required
                placeholder="Ingrese su correo"
              ></b-form-input>
            </b-input-group>

            <b-input-group class="my-2">
              <b-input-group-prepend is-text>
                <b-icon icon="shield-lock" variant="primary"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                id="password"
                v-model="form.pass"
                type="password"
                required
                placeholder="Ingrese su contraseña"
              ></b-form-input>
            </b-input-group>

            <b-button type="submit" variant="primary" block>Submit</b-button>
          </b-form>
        </b-col>
        <b-col
          lg="7"
          md="7"
          class="msj d-flex align-items-center justify-content-center flex-wrap py-4"
        >
          <h2 class="w-100">Bienvenido</h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla consequuntur inventore assumenda deleniti.
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        pass: ""
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
.cont-login {
  width: 85%;
  -webkit-box-shadow: 0px 0px 20px -8px $primary;
  -moz-box-shadow: 0px 0px 20px -8px $primary;
  box-shadow: 0px 0px 20px -8px $primary;
}
.input-group {
  .input-group-prepend {
    .input-group-text {
      background: #fff;
    }
  }
  input {
    border-left: none;
  }
  input:focus{
     box-shadow: none;
  }
}
.msj {
  color: #fff;
  //background-color: #0093e9;
  background: $primario
}
@media screen and(max-width: 720px) {
  .cont-login {
    width: 100%;
  }
}
</style>