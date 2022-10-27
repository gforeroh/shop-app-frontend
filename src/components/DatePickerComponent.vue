<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/es';

  export default {
    components: { DatePicker },
    props: {
      getOrderDate: Function,
      date: String
    },
    data() {
      return {
        time1: this.date
      };
    },
    methods: {
      someEvent() {
        this.getOrderDate(this.time1);
      }
    },
  };
</script>

<template>
  <div class="date-picker text-left">
    <span class="label label-success"><strong>Fecha de pedido: </strong> </span>
    <date-picker v-model="time1" valueType="format" @change="someEvent()" defaultValue="2022-10-18"></date-picker>
  </div>
</template>