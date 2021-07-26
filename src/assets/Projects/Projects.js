const Projects = [
    {
        id:7,
        name:'Parking App',
        img:'ParkingAppImg',
        desc:'This is my first project made with Python and Django. It was made as a submission for the Lowest Rated Parking Lots Challenge by AirGarage. It basically displays the lowest rated parking lots in an area entered in the search bar. The score is determined by the bayesian average between the rating and the review count. This was made during a 5 day period, in which I learned about Django and incorporated that skill to what I already knew about Python, learned about how to incorporate React and Redux to a Django app using Webpack, and then made the app using Django to get the api requests and send them to the frontend. The styling is very basic and was made with Bootstrap in order to save time. Working on a project like this in such a short time was a great practice though, and I plan to make more projects with Django in the future.',
        api:['Yelp Api'],
        stack:[
            {svg:'PythonSvg', name:'Python'},
            {svg:'DjangoSvg', name:'Django'},
            {svg:'ReduxSvg',name:'Redux'},
            {svg:'ReactJsSvg', name:'ReactJs'},
            {svg:'JsSvg', name:'JavaScript'},
        ],
        styled: [{svg:'BootstrapSvg',name:'Bootstrap'}],
        deployed: [{svg:'HerokuSvg', name:'Heroku'}],
        link:'https://parking-app-dj.herokuapp.com/'
    },
    {
        id:6,
        name:'Adalov Clothes',
        img:'AdalovImg',
        desc:'This E-commerce site is the final project made for the Henry Full Stack Web Developer Bootcamp. It was my first group project, in which I worked mainly on the backend.',
        api: ['Mercado Pago'],
        stack: [
            {svg: 'MongoSvg',name:'MongoDb'},
            {svg:'ExpressSvg',name:'ExpressJs'},
            {svg:'ReduxSvg',name:'Redux'},
            {svg:'ReactJsSvg',name:'ReactJs'},
            {svg:'JsSvg',name:'JavaScript'},
            {svg: 'NodeSvg',name:'NodeJs'},
        ],
        styled:[{svg:'TailwindSvg', name:'TailwindCSS'}],
        deployed: [{svg:'HerokuSvg', name:'Heroku'}, {svg:'VercelSvg', name:'Vercel'}],
        link:'https://adalov-front.vercel.app/'
    },
    {
        id:5,
        name:'Henry`s Kitchen',
        img:'HenrysKitchenImg',
        desc: 'This was the second to last project made for the Henry Full Stack Web Developer Bootcamp. This page displays recipes from the spoonacular api and a postgresSQL database. The main page grid has pagination and a Search bar, that allows users to filter recipes by name or diet, and order them by name or score. More recipes can be added to the database using the form in the "Publish" section.',
        styled:[{svg:'SassSvg', name:'Sass'}],
        stack: [
            {svg: 'PostgresqlSvg',name:'PostgresQL'},
            {svg:'ExpressSvg',name:'ExpressJs'},
            {svg:'ReduxSvg',name:'Redux'},
            {svg:'ReactJsSvg',name:'ReactJs'},
            {svg:'JsSvg',name:'JavaScript'},
            {svg: 'NodeSvg',name:'NodeJs'},
        ],
        api:['Spoonacular'],
        deployed:[{svg:'HerokuSvg', name:'Heroku'}, {svg:'VercelSvg', name:'Vercel'}],
        link:'https://henrys-kitchen.vercel.app/'
    },
    {
        id:4,
        name:'Weather Network',
        img:'WeatherNetworkImg',
        desc:'This simple app was the first React project we worked on at the Henry Full Stack Web Developer Bootcamp. It displays the weather from different cities of the world. I decided revisit this project and add a little bit more to it. First I reworked the styles with plain CSS, and then I added the feature of being able to get the weather information of your city using geolocation.',
        styled:[{svg:'CssSvg', name:'CSS'}],
        stack:[
            {svg:'ReduxSvg',name:'Redux'},
            {svg:'ReactJsSvg',name:'ReactJs'},
            {svg:'JsSvg',name:'JavaScript'},
            {svg: 'NodeSvg',name:'NodeJs'},
        ],
        api:['Open Weather Api'],
        deployed:[{svg:'VercelSvg', name:'Vercel'}],
        link:'https://weather-network-alpha.vercel.app/'
    },
    {
        id:3,
        name:'Calculator App',
        img:'CalculatorImg',
        desc:'This is one of the challenges from frontendmentor.io I finished lately. It is a calculator app with three different color schemes, made with plain HTML, CSS, and JS. From now and then I like to take on the challenge of working with no frontend framework, just a plain static page. This was a great opportunity to work on that, and I had a lot of fun making it.',
        styled:[{svg:'CssSvg', name:'CSS'}],
        stack:[
            {svg:'HtmlSvg',name:'HTML'},
            {svg:'JsSvg',name:'JavaScript'},
        ],
        api: null,
        deployed: [{svg:'GithubSvg', name:'GitHub Pages'}],
        link:'https://germanchrystan.github.io/Calculator/'
    },
    {
        id:2,
        name:'Loop Studios',
        img:'LoopStudiosImg',
        desc:'This is one of the challenges from frontendmentor.io I finished lately. It is the front page of a VR Studio. There where a lot of CSS concepts put into practice in this page, mainly grids, flex box containers, image filters, and the use of a hamburger menu. Coding with plain HTML, CSS and JS for me is a great way to keep improving my skills outside of any framwork or library.',
        stack:[
            {svg:'HtmlSvg',name:'HTML'},
            {svg:'JsSvg',name:'JavaScript'},
        ],
        styled:[{svg:'CssSvg', name:'CSS'}],
        api:null,
        deployed: [{svg:'GithubSvg', name:'GitHub Pages'}],
        link:'https://germanchrystan.github.io/loop-studios/'
    },
]
const oslo = {
    id:1,
    name:'Oslo Café',
    img:'',
    desc:'',
    stack:[
        {svg:'HtmlSvg',name:'HTML'},
        {svg:'JsSvg',name:'JavaScript'},
    ],
    styled:[{svg:'LessSvg', name:'Less'}],
    api:null,
    deployed:[{svg:'GithubSvg', name:'GitHub Pages'}],
}

export default Projects;