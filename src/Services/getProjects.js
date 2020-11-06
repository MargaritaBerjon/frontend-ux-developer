const getProjects = () => {
  return fetch('./projects-api.json')
    .then((response) => response.json())
    .then((data) => {
      return (data);
    });
};

export default getProjects;