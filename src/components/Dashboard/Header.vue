<template>
  <header class="header">
    <h3 class="m-0">DELIVERY-Li</h3>
    <div>
      <b-icon  class="mt-2 p-1" icon="building" font-scale="1.8"></b-icon>
      <b-icon  class="mt-2 p-1" id="popove" icon="person" font-scale="2"></b-icon>
      <b-popover
        target="popove"
        placement="bottomleft"
        title="Popover!"
        triggers="hover focus"
      >Perfil</b-popover>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.header {
  display: flex;
  flex-wrap: wrap;
  height: 50px;
  padding-left: 50px;
  align-items: center;
  justify-content: space-between;
  padding: auto 8px;
  overflow: hidden;
  border-bottom: 1px solid #00f;
  margin-bottom: 20px;
  
}
</style>