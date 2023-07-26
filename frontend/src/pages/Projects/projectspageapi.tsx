import { Skills } from "Type/Skills.tsx";

const updateHeaderOneProjects = async (headerOne: string) => {
  try {
    const updateFetch = await fetch(
      "http://localhost:8080/projects-page/header-one",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: headerOne,
        credentials: "include",
      }
    );
    const updateFetchJson = await updateFetch.json();
    if (updateFetchJson.status === "OK") {
      return updateFetchJson;
    } else {
      console.log(updateFetchJson.message);
      return updateFetchJson;
    }
  } catch (e) {
    console.log(e);
  }
};

const updateDescriptionOneProjects = async (descriptionOne: string) => {
  try {
    const updateFetch = await fetch(
      "http://localhost:8080/projects-page/description-one",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: descriptionOne,
        credentials: "include",
      }
    );
    const updateFetchJson = await updateFetch.json();
    if (updateFetchJson.status === "OK") {
      return updateFetchJson;
    } else {
      console.log(updateFetchJson.message);
      return updateFetchJson;
    }
  } catch (e) {
    console.log(e);
  }
};

const removeProject = async (id: string) => {
  try {
    const response = await fetch("http://localhost:8080/project/remove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: id,
      credentials: "include",
    });

    const responseJson = await response.json();
    if (responseJson.status === "OK") {
      return responseJson;
    } else {
      console.log(responseJson.message);
      return responseJson;
    }
  } catch (e) {
    console.log(e);
  }
};

const convertToEnum = (language: (typeof Skills)[number]) => {
  let enumValue = language.replace(/ /g, "_").toUpperCase();
  if (enumValue === "C++") {
    enumValue = "C_PLUS_PLUS";
  } else if (enumValue === "C#") {
    enumValue = "C_SHARP";
  } else if (enumValue === "ASP.NET") {
    enumValue = "ASP_NET";
  }
  return enumValue;
};

const addProject = async (
  title: string,
  description: string,
  language: Skills
) => {
  const model = {
    title: title,
    description: description,
    language: convertToEnum(language),
  };
  try {
    const response = await fetch("http://localhost:8080/project/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(model),
      credentials: "include",
    });

    const responseJson = await response.json();
    if (responseJson.status === "OK") {
      return responseJson;
    } else {
      console.log(responseJson.message);
      return responseJson;
    }
  } catch (e) {
    console.log(e);
  }
};

export {
  updateHeaderOneProjects,
  updateDescriptionOneProjects,
  removeProject,
  addProject,
};
