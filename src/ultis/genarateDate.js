import moment from "moment"
const formatDate = (timeObj) => {
    let day = timeObj.getDay() === 0 ? 'Chủ nhật' : `Thứ ${timeObj.getDay() + 1}`
    let date = `${timeObj.getDate()}/${timeObj.getMonth() + 1}/${timeObj.getFullYear()}`
    let time = `${timeObj.getHours()}:${timeObj.getMinutes()}`
    return `${day}, ${time} ${date}`
}

const genarateDate = () => {
    const today = new Date();
    const expireDay = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    return {
        today: formatDate(today),
        expireDay: formatDate(expireDay)
    };
};

export default genarateDate;