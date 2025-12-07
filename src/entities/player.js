export function createPlayer(k, pos) {
    const player = k.add([
        k.sprite("maria", { height: 80 }),
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
                // Simple restart for now
                k.wait(1, () => {
                    k.go(k.sceneName());
                });
            }
        }
    ]);
    return player;
}
