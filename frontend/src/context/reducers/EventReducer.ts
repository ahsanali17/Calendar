const EventsReducer = (state: any, {type, payload}: string | any) => {
 switch (type) {
   case 'push':
     return [...state, payload];
   case 'update':
     return state.map((id: number) => id === payload.id ? payload : id);
   case 'delete':
     return state.filter((id: number) => id !== payload.id);
   default:
     throw new Error();
 }
}

export default EventsReducer;
