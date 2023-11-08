import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId,setDataUser, dataUser, setStates) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, )
    let query = datos.data;
    let party = await query.map((el) => {
      return el.party;
    }); 
    let fill = await query.map((el) => {
      return el.email;
    });
    let dropData =  await query.map((el) => {
      return el.state;
    })
    setDataUser({
      ...dataUser,
      email: fill,
      party: party
    })
   // setStates(dropData)
}


export{
    fetchRepresentatives
}
