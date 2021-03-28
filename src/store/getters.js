const getters = {
    nodeMap(state) {
        return state.nodes;
    },
    numberOfRows(state){
        return state.numberOfRows;
    },
    numberOfColumns(state){
        return state.numberOfColumns;
    },
    boardState(state){
        return state.boardState;
    },
    currentDesignNodeType(state) {
        return state.currentDesignNodeType;
    },
    isMultiSelecting(state) {
        return state.isMultiSelecting;
    }
}

export default getters;