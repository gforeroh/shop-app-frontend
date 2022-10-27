

<template>
  <div class="order">
    <h1>Lista de pedidos</h1>
    <DatePickerComponent :getOrderDate="getOrderDate" :date="date" />
    <div v-if="show">
      <TableComponent :items="orders" :fields="fields" :key="componentKey" />
    </div>
  </div>
</template>

<script>
import { getOrdersAll, getOrdersDate } from "./../api/orders";
import TableComponent from "@/components/TableComponent.vue";
import DatePickerComponent from "@/components/DatePickerComponent.vue";

export default {
  name: "OrdersView",
  data() {
    return this.initialState();
  },
  mounted() {
    this.getOrdersOut();
  },
  created() {
    this.getFieldsOrder();
  },
  components: {
    TableComponent,
    DatePickerComponent,
  },
  methods: {
    initialState() {
      return {
        error: false,
        orders: [],
        fields: [],
        show: false,
        date: null,
        componentKey: 0
      };
    },
    forceRerender() {
      this.componentKey += 1
    },
    getOrders: getOrdersAll,
    getOrdersDate: getOrdersDate,
    async getOrdersOut() {
      try {
        let res = await this.getOrders();
        const data = res.data.data.map((d) => {
          const attributes = {
            id: d.id,
            link: d.links.self,
            ...d.attributes,
          };

          return attributes;
        });

        this.orders = data;
        this.show = true;
        this.forceRerender();
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
    async getOrderDate(date) {
      try {
        if (date) {
          let res = await this.getOrdersDate(date);
          const data = res.data.data.map((d) => {
            const attributes = {
              id: d.id,
              link: d.links.self,
              ...d.attributes,
            };

            return attributes;
          });

          this.orders = data;
          this.show = true;
          this.forceRerender();
        } else {
          await this.getOrdersOut();
        }
      } catch (error) {
        if (error.message.includes("403")) {
          this.error = true;
        }
      }
    },
  },
};
</script>
