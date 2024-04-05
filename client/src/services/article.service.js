import axios from "axios";

const URL_API = "http://localhost:3000/article";

export const article = async (data, callback) => {
    await axios.post(URL_API, data)
    .then((res) => {
        callback(true, res.data.data)
    })
    .catch((err) =>{
        callback(false, err)
    })
}

export const getArticles = async (callback) => {
    await axios.get(URL_API)
        .then(res => {
            callback(res.data)
        }).catch(err => {
            console.log(err)
        })
}
export const getArticle = async (id, callback) => {
    try {
        const responseArticle = await axios.get(`${URL_API}/${id}`);
        const article = responseArticle.data.article;
    
        if (!article) {
          throw new Error('Article not found or no image available');
        }
    
        const responseImage = await axios.get(`${URL_API}/${id}/image`, {
          responseType: 'arraybuffer', // To get the image as a binary buffer
        });
        const imageBlob = new Blob([responseImage.data], { type: 'image/jpeg' });
        return {
          article,
          image: imageBlob,
        };
      } catch (error) {
        console.log(error);
        return {
          article: null,
          image: null,
        };
      }
}

export const updateArticle = async (id, data, callback) => {
    await axios.put(`${URL_API}/${id}`, data)
        .then(res => {
            callback(true, res.data)
        }).catch(err => {
            console.log(err)
        })
}
export const destroyArticle = async (id, callback) => {
    await axios.delete(`${URL_API}/${id}`)
        .then(res => {
            callback(true, res.data)
        }).catch(err => {
            console.log(err)
        })
}