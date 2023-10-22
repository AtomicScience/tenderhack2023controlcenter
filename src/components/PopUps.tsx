import { useQuery } from 'react-query'
import { requestProdFall } from "../api";
import { notifications } from '@mantine/notifications';

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

  const { refetch } = useQuery("servicePush", () => requestProdFall({
    id: 'test', created_date: new Date().toJSON(), description: 'Данные не могут быть проимпортированы по причине: Ранее была импортирована более поздняя версия сущности. PackageGuid : 37872419, PackageDateTime : 15.10.2023 23:59:38 +03:00'
  }),  { enabled: false });

  return <button onClick={() => {
    refetch()
    notifications.show({ title: 'Прод успешно упал', message: 'Ошибка капнула', color: 'green' })
  }}>Уронить прод</button>
}