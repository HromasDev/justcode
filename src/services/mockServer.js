export async function mockServer({ language, code }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (code.includes("error")) {
          resolve({
            status: "error",
            error: "SyntaxError: Unexpected token"
          });
        } else {
          resolve({
            status: "success",
            output: `Hello, ${language} world!\nYour code:\n${code}`
          });
        }
      }, 1000);
    });
  }
