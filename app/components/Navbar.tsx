'use client';
import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';

const Navbar = ({ opacity }: { opacity: MotionValue<number> }) => {
	return (
		<motion.nav
			className='fixed top-0 left-0 w-full z-10 mt-5'
			style={{ opacity }}
			transition={{ duration: 0.3 }}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center'>
						<motion.a
							href='/'
							className='text-foreground'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							<Image
								src='/logo1.svg'
								alt='Logo'
								width={160}
								height={40}
							/>
						</motion.a>
					</div>
					<div className='flex items-center'>
						<motion.button
							className='text-foreground p-2'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</motion.button>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
