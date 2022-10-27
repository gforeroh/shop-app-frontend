

<template>
  <div class="order">
    <h1>Lista de pedidos</h1>
    <div v-if="show">
      <TableComponent :items="orders" :fields="fields" />
    </div>
  </div>
</template>

<script>
import { getOrdersAll } from "./../api/orders";
import TableComponent from "@/components/TableComponent.vue";

export default {
  name: "OrdersView",
  data: () => ({
    error: false,
    orders: [],
    fields: [],
    show: false,
  }),
  created() {
    this.getOrdersOut();
    this.getFieldsOrder();
  },
  components: {
    TableComponent,
  },
  methods: {
    getOrders: getOrdersAll,
    async getOrdersOut() {
      try {
        let res = await this.getOrders();
        const data = res.data.data.map((d) => {
          // console.log(d.links.self);
          const attributes = {
            id: d.id,
            link: d.links.self,
            ...d.attributes,
          };

          return attributes;
        });

        console.log(data);
        this.orders = data;
        this.show = true;
      } catch (error) {
        if (error.message.includes("403")) {
          this.error = true;
        }
      }
    },
    async getFieldsOrder() {
      const fields = [
        {
          key: "id",
          label: "# Pedido",
          // sortable: true
        },
        {
          key: "client",
          label: "Cliente",
          // sortable: false
        },
        {
          key: "document",
          label: "Documento",
          // sortable: true,
        },
        {
          key: "date_order",
          label: "Fecha Pedido",
          // sortable: true
          // variant: "info",
        },
      ];

      this.fields = fields;
    },
  },
};
</script>
