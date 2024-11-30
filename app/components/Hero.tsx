import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<div className='relative min-h-screen bg-[#2A2422] flex items-center'>
			<div className='w-full max-w-6xl mx-auto px-8 flex items-center justify-between'>
				<div className='max-w-xl'>
					<h2 className='text-white text-7xl font-playfair tracking-[0.2em] mb-8'>VIBRATION</h2>
					<div className='space-y-4 mb-12'>
						<p className='text-gray-300 text-lg font-montserrat'>Shine and grace are not the same,</p>
						<p className='text-gray-300 text-lg font-montserrat'>
							There is a difference between smooth and plain.
						</p>
					</div>
					<Link
						href='#'
						className='inline-flex items-center px-8 py-3 border border-[#E67E22] text-white hover:bg-[#E67E22] hover:text-white transition-colors duration-300 rounded-3xl font-montserrat'
					>
						KNOW MORE
					</Link>
				</div>

				<div className='relative w-[600px] h-[600px]'>
					<div className='absolute right-0 top-1/2 -translate-y-1/2 transform rotate-6'>
						<Image
							src='/1.png'
							alt='Decorative interior design element'
							width={450}
							height={450}
							className='object-cover'
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
