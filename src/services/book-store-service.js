export default class BookStoreService {
    data = [
        {
            id: 1,
            title: 'Prodaction',
            author: 'Susan',
            price: 32,
            coverImage: 'https://images.ua.prom.st/194344583_w300_h300_knigi74848475.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael',
            price: 45,
            coverImage: 'https://images.ua.prom.st/194344583_w300_h300_knigi74848475.jpg'
        }
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75) {
                    reject(new Error('Something is wrong'))
                } else {
                    resolve(this.data)
                }
            }, 700)
        })
    }
}