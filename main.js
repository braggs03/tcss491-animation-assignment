const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload(DRAGON);
ASSET_MANAGER.queueDownload(KNIGHT);
ASSET_MANAGER.queueDownload(BACKGROUND);

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;


	gameEngine.addEntity(new Knight(gameEngine));
	gameEngine.addEntity(new Dragon(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
