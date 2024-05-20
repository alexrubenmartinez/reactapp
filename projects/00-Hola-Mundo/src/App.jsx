import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName:'alexrubenmartinezp',
        name:'Alex Ruben Martinez Pumallihua',
        isFollowing:true
    },
    {
        userName:'midudev',
        name:'Miguel Ángel Durán',
        isFollowing:true
    },
    {
        userName:'PacoHdezs',
        name:'Paco Hdez',
        isFollowing:false
    }
]



export function App() {
  return (
    <section className="App">
      {
        users.map(user=>{
            const {userName,name,isFollowing}=user
            return(
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
            )
        })
      }
    </section>
  );
}
