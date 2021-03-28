<template>
  <div class="board">
      <div v-for="rowIndex in numberOfRows" :key="rowIndex" :id="getRowId(rowIndex)">
        <Node v-for="columnIndex in numberOfColumns" :key="columnIndex" :boardNodeId="getBoardNodeId(rowIndex, columnIndex)"/>
      </div>
  </div>
</template>

<script>
import Node from "./Node";
export default {
    components: {
        Node,
    },
    props: {
        numberOfColumns: {
            require: true,
            type: Number,
            default(){
                return 20;
            }
        },
        numberOfRows: {
            require: true,
            type: Number,
            default(){
                return 15;
            }
        },
    },
    methods: {
        getRowId: (index) => {
            return `row_${index}`;
        },
        getBoardNodeId: (rowIndex, columnIndex) => {
            return `node_r${rowIndex}_c${columnIndex}`;
        }
    }
}
</script>

<style>

</style>