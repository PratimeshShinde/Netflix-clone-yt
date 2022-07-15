import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"

interface Props{
    title: string
    movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#d3d3d3] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
        <div className="group relative md:-ml-2">
            <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

            <div>
                <Thumbnail/>
            </div>


            <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
        </div>
    </div>
  )
}

export default Row