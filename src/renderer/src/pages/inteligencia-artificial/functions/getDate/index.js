export function getDate() {
    const date = new Date();
    const formatedDate = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${
      date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return formatedDate;
}