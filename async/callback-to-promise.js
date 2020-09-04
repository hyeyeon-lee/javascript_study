class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "hyeyeon" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "hyeyeon") {
          resolve({ name: "hyeyeon", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      });
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then((user) => {
    userStorage
      .getRoles(user)
      .then((userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      })
      .catch(console.log);
  })
  .catch(console.log);
