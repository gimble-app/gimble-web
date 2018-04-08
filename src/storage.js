export const loadState = () => {
  try {
    const serialised = localStorage.getItem("state");

    if(serialised === null) {
      return undefined;
    }

    return JSON.parse(serialised);
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serialised = JSON.stringify(state);
    localStorage.setItem("state", serialised);
  } catch (err) {
    return undefined;
  }
}
