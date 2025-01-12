
class Background {
	constructor(gameEngine) {
		this.gameEngine = gameEngine;
		this.animator = new Animator(ASSET_MANAGER.getAsset(BACKGROUND), 0, 0, 1016, 338, 1, 1);
	}

	update() {

	}

	draw(ctx) {
		this.animator.drawFrame(this.gameEngine.clockTick, ctx, 0, 0);
	}
}