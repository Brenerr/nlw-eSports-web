import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient w-full max-w-[984px] rounded-lg overflow-hidden mt-8'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                    <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className='px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-md flex gap-3'>
                    <MagnifyingGlassPlus fontSize={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}