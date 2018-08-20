import { TweenMax, Power0, Expo, TimelineMax, Back, TweenConfig } from 'gsap';

export function animateBtnClick(target) {
	const downConfig: TweenConfig = { scaleX: 0.9, scaleY: 0.9, force3D: true };
	const upConfig: TweenConfig = { scaleX: 1, scaleY: 1, force3D: true, ease: Back.easeOut.config(4) };

	return new TimelineMax()
		.to(target, 0.25, downConfig)
		.to(target, 0.25, upConfig, 'btn-up');
}

export function animateTitleIn(target: any[]) {
	const titleBg = target[0];
	const titleText = target[1];
	const titleTextConfig: TweenConfig = { autoAlpha: 0, scaleX: 0.9, scaleY: 0.9, force3D: true, ease: Expo.easeOut };
	const titleBgFadeConfig: TweenConfig = { autoAlpha: 0, ease: Expo.easeOut };
	const titleBgScaleConfig: TweenConfig = { scaleY: 0.5, force3D: true, ease: Expo.easeOut };

	return new TimelineMax()
		.from(titleText, 0.5, titleTextConfig)
		.from(titleText.firstChild, 1, titleTextConfig, '-=0.25')
		.from(titleBg, 0.5, titleBgFadeConfig, '-=1')
		.from(titleBg, 1, titleBgScaleConfig, '-=1');
}

export function animateBorderBoxIn(target: any[]) {
	const topCovers = target.filter((ele) => ele.className === 'top-cover');
	const sideCovers = target.filter((ele) => ele.className === 'side-cover');
	const bottomCovers = target.filter((ele) => ele.className === 'bottom-cover');
	const tweenConfig: TweenConfig = { progress: 1, ease: Power0.easeOut };

	const timeline = new TimelineMax({ paused: true })
		.from(topCovers, 0.33, { width: '51%' })
		.from(sideCovers, 0.33, { height: '101%' })
		.from(bottomCovers, 0.33, { width: '51%' });

	return TweenMax.to(timeline, 1.2, tweenConfig);
}

export function animateDescIn(target) {
	const descConfig: TweenConfig = { autoAlpha: 0, y: '-30px', force3D: true, ease: Expo.easeOut };
	return new TimelineMax()
		.from(target, 2, descConfig);
}

export function animateBtnIn(target) {
	const btnConfig: TweenConfig = { autoAlpha: 0, scaleX: 0.75, scaleY: 0.75, force3D: true, ease: Expo.easeOut };

	const tl = new TimelineMax()
		.from(target, 1, btnConfig);
	return tl;
}

export function animateGsapManIn(target) {
	const gsapManConfig: TweenConfig = { y: 400, force3D: true, ease: Expo.easeOut };

	const tl = new TimelineMax()
		.from(target, 1.25, gsapManConfig);
	return tl;
}

export function animatePageOut(target) {
	const pageConfig: TweenConfig = { x: -2048, force3D: true, ease: Expo.easeIn };

	return new TimelineMax({ delay: 0.5 })
		.to(target, 1, pageConfig);
}
