export const filterCourses = (courses, filters) => {
  return courses.filter((course) => {
    const matchArea =
      !filters.area ||
      course.ämne.toLowerCase().includes(filters.area.toLowerCase());

    const priceNumber = parseFloat(
      course.price.replace("€", "").replace(",", ".")
    );
    const priceRanges = {
      free: priceNumber === 0,
      "0-100": priceNumber > 0 && priceNumber <= 100,
      "100-300": priceNumber > 100 && priceNumber <= 300,
      "300-500": priceNumber > 300 && priceNumber <= 500,
      "500+": priceNumber > 500,
    };
    const matchPrice = !filters.price || (priceRanges[filters.price] ?? true);

    const weeks = parseInt(course.duration);
    const durationRanges = {
      "1-3v": weeks >= 1 && weeks <= 3,
      "4-7v": weeks >= 4 && weeks <= 7,
      "8-11v": weeks >= 8 && weeks <= 11,
      "12-15v": weeks >= 12 && weeks <= 15,
      "15v+": weeks > 15,
    };
    const matchDuration =
      !filters.duration || (durationRanges[filters.duration] ?? true);

    return matchArea && matchPrice && matchDuration;
  });
};
