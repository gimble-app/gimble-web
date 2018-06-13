expect.extend({
  toContainDocAtPath(received, pathArgument) {
    const doc = received.doc(pathArgument);
    const pass = doc.data != null;
    if (pass) {
      return {
        message: () =>
          `expected a firestore entry not to be at "${pathArgument}"`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected a firestore entry at "${pathArgument}"`,
        pass: false,
      };
    }
  },
  toContainDocAtPathWith(received, pathArgument, data) {
    const doc = received.doc(pathArgument);
    const pass = doc.data != null;
    if (pass) {
      if(this.equals(doc.data, data)) {
        return {
          message: () =>
            `expected firestore entry not to have data: ${JSON.stringify(data)}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected firestore entry to have data: ${JSON.stringify(data)}`,
          pass: false,
        };
      }
    } else {
      return {
        message: () => `expected a firestore entry at "${pathArgument}"`,
        pass: false,
      };
    }
  },
});
