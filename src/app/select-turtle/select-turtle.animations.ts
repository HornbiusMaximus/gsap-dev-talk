import { TweenMax, Power0, Power1, Power2, Power4, Circ, Expo, Bounce, Back, TimelineMax, TweenConfig } from 'gsap';

///////////////////////////////////////////////////////////////////////
// Intro Animations

export function animateManholeIn(target) {
	const manhole = target;
	const manholeImg = target.lastChild;
	const manholeRoleConfig: TweenConfig = { x: 1024, rotationZ: 360, force3D: true, ease: Back.easeOut.config(0.5) };
	const manholeDropConfig: TweenConfig = { y: -300, force3D: true, ease: Bounce.easeOut };
	const manholeSwayConfig: TweenConfig = { rotationX: -10, force3D: true, ease: Power1.easeInOut };
	const manholeFallConfig: TweenConfig = { rotationX: 60, z: 30, force3D: true, ease: Bounce.easeOut };

	return new TimelineMax()
		.from(manhole, 3, manholeRoleConfig, 'intro')
		.from(manhole, 1, manholeDropConfig, 'intro')
		.to(manholeImg, 1.5, manholeSwayConfig, '-=1.25')
		.to(manholeImg, 1, manholeFallConfig);
}

export function animateLogoIn(target) {
	const logoConfig: TweenConfig = { autoAlpha: 0, scaleX: 0.8, scaleY: 0.8, force3D: true, ease: Expo.easeOut };

	return new TimelineMax()
		.from(target, 1.5, logoConfig);
}

export function animateBackgroundIn(target: any[]) {
	const backgroundConfig: TweenConfig = { autoAlpha: 0, scaleX: 1.2, scaleY: 1.2, force3D: true, ease: Expo.easeOut };

	return new TimelineMax()
		.from(target, 1.5, backgroundConfig);
}

export function animateIconsIn(target: any[]) {
	const positionConfig: TweenConfig = { autoAlpha: 0, cycle: {
			x: ['160%', '-160%', '160%', '-160%'], y: ['115%', '115%', '-80%', '-80%']
		}, force3D: true, ease: Back.easeOut.config(1) };
	const rotationConfig = { rotationZ: 360, force3D: true, ease: Power2.easeOut };

	return new TimelineMax()
		.staggerFrom(target, 0.75, positionConfig, 0.15, 'icons')
		.staggerFrom(target, 1, rotationConfig, 0.15, 'icons');
}

export function animateIconPulse(target: any[]) {
	const pulseConfig = { borderColor: 'rgba(255, 255, 255, 0.25)', repeat: -1, yoyo: true, ease: Expo.easeOut };

	return new TimelineMax()
		.to(target, 1.5, pulseConfig);
}

///////////////////////////////////////////////////////////////////////
// Character Select Animations

export function animateBtnClick(target) {
	const btnDownConfig: TweenConfig = { scaleX: 0.9, scaleY: 0.9, force3D: true };
	const ringConfig: TweenConfig = { autoAlpha: 0, width: '200%', height: '200%', borderWidth: 4, ease: Expo.easeOut };
	const btnUpConfig: TweenConfig = { scaleX: 1, scaleY: 1, force3D: true, ease: Back.easeOut.config(4) };

	return new TimelineMax()
		.to(target, 0.25, btnDownConfig)
		.to(target.firstChild, 1, ringConfig, 'btn-up')
		.to(target, 0.25, btnUpConfig, 'btn-up');
}

export function animateManholeSlide(target) {
	const manholeDiv = target.firstChild;
	const manholeImg = target.lastChild;
	const slideConfig: TweenConfig = { y: -140, scaleX: 0.8, scaleY: 0.8, force3D: true, ease: Power2.easeInOut };

	return new TimelineMax()
		.set(manholeDiv, { autoAlpha: 1 })
		.to(manholeImg, 1, slideConfig);
}

export function animateLogoOut(target) {
	const config: TweenConfig = { autoAlpha: 0, scaleX: 1.2, scaleY: 1.2, force3D: true };

	return new TimelineMax()
		.to(target, 0.3, config);
}

export function animateHideElements(target: any[]) {
	const hideConfig: TweenConfig = { autoAlpha: 0, ease: Expo.easeIn };

	return new TimelineMax()
		.to(target, 0.35, hideConfig, '+=0.1');
}

export function animateFlyIntoSewer(target) {
	const positionConfig: TweenConfig = { y: '20%', force3D: true, ease: Power0.easeOut };
	const rotationConfig: TweenConfig = { rotationX: 0, force3D: true, ease: Power0.easeOut };
	const scaleConfig: TweenConfig = { scaleX: 6, scaleY: 6, force3D: true, ease: Power0.easeNone };
	const fadeConfig: TweenConfig = { autoAlpha: 0, ease: Power0.easeNone };

	const timeline = new TimelineMax({ paused: true })
		.to(target, 1, positionConfig, 'manhole')
		.to(target.firstChild, 1, rotationConfig, 'manhole')
		.to(target, 1.25, scaleConfig, 'manhole+=1')
		.to(target.firstChild.firstChild, 0.75, fadeConfig, 'manhole+=1.5');

	return TweenMax.to(timeline, 2, { progress: 1, ease: Power4.easeInOut });
}
