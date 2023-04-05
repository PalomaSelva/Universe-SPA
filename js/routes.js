export default class Router{
    routes={}
    add(routeName,link){
        this.routes[routeName] = link    
    }
    route(e){
        e = e || window.event
        e.preventDefault()
        window.history.pushState({},'',e.target.href)
        this.handle()
        console.log(e.target)
        console.log(e.target.href)
    }
    handle(){
        const {pathname} = window.location
        const routePathname = this.routes[pathname] || this.routes[404] 

        fetch(routePathname)
        .then(data=> data.text())
        .then(html=>{
            let app = document.querySelector('#app')
            app.innerHTML=html
        })
        console.log('handle')
    
    
        
        
        
        
        
        
        
        /*

        const routePathname pega a rota do html a partir da propriedade do objeto.
        Se o pathname da página for igual ao de alguma propriedade do objeto routes, a constante vai armazenar o valor da propriedade
        exemplo-----------------------------------------------

        routes {
            '/':'../pages/home.html'
        } 

        Caso não haja um parâmetro com o mesmo nome do pathname, a constante vai armazenar o valor do parâmetro 404(rota da página 404)
        */


    }
}