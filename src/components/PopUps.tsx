import { notifications } from "@mantine/notifications"
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

  const { refetch } = useQuery("servicePush", requestProdFall,  { enabled: false });

  return <button onClick={() => refetch()}>Уронить прод</button>
}