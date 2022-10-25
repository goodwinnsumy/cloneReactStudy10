export const INC = "INC"
export const DEC = "DEC"
export const RAND = "RAND"
export const RESET = "RESET"


export const incActionCreator = () => {
  return {
    type: INC
  }
};

export const decActionCreator = () => {
  return {
    type: DEC
  }
}

export const randActionCreator = (value) => {
  return {
    type: RAND ,
    payload: value
  }
}