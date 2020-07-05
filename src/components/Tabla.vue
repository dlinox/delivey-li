<template>
  <div>
    <!-- User Interface controls -->
    <b-row class="d-flex justify-content-between">
      <b-col sm="3" md="3" class="my-1">
        <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
      </b-col>

      <b-col md="6" class="my-1">
        <b-input-group size="sm">
          <b-input-group-append>
            <b-button variant="info">
              <b-icon icon="search"></b-icon>
            </b-button>
          </b-input-group-append>
          <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Buscar"></b-form-input>
          <b-input-group-append>
            <b-button variant="danger" :disabled="!filter" @click="filter = ''">
              <b-icon icon="backspace"></b-icon>
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table

      show-empty
      small
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"

    >
      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
          variant="info"
        >
          <b-icon icon="pen"></b-icon>
        </b-button>
        <b-button size="sm" class="mr-1" variant="danger">
          <b-icon icon="trash"></b-icon>
        </b-button>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="fill"
      size="sm"
      class="my-0 w-50"
      pills
    ></b-pagination>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Tabla",
  props: ["items", "fields", "modal"],
  data() {
    return {

      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      filter: null,
      infoModal: {
        id: this.modal,
        title: "",
        content: ""
      }
    };
  },
  computed: {},
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    }
  }
};
</script>
<style lang="scss">

</style>

