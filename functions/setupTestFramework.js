expect.extend({
  toContainDocAtPath(received, argument) {
    const doc = received.doc(argument);
    const pass = doc.data != null;
    if (pass) {
      return {
        message: () =>
          `expected a firestore entry not to be at "${argument}"`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected a firestore entry at "${argument}"`,
        pass: false,
      };
    }
  }
});
