import { TextInput, Button } from "@mantine/core"
import { useForm } from "react-hook-form"
import { requestProdFall } from "../api"

type Inputs = {
  table: FileList
  startId?: number
}

export const Exporter = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const [status, setStatus] = useState<{ status: 'ready' | 'working' | 'error', index: number }>({ status: 'ready', })
  
  const handleExport = ({ table, startId }: Inputs) => {
    let reader = new FileReader()

    reader.onload = async () => {
      let rows = (reader.result as string)?.split('\n')

      console.log(rows.length)

      for (let i = startId || 1; i < rows.length; i++) {
        try {
          // await requestProdFall({ id: '', created_date: '', description: '' })
        } catch (e) {
          console.error(e)
          setStatus('error')
          break
        }
      }
    }

    reader.readAsText(table[0])

  }
  
  return <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleExport)}>
    <input {...register('table')} type="file"></input>
    <TextInput {...register('startId')} label="Start ID" type="number"></TextInput>
    <Button type="submit">GO!</Button>
    <p>STATUS: {status === 'error'}</p>
  </form>
}