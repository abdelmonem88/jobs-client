interface thunkAPI {
  getState: () => {
    (): any;
    new (): any;
    user: { (): any; new (): any; user: { (): any; new (): any; token: any } };
  };
}

const authHeader = (thunkAPI: thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export default authHeader;
