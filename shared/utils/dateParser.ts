export const parseDate = (date: string): string => {
  try {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;
  } catch (err) {
    return "Fecha invalida";
  }
};
