const periodOptions = [
  { key: "1", text: "Current", value: "1" },
  { key: "2", text: "Monthly", value: "2" },
  { key: "3", text: "Quarterly", value: "3" },
  { key: "4", text: "Yearly", value: "4" }
];
const monthOptions = [
  { key: "9999", text: "Current", value: "" },
  { key: "1", text: "Jan", value: "1" },
  { key: "2", text: "Feb", value: "2" },
  { key: "3", text: "Mar", value: "3" },
  { key: "4", text: "Apr", value: "4" },
  { key: "5", text: "May", value: "5" },
  { key: "6", text: "Jun", value: "6" },
  { key: "7", text: "Jul", value: "7" },
  { key: "8", text: "Aug", value: "8" },
  { key: "9", text: "Sep", value: "9" },
  { key: "10", text: "Oct", value: "10" },
  { key: "11", text: "Nov", value: "11" },
  { key: "12", text: "Dec", value: "12" }
];
const quarterOptions = [
  { key: "9999", text: "Current", value: "" },
  { key: "1", text: "Quarter 1", value: "1" },
  { key: "2", text: "Quarter 2", value: "2" },
  { key: "3", text: "Quarter 3", value: "3" },
  { key: "4", text: "Quarter 4", value: "4" }
];
const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

module.exports = {
  periodOptions,
  monthOptions,
  quarterOptions,
  style
};
