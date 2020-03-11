const dataReducer = (state = null, action) => {
   switch(action.type) {
      case 'DATA_UPDATE':
         return action.payload;
      default:
         return state;
   }
}

export default dataReducer;