<template>
  <section>
    <h4>USUARIOS</h4>
    <p class="ml-1 mb-1">Añadir</p>

    <b-button size="sm" class="mr-2" variant="outline-primary" pill>
      Administrador
      <b-icon class="ml-2" icon="plus-square-fill" aria-hidden="true"></b-icon>
    </b-button>

    <b-button size="sm" class="mr-2" variant="outline-primary" pill>
      Repartidor
      <b-icon class="ml-2" icon="plus-square-fill" aria-hidden="true"></b-icon>
    </b-button>
  
    <Tabla class="t-admin shadow p-3 mt-3 rounded" :items="items" :fields="fields" modal="admin" />
    <Tabla class="t-rep shadow p-3 mt-3 rounded" :items="datos" :fields="header" modal="rep" />
  </section>
</template>

<script>
import Tabla from '@/components/Tabla.vue'
export default {
  name:'Usuarios',
  components: {
    Tabla,
  },
  data() {
    return {
      items: [
        { age: 40, name:"Dickerson", apell: "Macdonald"  },
        { age: 21, name:"Larsen", apell: "Shaw"  },
        { age: 89, name:"Geneva", apell: "Wilson"  },
        { age: 38, name:"Jami", apell: "Carney"  },
        { age: 27, name:"Essie", apell: "Dunlap"  },
        { age: 40, name:"Thor", apell: "Macdonald"  },
        { age: 26, name:"Mitzi", apell: "Navarro"  },
        { age: 22, name:"Genevieve", apell: "Wilson"  },
        { age: 38, name:"John", apell: "Carney"  },
        { age: 29, name:"Dick", apell: "Dunlap"  }
      ],
      fields: [
        {
          key: "name",
          label: "Nombre",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "apell",
          label: "Apellido",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          class: "text-center"
        },
        { key: "actions", label: "Actions" }
      ],

      datos: [
        { age: 40, name: "Denis" },
        { age: 21, name: "Laura"},
        { age: 89, name: "Mabel" },
        { age: 38, name: "Juan" },
        { age: 27, name: "Lino" },
        { age: 40, name: "Deysi" },
        { age: 26, name: "Deisy"},
        { age: 22, name: "Medali" },
        { age: 38, name: "Dania"},
        { age: 29, name: "Zulema" }
      ],
      header: [
        {
          key: "name",
          label: "Nombre",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          class: "text-center"
        },
        { key: "actions", label: "Actions" }
      ],
      id_modal:'',
    };
  },

};
</script>

<style lang="scss">
.t-admin {
  border-top: 3px solid #00f;
}
.t-rep{
  border-top: 3px solid #f0f;
}

</style>