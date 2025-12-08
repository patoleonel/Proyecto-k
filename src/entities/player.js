export function createPlayer(k, pos) {
    const player = k.add([
        k.sprite("maria_idle"),
        k.pos(pos),
        k.area(),
        k.body(),
        k.anchor("center"),
        "player",
        {
            hp: 5,
            maxHp: 5,
            isInvulnerable: false,

            makeInvulnerable(time = 1) {
                this.isInvulnerable = true;
                this.opacity = 0.5;
                k.wait(time, () => {
                    this.isInvulnerable = false;
                    this.opacity = 1;
                });
            },

            hurt(amount) {
                if (this.isInvulnerable) return;

                this.hp -= amount;
                if (this.hp < 0) this.hp = 0;

                this.makeInvulnerable(1);

                k.shake(10);

                // Check Death
                if (this.hp <= 0) {
                    this.die();
                }
            },

            heal(amount) {
                this.hp += amount;
                if (this.hp > this.maxHp) this.hp = this.maxHp;
            },

            die() {
                k.shake(20);

                // Determine dead sprite
                // We don't have isPlayerEvolved available directly here unless passed or global.
                // However, we can check current sprite name or just default to maria_dead if simple.
                // Better approach: player.isEvolved property? 
                // For now, let's assume we can detect or just use a generic logic.
                // Actually, level1.js handles evolution state.
                // Let's just play a death animation if available or change sprite.

                // Hack: Check if we are super
                // In level1, we change sprite prefix.
                // Let's try to infer or just set a "dead" state that Level 1 can react to?
                // Or simply:
                this.use(k.sprite("maria_dead")); // Default
                // If we want correct evolved death, we need state.

                k.wait(2, () => {
                    k.go(k.sceneName());
                });
            }
        }
    ]);
    return player;
}
