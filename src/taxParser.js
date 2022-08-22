const parser = (user, type) => {
  return function (line) {
    if (line.includes(user) && line.includes(type.toUpperCase())) {
      return parseFloat(line.split(",")[3].trim());
    }
    return 0;
  };
};

export default parser;
