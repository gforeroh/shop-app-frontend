

<template>
  <div class="order">
    <h3>Pedido # {{ orderNum }}</h3>
    <div v-if="show">
      <div class="row mb-3">
        <div class="col-6">
          <h5>Fecha de pedido: {{order.date_order}}</h5>
        </div>
        <div class="col-6">
          <h5>Cliente: {{order.client}}</h5>
          <h5>Documento: {{order.document}}</h5>
        </div>
      </div>
      <router-link class="btn btn-primary" to="/order">Pedidos</router-link>
      <TableComponent :items="products" :fields="fields" />
    </div>
  </div>
</template>

<script>
import { getOrderOnly } from "./../api/orders";
import TableComponent from "@/components/TableComponent.vue";

export default {
  name: "OrderView",
  data: () => ({
    error: false,
    products: [],
    order: {},
    fields: [],
    show: false,
  }),
  created() {
    this.getOrdersOut();
    this.getFieldsOrder();

    // console.log(this.order);
  },
  components: {
    TableComponent,
  },
  computed: {
    orderNum() {
      const route = this.$router.resolve({});
      return route.location.params.id;
    },
  },
  methods: {
    getOrder: getOrderOnly,
    async getOrdersOut() {
      try {
        const route = this.$router.resolve({});
        let res = await this.getOrder(route.location.params.id);
        const d = res.data.data;

        // console.log(res.data.data);
        const data = {
          id: d.id,
          link: d.links.self,
          ...d.attributes,
          // products: d.relationships.product,
        };

        const products = d.relationships.product.data.map((d) => {
          // console.log(d);
          const attributes = {
            id: d.id,
            ...d.attributes,
          };

          return attributes;
        });

        // console.log("Productos: ",products);

        this.products = products;
        this.order = data;
        this.show = true;
      } catch (error) {
        if (error.message.includes("403")) {
          this.error = true;
        }
        console.error(error.message);
      }
    },
    async getFieldsOrder() {
      const fields = [
        {
          key: "product_code",
          label: "Codigo de producto",
          // sortable: true
        },
        {
          key: "product",
          label: "Producto",
          // sortable: false
        },
        {
          key: "quantity",
          label: "Cantidad",
          // sortable: true,
        },
        {
          key: "price",
          label: "Precio",
          // sortable: true,
        }
      ];

      this.fields = fields;
    },
  },
};
</script>
