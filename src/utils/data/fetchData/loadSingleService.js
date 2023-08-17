const loadSingleService = async (id) => {
  const res = await fetch(`http://localhost:3000/api/services/${id}`);
  return res.json();
};

export default loadSingleService;
