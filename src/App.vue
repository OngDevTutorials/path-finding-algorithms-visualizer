<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Board />
</template>

<script>
import { mapGetters } from "vuex";
import { SET_NODE_MAP } from "./store/mutationTypes";
import Board from "./components/Board";

export default {
  name: "App",
  components: {
    Board,
  },
  computed: {
    ...mapGetters(["nodeMap", "numberOfRows", "numberOfColumns"]),
  },
  mounted() {
    const nodes = new Map();
    for (let rowIndex = 1; rowIndex <= this.numberOfRows; rowIndex++) {
      for (
        let columnIndex = 1;
        columnIndex <= this.numberOfColumns;
        columnIndex++
      ) {
        const key = this.generateNodeId(rowIndex, columnIndex);
        const node = {
          id: key,
          status: "default",
          previousNode: null,
          path: null,
          direction: null,
          distance: Infinity,
          totalDistance: Infinity,
        };
        nodes.set(key, node);
      }
    }
    this.$store.commit(SET_NODE_MAP, {
      nodes,
    });
  },
  methods: {
    generateNodeId: (rowIndex, columnIndex) => {
      return `node_r${rowIndex}_c${columnIndex}`;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
