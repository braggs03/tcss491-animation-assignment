
class Dragon {
	constructor(gameEngine) {
		this.gameEngine = gameEngine;
		this.animator = new Animator(ASSET_MANAGER.getAsset(DRAGON), 0, 0, 80, 112, 12, 0.16);
	}

	update() {

	}

	draw(ctx) {
		this.animator.drawFrame(this.gameEngine.clockTick, ctx, 1500, 205);
	}
}