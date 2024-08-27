import axios from 'axios'
import { Component } from 'react'


interface pokemon{
    name:string,
    url:string

}
interface AppState{
    data:pokemon[]
}


export default class Trr extends Component<{},AppState> {
    constructor(props:{}){
        super(props)
        this.state={
            data:[]
        }
        

    }
     getData=async()=>{
        try{
     const result=await axios.get("https://pokeapi.co/api/v2/pokemon/")
 
     this.setState({data:result.data.results})
        }catch(err){
            console.log(err);
        }
    }
    componentDidMount() {
       this.getData();
    }

  render() {
    const {data}=this.state
    console.log(data)
    return (
      <div>
        <h1>List of Pokmons</h1>
       {
        data && data.map((obj)=>{
            return <div>
                <a href={obj.url}>{obj.name}</a>
                </div>
        })
       }
      </div>
    )
  }
}
