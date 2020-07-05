<template>
  <section>
    <h4>INICIO</h4>
    <b-row class="d-flex justify-content-around">
      <b-col class="mb-3" sm="12" md="6">
        <b-card class="shadow-sm">
          Pedidos del dia
          <br />
          <b-icon icon="egg-fried" font-scale="4"></b-icon>
        </b-card>
      </b-col>
      <b-col class="mb-3" sm="12" md="6">
        <b-card class="shadow-sm">
          Repaticores disponiples
          <br />
          <b-icon icon="truck" font-scale="4"></b-icon>
        </b-card>
      </b-col>
      <b-col class="mb-3" sm="12">
        <b-card class="shadow-sm">
          Pedidos Pendientes
          <br />
          <b-icon icon="egg" font-scale="4"></b-icon>
        </b-card>
      </b-col>
    </b-row>

    <h5 class="m-2">Lo mas <b>Pedido</b></h5>


     <b-card img-src="https://picsum.photos/125/125/?image=58" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <big>Nombre del Producto</big> <br>
        Categoria<br>
        <small>Descripcion del producto mas vendido</small>
      </b-card-text>
    </b-card>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>