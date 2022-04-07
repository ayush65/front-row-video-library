const filterReducer = (filterState, action) => {
    let filterStateCopy = { ...filterState };
    switch (action.type) {
      case "UPDATE_PRODUCTS":
        filterStateCopy = {
          ...filterStateCopy,
          videos: action.payload.videos,
          default: action.payload.videos,
        };
        break;

        case "ADD_TO_WATCHLIST":
          filterStateCopy = {
            ...filterStateCopy,
            default: [
              ...filterStateCopy.default.map((item) =>
                item._id === action.payload.itemId
                  ? { ...item, isWatchlater: true }
                  : item
              ),
            ],
          };
          break;
    
        case "REMOVE_FROM_WATCHLIST":
          filterStateCopy = {
            ...filterStateCopy,
            default: [
              ...filterStateCopy.default.map((item) =>
                item._id === action.payload.itemId
                  ? { ...item, isWatchlater: false }
                  : item
              ),
            ],
          };
  
      default:
        break;
    }
  
  
    return { ...filterStateCopy };
  };


export { filterReducer} ;