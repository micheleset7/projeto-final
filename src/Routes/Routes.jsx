import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Dicas from '../Pages/Dicas'
import Energia from '../Pages/Energia'
import Tecnologia from '../Pages/Tecnologia'
import Calculo from '../Component/Calculo'
import Footer from '../Component/Footer'

const Routes=()=>{
    return(
    
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/dicas'  component={Dicas}/>
        <Route path='/energia'  component={Energia}/>
        <Route path='/tecnologia'  component={Tecnologia}/>
        <Route path='/calculo'  component={Calculo}/>         
        <Route path='/footer'  component={Footer}/> 
    </Switch>
    </BrowserRouter>
    )}
export default Routes