import cooper from '@/assets/medal-cooper.svg'
import gold from '@/assets/medal-gold.svg'
import silver from '@/assets/medal-silver.svg'
import Image from 'next/image'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 boder border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Yan Mello
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image src={gold} alt="gold" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 boder border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Yan Valentin
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1029
          </span>
          <Image src={silver} alt="silver" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 boder border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> |Yan Doro
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1028
          </span>
          <Image src={cooper} alt="cooper" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
