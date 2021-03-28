<template>
  <div
    id="board"
    v-if="nodeMap.size > 0"
    ref="board"
    @mousedown="handleMouseDown()"
    @mouseup="handleMouseUp()"
    @mouseleave.prevent="handleMouseUp()"
    @mouseout="handleMouseOut()"
  >
    <div
      v-for="rowIndex in numberOfRows"
      :key="rowIndex"
      :id="getRowId(rowIndex)"
      class="node-row"
      :style="rowStyle"
    >
      <Node
        v-for="columnIndex in numberOfColumns"
        :key="columnIndex"
        :node="getNode(rowIndex, columnIndex)"
        :style="nodeStyle"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  START_MULTI_SELECTING,
  STOP_MULTI_SELECTING,
} from "../store/mutationTypes";
import Node from "./Node";
export default {
  data() {
    return {
      isMouseDown: false,
    };
  },
  props: {
    width: {
      type: Number,
      require: true,
      default() {
        return 1800;
      },
    },
    height: {
      type: Number,
      require: true,
      default() {
        return 1000;
      },
    },
  },
  components: {
    Node,
  },
  computed: {
    ...mapGetters(["nodeMap", "numberOfRows", "numberOfColumns"]),
    rowStyle() {
      return {
        height: `${this.height / this.numberOfRows}px`,
      };
    },
    nodeStyle() {
      return {
        width: `${this.width / this.numberOfColumns}px`,
      };
    },
  },
  methods: {
    getRowId: (index) => {
      return `row_${index}`;
    },
    getNode(rowIndex, columnIndex) {
      const key = `node_r${rowIndex}_c${columnIndex}`;
      const node = this.nodeMap.get(key);
      return node;
    },
    handleMouseDown() {
      this.isMouseDown = true;
    },
    handleMouseUp() {
      this.$store.commit(STOP_MULTI_SELECTING);
      this.isMouseDown = false;
    },
    handleMouseOut() {
      if (this.isMouseDown) {
        this.$store.commit(START_MULTI_SELECTING);
      }
    },
  },
};
</script>

<style>
#board {
  height: 1000px;
  width: 1800px;
  margin: auto;

  border: 0.5px solid lightgrey;
}
.node-row {
  display: flex;
}
</style>