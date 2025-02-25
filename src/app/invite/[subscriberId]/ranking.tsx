import cu from '@/assets/medal-cooper.svg'
import au from '@/assets/medal-gold.svg'
import ag from '@/assets/medal-silver.svg'

import { getRanking } from '@/http/api'
import Image from 'next/image'

export async function Ranking() {
  const { ranking } = await getRanking()
  const medals = [
    <Image src={au} alt="gold" className="absolute top-0 right-8" key={0} />,
    <Image src={ag} alt="silver" className="absolute top-0 right-8" key={1} />,
    <Image src={cu} alt="cooper" className="absolute top-0 right-8" key={2} />,
  ]
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      {ranking.map((item, i) => {
        const rankingPosition = i + 1
        return (
          <div className="space-y-4" key={item.id}>
            <div className="relative rounded-xl bg-gray-700 boder border-gray-600 p-6 flex flex-col justify-center gap-3">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>
              {medals[i]}
            </div>
          </div>
        )
      })}
    </div>
  )
}
