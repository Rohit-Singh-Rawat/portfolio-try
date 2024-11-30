'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Animated = () => {
	const scrollRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["start start", "end end"]
	});

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		restDelta: 0.001
	});

	const clipPathProgress = useTransform(smoothProgress, [0, 0.6], [0, 100]);

	const topClipPath = useTransform(clipPathProgress, [0, 100], [50, 0]);
	const bottomClipPath = useTransform(clipPathProgress, [0, 100], [50, 100]);
	const opacity = useTransform(
		clipPathProgress,
		[95, 100],
		[0, 1]
	);

	return (
		<div className='parent-container'>
			<Navbar opacity={opacity} />
			<div
				className='relative min-h-[200vh]'
				ref={scrollRef}
			>
				<section className='sticky top-0 h-screen overflow-hidden min-h-[100vh] '>
					<motion.div
						className='absolute z-0 bg-cover w-[100vw] h-[100vh]'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, ease: 'easeInOut' }}
					>
						<video
							src='/1.mp4'
							loop
							autoPlay
							muted
							className='object-cover aspect-video w-[100vw] h-[100vh] z-50'
						></video>
					</motion.div>
				</section>
				<motion.section
					className='fixed top-0 left-0 min-h-[100vh] w-[100vw] bg-[#433631]'
					style={{
						clipPath: useTransform(
							[topClipPath, bottomClipPath],
							([top, bottom]) => `polygon(0% ${top}%, 100% ${top}%, 100% ${bottom}%, 0% ${bottom}%)`
						),
					}}
				>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
					>
						<Hero />
					</motion.div>
				</motion.section>
			</div>
		</div>
	);
};

export default Animated;
