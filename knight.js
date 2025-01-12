
class Knight {
	constructor(gameEngine) {
		this.gameEngine = gameEngine;
		this.animator = new Animator(ASSET_MANAGER.getAsset(KNIGHT), 0, 0, 120, 80, 10, 0.1);
	}

	update() {

	}

	draw(ctx) {
		this.animator.drawFrame(this.gameEngine.clockTick, ctx, 340, 260);
	}
}