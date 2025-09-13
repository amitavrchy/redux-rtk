import { useGetTasksQuery } from "@/redux/api/baseApi"

export const Task = () => {
  const {data, isLoading, isError} = useGetTasksQuery(undefined)
  console.log({data, isLoading, isError})
  return (
    <div className="mt-5">
      <div className="my-5 flex justify-between">
        <h2 className="text-2xl font-bold">Tasks</h2>
        
      </div>
      <div className="flex gap-5" >
       
      </div>

    </div>
  )
}
