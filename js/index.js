import Router from "./routes.js"
const router= new Router()
router.add('/','./pages/home.html')
router.add('/universe','./pages/universe.html')
router.add('/explore','./pages/explore.html')
router.add(404,'./pages/404.html')
router.handle()
window.route=()=> router.route() //Sempre passar o valor dentro de uma função pq é um evento