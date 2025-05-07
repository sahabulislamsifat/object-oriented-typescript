{
  //** Type of operator in type guard */
  type Alphaneumeric = string | number;
  //   const guard = (
  //     parameterOne: string | number,
  //     parameterTwo: string | number
  //   ): string | number => {
  //     if (typeof parameterOne === "number" && typeof parameterTwo === "number") {
  //       return parameterOne + parameterTwo;
  //     } else {
  //       return parameterOne.toString() + parameterTwo.toString();
  //     }
  //   };
  const guard = (
    parameterOne: Alphaneumeric,
    parameterTwo: Alphaneumeric
  ): Alphaneumeric => {
    if (typeof parameterOne === "number" && typeof parameterTwo === "number") {
      return parameterOne + parameterTwo;
    } else {
      return parameterOne.toString() + parameterTwo.toString();
    }
  };

  //   const result = guard(20, 30);
  //   const result = guard("20", 30);
  const result = guard("20", "30");
  //   console.log(result);

  // In guard
  type GeneralUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: GeneralUser | AdminUser) => {
    if ("role" in user) {
      console.log(`This user is ${user.name} and role is ${user.role}`);
    } else {
      console.log(`This user is ${user.name}`);
    }
  };
  const normalUser: GeneralUser = {
    name: "Sifat",
  };
  const admin: AdminUser = {
    name: "Sahabul",
    role: "admin",
  };

  //   console.log(normalUser);
  console.log(admin);
}
