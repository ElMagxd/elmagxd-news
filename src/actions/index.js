export const updateReduxData = newData => {
   return {
      type: 'DATA_UPDATE',
      payload: newData
   }
}