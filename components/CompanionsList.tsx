import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";

interface CompanionListProps {
  title: string;
  companions?:Companion[];
  classNames?: string;
}


const CompanionsList = ({title, companions, classNames}:CompanionListProps) => {
  return (
    <article className={cn( 'companion-List', classNames)}>
      <h2 className=" text-3xl font-bold "> Recent Sessions </h2>
      <Table >
        <TableHeader>
            <TableRow>
              <TableHead className=" text-lg w-2/3 ">Lessons</TableHead>
              <TableHead className="text-lg">Subjects</TableHead>
              <TableHead className="text-lg text-right">Duration</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({id,subject,name,topic,duration}) => (
            <TableRow key={id}>
              <TableCell className="w-[100px]">
                <Link href={`/companions/${id}`}>
                    {/* {subject.charAt(0).toUpperCase() + subject.slice(1)} */}
                    <div className="flex items-center gap-2">
                      <div className="size-[72] p-1.5 flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
                       <img 
                        src={`/icons/${subject}.svg`} 
                        alt={subject}
                        width={35}
                        height={35} 
                      /> 
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl">
                          {name}
                        </p>
                        <p className="text-lg">
                          {topic}
                        </p>

                      </div>

                    </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </div>
                <div className="flex items-center justify-center rounded-lg p-2 md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
                  <img 
                    src={`/icons/${subject}.svg`} 
                    alt={subject}
                    width={18}
                    height={18} 
                  />

                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center w-full gap-2">
                  <p className="text-2xl">
                    {duration} 
                    <span className="max-md:hidden">mins</span>
                  </p>
                  <img 
                    src="/icons/clock.svg" 
                    alt="minutes"
                    width={14}
                    height={14}
                    className="max-md:hidden" 
                  />
                </div>
              </TableCell>
             
            </TableRow>
          ))}
              
        </TableBody>
      </Table>
    </article>

  )
}

export default CompanionsList