# Commands

All commands are typed in Twitch chat prefixed with `!`. Your username is used as your in-game name.

## General

| Command | Description |
|---------|-------------|
| `!join` | Join the game with your saved character. Creates a new one if none exists. |
| `!leave` | Leave the game. Clears buffs and removes you from the spawn grid. |
| `!skill` | Show your Combat, Magic, and Distance skill levels with XP progress. |
| `!level` | Show your character level and XP progress. |
| `!gold` | Show your total gold. |
| `!bonus` | Show all permanent bonus percentages (dmg, exp, gold, crit damage, crit chance). |
| `!tiles` | Show a numbered grid overlay of all spawn tiles in the combat zone (15s cooldown). |

## Customization

| Command | Description |
|---------|-------------|
| `!outfit <name>` | Change your outfit/skin. |
| `!spell <name>` | Equip a spell once purchased (must match your vocation). |
| `!projectile <name>` | Equip a projectile (must match your vocation). |
| `!vocation <name>` | Change vocation. Requires **level 8+**. Resets spell and projectile. |
| `!tile <number>` | Move to a different spawn tile in the combat zone. |
| `!color <slot> <R,G,B>` | Change a clothing color slot. Slots: `head`, `primary`, `secondary`, `detail`. Values 0-255. |

## Permanent Upgrades

Spend gold on permanent stat boosts:

| Command | Effect | Base Cost | Cost Formula |
|---------|--------|-----------|--------------|
| `!buy dmg` | +5% permanent damage | 1,000 gold | 1000 × 2^tier |
| `!buy exp` | +5% permanent XP | 1,000 gold | 1000 × 2^tier |
| `!buy gold` | +5% permanent gold | 1,000 gold | 1000 × 2^tier |
| `!buy crit_chance` | +5% critical strike chance | 1,000 gold | 1000 × 2^tier |
| `!buy crit_damage` | +5% critical strike damage | 1,000 gold | 1000 × 2^tier |

Maximum bonus is 100% (value 1.0). Critical strike starts with +10% base damage and 0% base chance.

## Upgrades

| Command | Effect |
|---------|--------|
| `!buy spell <id>` | Purchase a spell permanently. Costs and level requirements vary by spell. Once purchased, use `!spell <id>` to equip it. |
| `!buy projectile <id>` | Purchase a projectile permanently. Costs and level requirements vary. Once purchased, use `!projectile <id>` to equip it. |

Available spells are listed on the [Spells](/guide/spells) page. Projectiles are listed on the [Projectiles](/guide/projectiles) page.
