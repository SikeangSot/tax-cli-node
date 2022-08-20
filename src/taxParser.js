const parser = (user, type) => {
  return function (line) {
    if (line.includes(user) && line.includes(type.toUpperCase())) {
      return parseInt(line.split(",")[3].trim() * 0.1);
    }
    return 0;
  };
};

export default parser;
