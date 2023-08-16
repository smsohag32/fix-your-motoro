const loadSingleService = async (id) => {
  const res = await fetch(`/api/services/${id}`);
};

export default loadSingleService;
