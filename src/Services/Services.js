import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com'

// ? Данные котегории

const getCategories = () => {
    return axios.get('/products/categories')
}

const allProducts = () => {
    return axios.get('/products')
}

const getCatigoryProduct = (product) => {
    return axios.get(`/products/category/${product}`)
}

const postOrderProduct = (product) => {
    console.log("product>>>", product);
    const token = '6287998440:AAE_rAikzFxwp9s_mIBgo6fPwCvnXokUCWk'
    const chat_id = '1484046186'
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`
    return axios.post(api_url, {
        parse_mode: 'HTML',
        text: `<b>Новый Заказ</b>\n ФИО
        ${product.name}\n товар:
        ${product.address}\n телефон номер заказчика:
        ${product.phone}\n название товара:
        ${product.title}`,
        chat_id
    })
}

export const services = {
    getCategories,
    allProducts,
    getCatigoryProduct,
    postOrderProduct
}