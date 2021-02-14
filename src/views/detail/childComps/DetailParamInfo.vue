<template>
  <div v-if = "Object.keys(goodsParam).length !== 0" class="goodsParam">
    <table class="sizes">
      <tr v-for="(item, index) in goodsParam.sizes[0]" :key="index">
        <td>{{item[0]}}</td>
        <td>{{item[1]}}</td>
        <td>{{item[2]}}</td>
        <td>{{item[3]}}</td>        
      </tr>
    </table>
    <table class="infos">
      <tr v-for="(item, index) in goodsParam.infos" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goodsParam {
    padding: 10px 6px 18px 6px;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }
  table {
    width: 100%;
  }

  .sizes tr {
    display: flex;
  }

  .sizes tr:last-child {
    border-bottom: 3px solid rgba(100,100,100,.1);
  }

  .sizes tr td {
    flex: 1;
  }

  .sizes tr td, .infos tr td{
    padding: 10px 0;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .infos tr td:first-child{
    width: 60px;
  }

  .infos tr td:nth-child(2){
    color: var(--color-high-text);
  }

</style>