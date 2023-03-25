export const formatDate = (date) => {
    const listDateAndTime = date.split("T");
    const listDate = listDateAndTime[0].split("-");
    
    const dateFormated = listDate[2] + "/" + listDate[1] + "/" + listDate[0];
    return dateFormated;
}

export const formatDateSave = (date) => {
    return date + "T13:00:00Z";
}

export const formatDateForInput = (date) => {
    const onlyNumbers = date.replace(/\D/g, '');
    const numbers = onlyNumbers.substring(0, 8);

    const day_user = numbers.substring(0, 2);
    const day = day_user < 31? day_user : 31;

    const month_user = numbers.substring(2, 4);
    const month = month_user < 12? month_user : 12;

    const year = numbers.substring(4);
    // const year = year_user < new Date().getFullYear()? 


    return (
        day + 
        (month? "/" + month : '') +
        (year? "/" + year : '')
    )
}