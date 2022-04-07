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

          case "ADD_TO_LIKED":
            filterStateCopy = {
              ...filterStateCopy,
              default: [
                ...filterStateCopy.default.map((item) =>
                  item._id === action.payload.itemId
                    ? { ...item, isLiked: true }
                    : item
                ),
              ],
            };
            break;

            case "REMOVE_FROM_LIKED":
              filterStateCopy = {
                ...filterStateCopy,
                default: [
                  ...filterStateCopy.default.map((item) =>
                    item._id === action.payload.itemId
                      ? { ...item, isLiked: false }
                      : item
                  ),
                ],
              };

              case "ADD_TO_HISTORY":
                filterStateCopy = {
                  ...filterStateCopy,
                  default: [
                    ...filterStateCopy.default.map((item) =>
                      item._id === action.payload.itemId
                        ? { ...item, isInHistory: true }
                        : item
                    ),
                  ],
                };
                break;
    
                case "REMOVE_FROM_HISTORY":
                  filterStateCopy = {
                    ...filterStateCopy,
                    default: [
                      ...filterStateCopy.default.map((item) =>
                        item._id === action.payload.itemId
                          ? { ...item, isInHistory: false }
                          : item
                      ),
                    ],
                  }; 

                  case "ADD_TO_PLAYLIST":
                    filterStateCopy = {
                      ...filterStateCopy,
                      default: [
                        ...filterStateCopy.default.map((item) =>
                          item._id === action.payload.itemId
                            ? { ...item, isInPlaylist: true }
                            : item
                        ),
                      ],
                    };
                    break;
        
                    case "REMOVE_FROM_PLAYLIST":
                      filterStateCopy = {
                        ...filterStateCopy,
                        default: [
                          ...filterStateCopy.default.map((item) =>
                            item._id === action.payload.itemId
                              ? { ...item, isInPlaylist: false }
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