
//* Eğerki parametre olarak aldığı değer tanımlıysa o değeri geri döndüren ama tanımsız ise "bilinmiyor" metni döndüren fonksiyon

const checkValid = (value) => {
    return !value ? "Not Found" : value;
};
export default checkValid;