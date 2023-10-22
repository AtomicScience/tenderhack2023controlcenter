import { useQuery } from 'react-query'
import { requestProdFall } from "../api";

export const PopUps = () => {
  // useEffect(() => {
  //   const intervalId = setInterval(() => notifications.show({ 
  //     title: 'Ошибка устранена', 
  //     message: 'Ошибка с которой вы столкнулись 10.11.2023 в 09:00 устранена',
  //     color: 'red' 
  //   }), 10000)

  //   return () => {
  //     clearInterval(intervalId);
  //   }
  // }, [])

  const { refetch } = useQuery("servicePush", () => requestProdFall({id: 'test', created_date: "2023-10-22T04:50:09.421Z", description: 'Something went wrong'}),  { enabled: false });

  return <button onClick={() => refetch()}>Уронить прод</button>
}