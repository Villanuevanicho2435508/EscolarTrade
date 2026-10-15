import Link from "next/link"
import { GraduationCap } from "lucide-react";

export function Logo(){
	return(
		<Link 
			className='flex gap-2 p-0 leading-4 h-full'
			href="/">
			<GraduationCap size={32} className='h-full aspect-square'/>
			<span>
				<p className='font-semibold text-sm'>
					EscolarTrade
				</p>
				<p className='text-xs text-muted-foreground'>
					CEU Malolos Campus	
				</p>
			</span>
		</Link>
	);
}
