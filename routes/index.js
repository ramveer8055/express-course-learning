// const apiKeyMiddleware = require('../middleware/apiKey')

const router = require('express').Router()

// router.use(apiKeyMiddleware)

router.get('/', (req, res) => {
    // res.send("Hello World")
    // res.sendFile(path.resolve(__dirname)+'/index.html')
    res.render('index', {
        title: 'My Home Page'
    })
})
router.get('/about', (req, res) => {
    // res.send("Hello World")
    // res.sendFile(path.resolve(__dirname) + '/about.html')
    res.render('about', {
        title: 'About'
    })
})
router.get('/download', (req, res) => {
    // res.send("Hello World")
    res.download(path.resolve(__dirname) + '/about')
})

router.get('/api/products',(req, res) => {
    res.json([
        {
          id: 123,
          name: 'Chrome'  
        },
        {
            id: 124,
            name: 'Firefox'
        },
        {
            id: 125,
            name: 'Opera'
        },
    ])
})



module.exports=router