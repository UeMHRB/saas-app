import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({searchParams}:SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({subject, topic })
  console.log('Companions:', companions);
  console.log('Search Params:', filters);

  return (
    <main>
      <section className="flex flex-col justify-between gap-4 max-sm:flex-col"> 
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
        <section className="companions-grid">
          {
            companions.map((companion) => (
              <CompanionCard 
                key={companion.id} 
                {...companion}
                color={getSubjectColor(companion.subject) || 'bg-gray-200'}
              >

                
              </CompanionCard>
            ))
          }

        </section>

      </section>
    </main>
  )
}

export default CompanionsLibrary