class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "CustomError"; // Set the name of the error
    }
  }
  