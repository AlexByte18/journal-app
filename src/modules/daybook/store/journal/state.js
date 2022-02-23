

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Praesent venenatis metus at tortor pulvinar varius. Sed libero. Vestibulum eu odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nam pretium turpis et arcu.',
            picture: null

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
            picture: null

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. ',
            picture: null

        }
    ]
})