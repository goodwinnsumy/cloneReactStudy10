const initialStore = {

  auth: false,
  title: "Hello from redux! I'm not happy to be here...",
  counter: 0,
  posts:{
    loading: false,
    posts:[]
  },
  list:[1,2,6],
  comments:{
    loading: false,
    comments:[]
  }

};

export default initialStore;