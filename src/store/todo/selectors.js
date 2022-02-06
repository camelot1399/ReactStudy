export const getTodoFromReducer = (state) => state.todo;
export const getTodoList = (state) => getTodoFromReducer(state).list;
export const getTodoFilter = (state) => getTodoFromReducer(state).filter;
export const getFilteredByStatusTodoList = (state) => {
    const list = getTodoList(state);
    const filter = getTodoFilter(state);

    if (filter.status === undefined) {
        return list;
    }

    return list.filter(({status}) => status === filter.status)
}