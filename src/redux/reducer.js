import {increase,decrease} from './actions';
import {State} from './store';

const reducer = (state=State,action)=>{
    switch (action.type){
        case 'up':return Object.assign({},state,{
            money:action.count
        });break;
        case 'down':return Object.assign({},state,{
            money:action.count
        });break;
        default:return state;break;
    }
}

export {reducer}